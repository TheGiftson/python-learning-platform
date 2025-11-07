import { useState } from 'react';
import { ArrowLeft, ChevronRight, ChevronLeft, Lightbulb, Play, CheckCircle, XCircle } from 'lucide-react';
import CodeEditor from './CodeEditor';
import { codeAPI, progressAPI } from '../services/api';

const LessonView = ({ lesson, onBack, user, onProgressUpdate }) => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [code, setCode] = useState(lesson.topics[currentTopicIndex].starterCode);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [error, setError] = useState(null);

  const currentTopic = lesson.topics[currentTopicIndex];

  const handleNext = () => {
    if (currentTopicIndex < lesson.topics.length - 1) {
      const nextIndex = currentTopicIndex + 1;
      setCurrentTopicIndex(nextIndex);
      setCode(lesson.topics[nextIndex].starterCode);
      setOutput('');
      setShowHints(false);
    }
  };

  const handlePrevious = () => {
    if (currentTopicIndex > 0) {
      const prevIndex = currentTopicIndex - 1;
      setCurrentTopicIndex(prevIndex);
      setCode(lesson.topics[prevIndex].starterCode);
      setOutput('');
      setShowHints(false);
    }
  };

  const handleRunCode = async () => {
    setRunning(true);
    setError(null);
    setOutput('');

    try {
      const response = await codeAPI.execute(code);
      if (response.data.success) {
        setOutput(response.data.output || 'Code executed successfully!');
      } else {
        setError(response.data.error);
        setOutput(response.data.output || '');
      }
    } catch (err) {
      setError('Failed to execute code. Make sure the backend server is running.');
    } finally {
      setRunning(false);
    }
  };

  const handleMarkComplete = async () => {
    try {
      await progressAPI.updateProgress(
        lesson.id,
        currentTopic.id,
        true,
        code
      );
      if (onProgressUpdate) {
        onProgressUpdate();
      }
      // Move to next topic if available
      if (currentTopicIndex < lesson.topics.length - 1) {
        handleNext();
      }
    } catch (err) {
      console.error('Failed to update progress:', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </button>
        <div className="text-sm text-gray-600">
          Topic {currentTopicIndex + 1} of {lesson.topics.length}
        </div>
      </div>

      {/* Lesson Title */}
      <div className="card p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-lg opacity-90">{lesson.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold">Progress</span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentTopicIndex + 1) / lesson.topics.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentTopicIndex + 1) / lesson.topics.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Panel */}
        <div className="space-y-4">
          {/* Topic Card with Blue Theme */}
          <div className="card p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-500 rounded-full p-2">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">{currentTopic.title}</h2>
            </div>
            
            {/* Content with better formatting */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed space-y-4">
                {currentTopic.content.split('\n\n').map((paragraph, idx) => {
                  // Check if it's a code block
                  if (paragraph.includes('```')) {
                    const codeMatch = paragraph.match(/```(\w+)?\n([\s\S]*?)```/);
                    if (codeMatch) {
                      return (
                        <div key={idx} className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{codeMatch[2]}</pre>
                        </div>
                      );
                    }
                  }
                  
                  // Check if it's a heading
                  if (paragraph.startsWith('# ')) {
                    return <h3 key={idx} className="text-2xl font-bold text-blue-800 mt-6 mb-3">{paragraph.substring(2)}</h3>;
                  }
                  if (paragraph.startsWith('## ')) {
                    return <h4 key={idx} className="text-xl font-semibold text-blue-700 mt-4 mb-2">{paragraph.substring(3)}</h4>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h5 key={idx} className="text-lg font-semibold text-blue-600 mt-3 mb-2">{paragraph.substring(4)}</h5>;
                  }
                  
                  // Regular paragraph
                  return (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hints Card with Engaging Design */}
          <div className="card p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-amber-400 shadow-lg">
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center space-x-2 text-amber-800 font-bold text-lg mb-2 hover:text-amber-900 transition-colors"
            >
              <Lightbulb size={20} />
              <span>{showHints ? 'Hide Hints' : 'Show Hints'}</span>
            </button>
            {showHints && (
              <ul className="list-disc list-inside space-y-1 text-yellow-900">
                {currentTopic.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Code Editor Panel */}
        <div className="space-y-4">
          <div className="card p-6 bg-gradient-to-br from-white to-blue-50 border-l-4 border-purple-500 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="bg-purple-500 rounded-full p-2">
                  <Play className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-purple-900">Try It Yourself</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleMarkComplete}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-md"
                >
                  <CheckCircle size={18} />
                  <span>Complete</span>
                </button>
                <button
                  onClick={handleRunCode}
                  disabled={running}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <Play size={18} />
                  <span>{running ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>
            </div>
            <CodeEditor value={code} onChange={setCode} />
          </div>

          {/* Error */}
          {error && (
            <div className="card p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-400 shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <XCircle className="text-red-600" size={24} />
                <h3 className="text-lg font-bold text-red-800">Error</h3>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-sm text-red-700 bg-white p-3 rounded">{error}</pre>
            </div>
          )}

          {/* Output */}
          {output && (
            <div className="card p-6 bg-gray-900 border-l-4 border-green-500 shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-white">Output:</h3>
              <pre className="whitespace-pre-wrap font-mono text-sm">{output}</pre>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="card p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentTopicIndex === 0}
            className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-bold transition-all transform ${
              currentTopicIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-blue-50 text-blue-700 hover:scale-105 shadow-md hover:shadow-lg border-2 border-blue-300'
            }`}
          >
            <ChevronLeft size={24} />
            <span>Previous Topic</span>
          </button>
          
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Topic Progress</div>
            <div className="text-2xl font-bold text-blue-700">
              {currentTopicIndex + 1} / {lesson.topics.length}
            </div>
          </div>
          
          <button
            onClick={handleNext}
            disabled={currentTopicIndex === lesson.topics.length - 1}
            className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-bold transition-all transform ${
              currentTopicIndex === lesson.topics.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 shadow-md hover:shadow-lg'
            }`}
          >
            <span>Next Topic</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;

import { useState } from 'react';
import { ArrowLeft, Play, CheckCircle, Lightbulb } from 'lucide-react';
import CodeEditor from './CodeEditor';

const ProjectView = ({ project, onBack }) => {
  const [code, setCode] = useState(project.starterCode);
  const [output, setOutput] = useState('');
  const [showHints, setShowHints] = useState(false);

  const handleRunCode = () => {
    setOutput('⚠️ Note: This is a demo. In a full implementation, you would need a Python backend to execute code.\n\nYour code:\n' + code);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Dashboard</span>
      </button>

      {/* Project Title */}
      <div className={`card p-6 text-white ${project.guided ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg opacity-90">{project.description}</p>
          </div>
          {project.guided && (
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold">📚 GUIDED</span>
            </div>
          )}
          {project.isFinal && (
            <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold">🏆 FINAL PROJECT</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Requirements Panel */}
        <div className="space-y-4">
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <CheckCircle className="text-green-600" />
              <span>Requirements</span>
            </h2>
            <ul className="space-y-3">
              {project.requirements.map((req, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="bg-purple-100 text-purple-800 font-semibold px-2 py-1 rounded text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 flex-1">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hints */}
          <div className="card p-6 bg-yellow-50 border-2 border-yellow-200">
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center space-x-2 text-yellow-800 font-semibold mb-2"
            >
              <Lightbulb size={20} />
              <span>{showHints ? 'Hide Hints' : 'Show Hints'}</span>
            </button>
            {showHints && (
              <ul className="list-disc list-inside space-y-1 text-yellow-900">
                {project.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Code Editor Panel */}
        <div className="space-y-4">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Build Your Project</h3>
              <button
                onClick={handleRunCode}
                className="btn-primary flex items-center space-x-2"
              >
                <Play size={18} />
                <span>Run Code</span>
              </button>
            </div>
            <CodeEditor value={code} onChange={setCode} />
          </div>

          {/* Output */}
          {output && (
            <div className="card p-6 bg-gray-900 text-green-400">
              <h3 className="text-lg font-bold mb-2 text-white">Output:</h3>
              <pre className="whitespace-pre-wrap font-mono text-sm">{output}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;

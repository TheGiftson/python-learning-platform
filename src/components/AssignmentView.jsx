import { useState } from 'react';
import { ArrowLeft, Play, CheckCircle, XCircle } from 'lucide-react';
import CodeEditor from './CodeEditor';

const AssignmentView = ({ assignment, onBack }) => {
  const [code, setCode] = useState('# Write your solution here\n');
  const [output, setOutput] = useState('');
  const [testResults, setTestResults] = useState([]);

  const handleRunTests = () => {
    setOutput('⚠️ Note: This is a demo. In a full implementation, you would need a Python backend to execute and test code.\n\nYour code:\n' + code);
    
    // Simulate test results
    const results = assignment.testCases.map((testCase, index) => ({
      id: index,
      passed: Math.random() > 0.3, // Random for demo
      input: testCase.input,
      expected: testCase.expected,
      actual: testCase.expected // Would be actual output in real implementation
    }));
    setTestResults(results);
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

      {/* Assignment Title */}
      <div className="card p-6 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <h1 className="text-3xl font-bold mb-2">{assignment.title}</h1>
        <p className="text-lg opacity-90">{assignment.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test Cases Panel */}
        <div className="space-y-4">
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Test Cases</h2>
            <div className="space-y-3">
              {assignment.testCases.map((testCase, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-700 mb-2">Test Case {index + 1}</div>
                  <div className="text-sm space-y-1">
                    <div><span className="font-semibold">Input:</span> {JSON.stringify(testCase.input)}</div>
                    <div><span className="font-semibold">Expected:</span> {JSON.stringify(testCase.expected)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-4">Test Results</h2>
              <div className="space-y-2">
                {testResults.map((result) => (
                  <div
                    key={result.id}
                    className={`flex items-center space-x-2 p-3 rounded-lg ${
                      result.passed ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {result.passed ? (
                      <CheckCircle size={20} className="text-green-600" />
                    ) : (
                      <XCircle size={20} className="text-red-600" />
                    )}
                    <span className="font-semibold">Test {result.id + 1}</span>
                    <span className="text-sm">{result.passed ? 'Passed' : 'Failed'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Code Editor Panel */}
        <div className="space-y-4">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Your Solution</h3>
              <button
                onClick={handleRunTests}
                className="btn-primary flex items-center space-x-2"
              >
                <Play size={18} />
                <span>Run Tests</span>
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

export default AssignmentView;

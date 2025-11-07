import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, CheckCircle, XCircle, Award } from 'lucide-react';

const TheoryExamView = ({ exam, onBack, onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(exam.timeLimit * 60); // Convert to seconds
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!submitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, submitted]);

  const handleAnswerSelect = (questionId, answerIndex) => {
    if (!submitted) {
      setAnswers({ ...answers, [questionId]: answerIndex });
    }
  };

  const handleSubmit = () => {
    let totalScore = 0;
    exam.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        totalScore += q.points;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
    if (onSubmit) {
      onSubmit(totalScore, exam.totalMarks);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = () => {
    const percentage = (score / exam.totalMarks) * 100;
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Group questions by section
  const sections = {};
  exam.questions.forEach(q => {
    if (!sections[q.section]) {
      sections[q.section] = [];
    }
    sections[q.section].push(q);
  });

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

      {/* Exam Title */}
      <div className="card p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{exam.title}</h1>
            <p className="text-lg opacity-90">{exam.description}</p>
            <p className="mt-2 text-sm">Total Marks: {exam.totalMarks} | Passing Marks: {exam.passingMarks}</p>
          </div>
          {!submitted && (
            <div className="bg-white/20 px-6 py-4 rounded-lg text-center">
              <Clock size={32} className="mx-auto mb-2" />
              <div className="text-2xl font-bold">{formatTime(timeLeft)}</div>
              <div className="text-sm opacity-90">Time Left</div>
            </div>
          )}
        </div>
      </div>

      {/* Results (if submitted) */}
      {submitted && (
        <div className={`card p-6 ${score >= exam.passingMarks ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {score >= exam.passingMarks ? (
                <CheckCircle size={48} className="text-green-600" />
              ) : (
                <XCircle size={48} className="text-red-600" />
              )}
              <div>
                <h2 className="text-2xl font-bold">
                  {score >= exam.passingMarks ? 'Congratulations! You Passed!' : 'Not Passed'}
                </h2>
                <p className="text-gray-700">
                  Your Score: <span className={`font-bold text-2xl ${getScoreColor()}`}>{score}/{exam.totalMarks}</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Percentage: {((score / exam.totalMarks) * 100).toFixed(1)}% 
                  {score >= exam.passingMarks ? ' ✅' : ` (Need ${exam.passingMarks} to pass)`}
                </p>
              </div>
            </div>
            {score >= exam.passingMarks && (
              <Award size={64} className="text-yellow-500" />
            )}
          </div>
        </div>
      )}

      {/* Questions */}
      <div className="space-y-6">
        {Object.entries(sections).map(([sectionName, questions]) => (
          <div key={sectionName} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">{sectionName}</h2>
            <div className="space-y-6">
              {questions.map((question, qIndex) => (
                <div key={question.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold flex-1">
                      <span className="text-indigo-600 mr-2">Q{question.id}.</span>
                      {question.question}
                    </h3>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {question.points} marks
                    </span>
                  </div>
                  <div className="space-y-2 ml-6">
                    {question.options.map((option, optIndex) => {
                      const isSelected = answers[question.id] === optIndex;
                      const isCorrect = optIndex === question.correctAnswer;
                      const showResult = submitted;

                      let bgColor = 'bg-gray-50 hover:bg-gray-100';
                      let borderColor = 'border-gray-300';
                      let textColor = 'text-gray-700';

                      if (showResult) {
                        if (isCorrect) {
                          bgColor = 'bg-green-100';
                          borderColor = 'border-green-500';
                          textColor = 'text-green-900';
                        } else if (isSelected && !isCorrect) {
                          bgColor = 'bg-red-100';
                          borderColor = 'border-red-500';
                          textColor = 'text-red-900';
                        }
                      } else if (isSelected) {
                        bgColor = 'bg-indigo-100';
                        borderColor = 'border-indigo-500';
                        textColor = 'text-indigo-900';
                      }

                      return (
                        <button
                          key={optIndex}
                          onClick={() => handleAnswerSelect(question.id, optIndex)}
                          disabled={submitted}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${borderColor} ${textColor} ${!submitted ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <div className="flex items-center justify-between">
                            <span>
                              <span className="font-semibold mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                              {option}
                            </span>
                            {showResult && isCorrect && <CheckCircle size={20} className="text-green-600" />}
                            {showResult && isSelected && !isCorrect && <XCircle size={20} className="text-red-600" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      {!submitted && (
        <div className="card p-6 bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">
                Answered: {Object.keys(answers).length} / {exam.questions.length}
              </p>
              <p className="text-sm text-gray-600">Make sure you've answered all questions before submitting</p>
            </div>
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < exam.questions.length}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Submit Exam
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheoryExamView;

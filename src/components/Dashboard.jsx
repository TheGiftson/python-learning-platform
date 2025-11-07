import { BookOpen, Code, FileText, Award, TrendingUp, Brain } from 'lucide-react';
import { lessons, projects, assignments, theoryExam } from '../data/lessons';

const Dashboard = ({ onLessonSelect, onProjectSelect, onAssignmentSelect, onCertificateView, onTheoryExamStart, userProgress }) => {
  // Separate coding and theory assignments
  const codingAssignments = assignments.filter(a => a.type === 'coding');
  const theoryAssignments = assignments.filter(a => a.type === 'theory');
  // Calculate total topics
  const totalTopics = lessons.reduce((sum, lesson) => sum + (lesson.topics?.length || 0), 0);
  
  // Calculate completed lessons (assuming each lesson completion is tracked)
  const completedLessons = userProgress?.completed_lessons || 0;
  
  // Check if assignment is unlocked
  const isAssignmentUnlocked = (assignment) => {
    if (!assignment.requiredLessons) return true;
    return completedLessons >= assignment.requiredLessons;
  };
  
  // Check if theory exam is unlocked
  const isTheoryExamUnlocked = () => {
    if (!theoryExam.requiredLessons) return true;
    // Must complete all lessons and all theory assignments
    return completedLessons >= theoryExam.requiredLessons;
  };

  // Safety check
  if (!lessons || lessons.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Loading lessons...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="card p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome to Learn Python with TheGiftson! 🎉</h2>
        <p className="text-lg opacity-90">
          Your complete Python programming journey from beginner to professional level. Master Python with interactive lessons,
          hands-on projects, and earn your certificate of completion!
        </p>
        <div className="mt-4">
          <a 
            href="https://gift-portfolio.web.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg transition-colors"
          >
            <span>👨‍💻 View Instructor Portfolio</span>
            <span>→</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <BookOpen size={24} />
              <span className="text-lg font-semibold">{lessons.length} Lessons</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Code size={24} />
              <span className="text-lg font-semibold">{projects.length} Projects</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <FileText size={24} />
              <span className="text-lg font-semibold">{assignments.length} Assignments</span>
            </div>
          </div>
        </div>
        {userProgress && userProgress.percentage !== undefined && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Your Progress</span>
              <span className="text-lg">{Math.round(userProgress.percentage)}% Complete</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-300"
                style={{ width: `${userProgress.percentage}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Certificate Eligibility Section */}
      <section className="card p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3">
            <Award className="text-white" size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Certificate Eligibility</h2>
            <p className="text-gray-600">Track your progress towards earning your Python certificate</p>
          </div>
        </div>

        {/* Scoring Breakdown */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Scoring System (Total: 100 points)</h3>
          <p className="text-gray-700 mb-4">
            Your final score is calculated from three components. You need <span className="font-bold text-orange-600">90 points or more</span> to be eligible for the certificate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Assignments & Challenges - 25% */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">ASSIGNMENTS & CHALLENGES</span>
                <span className="text-2xl font-bold text-green-700">25%</span>
              </div>
              <div className="text-3xl font-bold text-green-900 mb-2">
                {userProgress?.assignments_score || 0}/25
              </div>
              <div className="text-sm text-gray-700">
                • 3 Theory Assignments<br/>
                • 3 Coding Challenges
              </div>
              <div className="mt-3 w-full bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all"
                  style={{ width: `${((userProgress?.assignments_score || 0) / 25) * 100}%` }}
                />
              </div>
            </div>

            {/* Theory Exam - 37.5% */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">THEORY EXAM</span>
                <span className="text-2xl font-bold text-blue-700">37.5%</span>
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {userProgress?.theory_score || 0}/37.5
              </div>
              <div className="text-sm text-gray-700">
                • Final Theory Examination<br/>
                • 25 Questions<br/>
                • Need: 33.75/37.5 (90%)
              </div>
              <div className="mt-3 w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${((userProgress?.theory_score || 0) / 37.5) * 100}%` }}
                />
              </div>
            </div>

            {/* Final Project - 37.5% */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">FINAL PROJECT</span>
                <span className="text-2xl font-bold text-purple-700">37.5%</span>
              </div>
              <div className="text-3xl font-bold text-purple-900 mb-2">
                {userProgress?.project_score || 0}/37.5
              </div>
              <div className="text-sm text-gray-700">
                • Student Grade System<br/>
                • Independent Project<br/>
                • Need: 33.75/37.5 (90%)
              </div>
              <div className="mt-3 w-full bg-purple-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all"
                  style={{ width: `${((userProgress?.project_score || 0) / 37.5) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Total Score */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold opacity-90 mb-1">TOTAL SCORE</div>
              <div className="text-5xl font-bold">
                {((userProgress?.assignments_score || 0) + (userProgress?.theory_score || 0) + (userProgress?.project_score || 0)).toFixed(1)}/100
              </div>
              <div className="mt-2 text-lg">
                {((userProgress?.assignments_score || 0) + (userProgress?.theory_score || 0) + (userProgress?.project_score || 0)) >= 90 
                  ? '✅ Eligible for Certificate!' 
                  : `Need ${(90 - ((userProgress?.assignments_score || 0) + (userProgress?.theory_score || 0) + (userProgress?.project_score || 0))).toFixed(1)} more points`}
              </div>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold">
                {(((userProgress?.assignments_score || 0) + (userProgress?.theory_score || 0) + (userProgress?.project_score || 0))).toFixed(0)}%
              </div>
              <div className="text-sm opacity-90">Overall Score</div>
            </div>
          </div>
        </div>

        {/* Certificate Action */}
        {((userProgress?.assignments_score || 0) + (userProgress?.theory_score || 0) + (userProgress?.project_score || 0)) >= 90 && (
          <div className="mt-6 text-center">
            <button
              onClick={onCertificateView}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl py-4 px-12 rounded-full shadow-xl transform hover:scale-105 transition-all"
            >
              🎓 Generate Your Certificate
            </button>
            <p className="text-gray-600 mt-3">Congratulations! You've met all requirements!</p>
          </div>
        )}
      </section>

      {/* Old Certificate Section (Keep for backwards compatibility) */}
      {userProgress && userProgress.percentage !== undefined && userProgress.percentage >= 80 && false && (
        <div className="card p-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Award size={48} />
              <div>
                <h3 className="text-2xl font-bold">Certificate of Completion</h3>
                <p className="opacity-90">
                  {userProgress.percentage === 100 && userProgress.eligible_for_certificate
                    ? 'You\'re eligible! Generate your certificate now.'
                    : 'Complete all requirements to earn your certificate'}
                </p>
              </div>
            </div>
            <button
              onClick={onCertificateView}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              View Certificate
            </button>
          </div>
        </div>
      )}

      {/* Learning Path */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold">Learning Path</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => onLessonSelect(lesson)}
              className="card p-6 cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-300">
                  LESSON {lesson.id}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
              <p className="text-gray-600 mb-4">{lesson.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{lesson.topics.length} Topics</span>
                <span className="text-blue-600 font-semibold hover:underline">Start Learning →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Code className="text-purple-600" size={28} />
          <h2 className="text-2xl font-bold">Hands-On Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className="card p-6 cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-lg ${project.guided ? 'bg-blue-100' : 'bg-purple-100'}`}>
                  <Code className={project.guided ? 'text-blue-600' : 'text-purple-600'} size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  project.guided 
                    ? 'bg-blue-100 text-blue-800 border-blue-300' 
                    : project.isFinal 
                    ? 'bg-yellow-100 text-yellow-800 border-yellow-300' 
                    : 'bg-purple-100 text-purple-800 border-purple-300'
                }`}>
                  {project.guided ? '📚 GUIDED' : project.isFinal ? '🏆 FINAL' : `PROJECT ${project.id}`}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className={`text-sm font-semibold hover:underline ${project.guided ? 'text-blue-600' : 'text-purple-600'}`}>
                {project.guided ? 'Start Guided Project →' : 'Build Project →'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Theory Assignments */}
      {theoryAssignments.length > 0 && (
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-bold">Theory Assignments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theoryAssignments.map((assignment) => {
              const unlocked = isAssignmentUnlocked(assignment);
              return (
                <div
                  key={assignment.id}
                  onClick={() => unlocked && onAssignmentSelect(assignment)}
                  className={`card p-6 transition-transform duration-200 ${unlocked ? 'cursor-pointer hover:scale-105' : 'opacity-60 cursor-not-allowed'}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg ${unlocked ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                      <Brain className={unlocked ? 'text-indigo-600' : 'text-gray-400'} size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${unlocked ? 'bg-indigo-100 text-indigo-800 border-indigo-300' : 'bg-gray-100 text-gray-600 border-gray-300'}`}>
                      {unlocked ? `${assignment.totalPoints} POINTS` : '🔒 LOCKED'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{assignment.title}</h3>
                  <p className="text-gray-600 mb-4">{assignment.description}</p>
                  {!unlocked && (
                    <p className="text-sm text-orange-600 font-semibold mb-2">
                      📚 Complete Lessons 1-{assignment.requiredLessons} to unlock
                    </p>
                  )}
                  <div className={`text-sm font-semibold ${unlocked ? 'text-indigo-600 hover:underline' : 'text-gray-400'}`}>
                    {unlocked ? 'Start Assignment →' : 'Locked'}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Final Theory Exam */}
      <section>
        <div className={`card p-6 ${isTheoryExamUnlocked() ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gray-400'} text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Brain size={48} />
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  Final Theory Examination {!isTheoryExamUnlocked() && '🔒'}
                </h2>
                <p className="opacity-90 mb-2">{theoryExam.description}</p>
                {!isTheoryExamUnlocked() && (
                  <p className="text-yellow-300 font-semibold mb-2">
                    ⚠️ Complete all 10 lessons and 3 theory assignments first!
                  </p>
                )}
                <div className="flex items-center space-x-4 text-sm">
                  <span>📝 {theoryExam.questions.length} Questions</span>
                  <span>⏱️ {theoryExam.timeLimit} Minutes</span>
                  <span>🎯 {theoryExam.totalMarks} Marks</span>
                  <span>✅ Pass: {theoryExam.passingMarks}/{theoryExam.totalMarks} (90%)</span>
                </div>
              </div>
            </div>
            <button
              onClick={isTheoryExamUnlocked() ? onTheoryExamStart : null}
              disabled={!isTheoryExamUnlocked()}
              className={`font-bold py-3 px-6 rounded-lg transition-colors ${
                isTheoryExamUnlocked()
                  ? 'bg-white text-indigo-600 hover:bg-gray-100 cursor-pointer'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              {isTheoryExamUnlocked() ? 'Start Exam' : 'Locked'}
            </button>
          </div>
        </div>
      </section>

      {/* Coding Assignments */}
      {codingAssignments.length > 0 && (
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Award className="text-green-600" size={28} />
            <h2 className="text-2xl font-bold">Coding Challenges</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingAssignments.map((assignment) => {
              const unlocked = isAssignmentUnlocked(assignment);
              return (
                <div
                  key={assignment.id}
                  onClick={() => unlocked && onAssignmentSelect(assignment)}
                  className={`card p-6 transition-transform duration-200 ${unlocked ? 'cursor-pointer hover:scale-105' : 'opacity-60 cursor-not-allowed'}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg ${unlocked ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <FileText className={unlocked ? 'text-green-600' : 'text-gray-400'} size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${unlocked ? 'bg-green-100 text-green-800 border-green-300' : 'bg-gray-100 text-gray-600 border-gray-300'}`}>
                      {unlocked ? assignment.difficulty.toUpperCase() : '🔒 LOCKED'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{assignment.title}</h3>
                  <p className="text-gray-600 mb-4">{assignment.description}</p>
                  {!unlocked && (
                    <p className="text-sm text-orange-600 font-semibold mb-2">
                      📚 Complete Lessons 1-{assignment.requiredLessons} to unlock
                    </p>
                  )}
                  <div className={`text-sm font-semibold ${unlocked ? 'text-green-600 hover:underline' : 'text-gray-400'}`}>
                    {unlocked ? 'Start Challenge →' : 'Locked'}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;

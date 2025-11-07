import { useState, useEffect } from 'react';
import { BookOpen, Code, FileText, Trophy, Menu, X, LogOut, User, Award } from 'lucide-react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import ProjectView from './components/ProjectView';
import AssignmentView from './components/AssignmentView';
import CertificateView from './components/CertificateView';
import TheoryExamView from './components/TheoryExamView';
import { authAPI, progressAPI } from './services/api';
import { theoryExam } from './data/lessons';

function App() {
  const [user, setUser] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showTheoryExam, setShowTheoryExam] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        fetchUserProgress();
      } catch (error) {
        console.error('Error loading user:', error);
        // Clear invalid data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, []);

  const fetchUserProgress = async () => {
    try {
      const response = await authAPI.getProfile();
      console.log('User progress response:', response.data);
      setUserProgress(response.data.progress);
    } catch (error) {
      console.error('Failed to fetch progress:', error);
      // Don't crash the app if progress fetch fails
      setUserProgress(null);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    fetchUserProgress();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setUserProgress(null);
    setCurrentView('dashboard');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Auth onLogin={handleLogin} />
      </div>
    );
  }

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentView('lesson');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentView('project');
  };

  const handleAssignmentSelect = (assignment) => {
    setSelectedAssignment(assignment);
    setCurrentView('assignment');
  };

  const handleTheoryExamStart = () => {
    setShowTheoryExam(true);
    setCurrentView('theory-exam');
  };

  const handleTheoryExamSubmit = (score, totalMarks) => {
    console.log(`Theory Exam Score: ${score}/${totalMarks}`);
    // TODO: Save score to backend
    fetchUserProgress();
  };

  const renderView = () => {
    switch (currentView) {
      case 'lesson':
        return <LessonView lesson={selectedLesson} onBack={() => setCurrentView('dashboard')} user={user} onProgressUpdate={fetchUserProgress} />;
      case 'project':
        return <ProjectView project={selectedProject} onBack={() => setCurrentView('dashboard')} user={user} />;
      case 'assignment':
        return <AssignmentView assignment={selectedAssignment} onBack={() => setCurrentView('dashboard')} user={user} />;
      case 'certificate':
        return <CertificateView user={user} userProgress={userProgress} onBack={() => setCurrentView('dashboard')} />;
      case 'theory-exam':
        return <TheoryExamView exam={theoryExam} onBack={() => setCurrentView('dashboard')} onSubmit={handleTheoryExamSubmit} />;
      default:
        return (
          <Dashboard
            onLessonSelect={handleLessonSelect}
            onProjectSelect={handleProjectSelect}
            onAssignmentSelect={handleAssignmentSelect}
            onCertificateView={() => setCurrentView('certificate')}
            onTheoryExamStart={handleTheoryExamStart}
            userProgress={userProgress}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Code className="text-white" size={28} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Learn Python with TheGiftson
                  </h1>
                  <p className="text-sm text-gray-600">Complete Python Course</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {userProgress && (
                <div className="hidden sm:flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                  <Award className="text-green-600" size={20} />
                  <span className="font-semibold text-green-800">
                    {userProgress.percentage.toFixed(0)}% Complete
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <div className="hidden sm:flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                  <User className="text-blue-600" size={18} />
                  <span className="font-semibold text-blue-800">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut className="text-gray-600" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600">
            © 2024 Learn Python Course. Created by{' '}
            <a 
              href="https://gift-portfolio.web.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
            >
              TheGiftson
            </a>
            {' '}• Master Python Programming! 🐍
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

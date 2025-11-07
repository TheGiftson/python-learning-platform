import { useState } from 'react';
import { UserPlus, LogIn, Code, KeyRound, Mail } from 'lucide-react';
import { authAPI } from '../services/api';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validate password confirmation for registration
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    // Validate password strength
    if (!isLogin && formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      let response;
      if (isLogin) {
        response = await authAPI.login(formData.email, formData.password);
      } else {
        response = await authAPI.register(formData.name, formData.email, formData.password);
      }

      const { access_token, user } = response.data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      onLogin(user);
    } catch (err) {
      console.error('Auth error:', err);
      if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') {
        setError('Cannot connect to server. Please make sure the backend is running on http://localhost:5000');
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await authAPI.requestPasswordReset(formData.email);
      setSuccess(response.data.message || 'Password reset instructions sent to your email!');
      setTimeout(() => {
        setShowForgotPassword(false);
        setIsLogin(true);
      }, 3000);
    } catch (err) {
      console.error('Password reset error:', err);
      if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') {
        setError('Cannot connect to server. Please make sure the backend is running on http://localhost:5000');
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const toggleView = (view) => {
    setIsLogin(view === 'login');
    setShowForgotPassword(view === 'forgot');
    setError('');
    setSuccess('');
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-white p-4 rounded-2xl shadow-2xl mb-4">
            <Code className="text-blue-600" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Learn Python with TheGiftson
          </h1>
          <p className="text-white/90 text-lg">
            Master Python from Beginner to Pro
          </p>
        </div>

        {/* Auth Form */}
        <div className="card p-8">
          {!showForgotPassword && (
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => toggleView('login')}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
                  isLogin
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => toggleView('register')}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
                  !isLogin
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Register
              </button>
            </div>
          )}

          {showForgotPassword && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h2>
              <p className="text-gray-600">Enter your email to receive reset instructions</p>
            </div>
          )}

          <form onSubmit={showForgotPassword ? handleForgotPassword : handleSubmit} className="space-y-4">
            {!isLogin && !showForgotPassword && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            {!showForgotPassword && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your password (min 6 characters)"
                />
              </div>
            )}

            {!isLogin && !showForgotPassword && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  minLength={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Confirm your password"
                />
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">Passwords do not match</p>
                )}
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <p className="text-green-600 text-sm mt-1">✓ Passwords match</p>
                )}
              </div>
            )}

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span>Processing...</span>
              ) : (
                <>
                  {showForgotPassword ? (
                    <>
                      <KeyRound size={20} />
                      <span>Send Reset Link</span>
                    </>
                  ) : isLogin ? (
                    <>
                      <LogIn size={20} />
                      <span>Login</span>
                    </>
                  ) : (
                    <>
                      <UserPlus size={20} />
                      <span>Create Account</span>
                    </>
                  )}
                </>
              )}
            </button>
          </form>

          {/* Forgot Password Link */}
          {isLogin && !showForgotPassword && (
            <div className="mt-4 text-center">
              <button
                onClick={() => toggleView('forgot')}
                className="text-sm text-blue-600 hover:underline font-semibold"
              >
                Forgot your password?
              </button>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-gray-600">
            {showForgotPassword ? (
              <p>
                Remember your password?{' '}
                <button
                  onClick={() => toggleView('login')}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Back to Login
                </button>
              </p>
            ) : isLogin ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => toggleView('register')}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Register now
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => toggleView('login')}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Login here
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-white">
          <div>
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm opacity-90">Topics</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm opacity-90">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold">🏆</div>
            <div className="text-sm opacity-90">Certificate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

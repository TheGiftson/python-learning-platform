import { useState } from 'react';
import { Award, Download, CheckCircle, XCircle, ArrowLeft, Star, Trophy, Sparkles } from 'lucide-react';
import { certificateAPI } from '../services/api';

const CertificateView = ({ user, userProgress, onBack }) => {
  const [generating, setGenerating] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');

  // Check eligibility: 90% total (45/50 each for theory and project)
  const isEligible = userProgress && userProgress.percentage >= 90 && userProgress.eligible_for_certificate;

  const handleGenerateCertificate = async () => {
    setGenerating(true);
    setError('');

    try {
      const response = await certificateAPI.generate();
      setCertificate(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate certificate');
    } finally {
      setGenerating(false);
    }
  };

  const handleDownload = () => {
    if (certificate) {
      window.open(certificateAPI.download(certificate.certificate_id), '_blank');
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Dashboard</span>
      </button>

      {/* Header */}
      <div className="card p-8 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-20">
          <Trophy size={200} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <Award size={64} className="animate-pulse" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Certificate of Completion</h1>
              <p className="text-xl opacity-90">Python Programming Mastery</p>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-2xl">
            Complete all requirements with 90% score to earn your professional Python certificate
          </p>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="card p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center space-x-2">
          <CheckCircle className="text-green-600" size={32} />
          <span>Requirements</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Requirement 1 */}
          <div className={`p-6 rounded-lg border-2 ${userProgress?.percentage === 100 ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-300'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold">27/27</span>
              {userProgress?.percentage === 100 ? (
                <CheckCircle className="text-green-600" size={32} />
              ) : (
                <XCircle className="text-gray-400" size={32} />
              )}
            </div>
            <div className="font-semibold text-lg mb-1">All Topics</div>
            <div className="text-sm text-gray-600">Complete all 27 lessons</div>
          </div>

          {/* Requirement 2 */}
          <div className={`p-6 rounded-lg border-2 ${userProgress?.theory_score >= 45 ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-300'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold">≥ 45/50</span>
              {userProgress?.theory_score >= 45 ? (
                <CheckCircle className="text-green-600" size={32} />
              ) : (
                <XCircle className="text-gray-400" size={32} />
              )}
            </div>
            <div className="font-semibold text-lg mb-1">Theory Exam</div>
            <div className="text-sm text-gray-600">Score 90% or higher</div>
          </div>

          {/* Requirement 3 */}
          <div className={`p-6 rounded-lg border-2 ${userProgress?.project_score >= 45 ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-300'}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold">≥ 45/50</span>
              {userProgress?.project_score >= 45 ? (
                <CheckCircle className="text-green-600" size={32} />
              ) : (
                <XCircle className="text-gray-400" size={32} />
              )}
            </div>
            <div className="font-semibold text-lg mb-1">Final Project</div>
            <div className="text-sm text-gray-600">Score 90% or higher</div>
          </div>
        </div>

        {/* Progress Bar */}
        {userProgress && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-bold">Overall Progress</span>
              <span className="text-2xl font-bold text-blue-600">{Math.round(userProgress.percentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className={`h-6 rounded-full transition-all duration-500 ${
                  userProgress.percentage >= 90 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}
                style={{ width: `${userProgress.percentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Eligibility Status */}
        {isEligible ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 rounded-full p-3">
                <Trophy className="text-white" size={32} />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-900">Congratulations! 🎉</div>
                <div className="text-green-700">You're eligible to generate your certificate!</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Sparkles className="text-orange-600" size={24} />
              <div className="text-xl font-bold text-orange-900">Keep Going!</div>
            </div>
            <div className="text-orange-700">
              Complete all requirements with 90% score to unlock your certificate.
            </div>
          </div>
        )}
      </div>

      {/* Certificate Preview/Download Section */}
      {certificate ? (
        <div className="card p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-4 border-blue-300">
          <div className="text-center mb-8">
            <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-lg">
              <Award className="text-yellow-500" size={64} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Certificate Generated! 🎓</h2>
            <p className="text-lg text-gray-700">Your achievement has been recorded</p>
          </div>

          {/* Certificate Preview */}
          <div className="bg-white rounded-lg shadow-2xl p-8 mb-8 border-8 border-double border-yellow-500">
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-2 mb-4">
                <Star className="text-yellow-500" size={32} />
                <Star className="text-yellow-500" size={32} />
                <Star className="text-yellow-500" size={32} />
              </div>
              
              <h3 className="text-4xl font-serif font-bold text-gray-900">Certificate of Completion</h3>
              <div className="text-xl text-gray-600">This certifies that</div>
              <div className="text-5xl font-bold text-blue-600 my-4">{user.name}</div>
              <div className="text-xl text-gray-600">has successfully completed</div>
              <div className="text-3xl font-bold text-gray-900 my-2">Python Programming Course</div>
              <div className="text-lg text-gray-600">with Learn Python with TheGiftson</div>
              <div className="mt-4">
                <a 
                  href="https://gift-portfolio.web.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Instructor: TheGiftson
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t-2">
                <div>
                  <div className="text-sm text-gray-500">Certificate ID</div>
                  <div className="font-mono font-bold">{certificate.certificate_id}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Issue Date</div>
                  <div className="font-bold">{new Date(certificate.issued_at).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-6">
                <Star className="text-yellow-500" size={24} />
                <Star className="text-yellow-500" size={24} />
                <Star className="text-yellow-500" size={24} />
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl py-4 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Download size={32} />
              <span>Download Certificate (PDF)</span>
            </button>
            <p className="text-sm text-gray-600 mt-4">Click to download your certificate as a PDF file</p>
          </div>
        </div>
      ) : (
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6">Generate Your Certificate</h2>
          
          {error && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6 flex items-center space-x-3">
              <XCircle className="text-red-600" size={24} />
              <div className="text-red-700">{error}</div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={handleGenerateCertificate}
              disabled={!isEligible || generating}
              className={`inline-flex items-center space-x-3 font-bold text-xl py-4 px-12 rounded-full shadow-lg transform transition-all duration-200 ${
                isEligible && !generating
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {generating ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Award size={32} />
                  <span>Generate Certificate</span>
                </>
              )}
            </button>
            
            {!isEligible && (
              <p className="text-orange-600 font-semibold mt-4">
                Complete all requirements with 90% score to generate your certificate
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateView;

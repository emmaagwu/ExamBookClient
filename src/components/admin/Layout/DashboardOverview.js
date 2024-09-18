import React, { useEffect, useState } from 'react';
import { getExams } from '../../../services/examService';
import { getUsers } from '../../../services/userService';
import { getQuestions } from '../../../services/questionService';
// import { getSubmissions } from '../../../services/submissionService';
// Import icons directly from the package
import { UserIcon, ClipboardDocumentListIcon, QuestionMarkCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const DashboardOverview = () => {
  const [loading, setLoading] = useState(true);
  const [examCount, setExamCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  // const [submissionCount, setSubmissionCount] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const exams = await getExams();
        const users = await getUsers();
        const questions = await getQuestions();
        // const submissions = await getSubmissions();

        setExamCount(exams.length);
        setUserCount(users.length);
        setQuestionCount(questions.length);
        // setSubmissionCount(submissions.length);

        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="spinner-border animate-spin w-16 h-16 border-4 rounded-full"></div></div>;
  }

  return (
    <div className="dashboard-overview">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Total Exams Card */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center">
            <ClipboardDocumentListIcon className="h-8 w-8 text-blue-500 mr-4" />
            <div>
              <h4 className="text-lg font-bold text-blue-700">Total Exams</h4>
              <p className="text-2xl font-semibold">{examCount}</p>
              <div className="w-full bg-blue-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(examCount / 100) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center">
            <UserIcon className="h-8 w-8 text-green-500 mr-4" />
            <div>
              <h4 className="text-lg font-bold text-green-700">Total Users</h4>
              <p className="text-2xl font-semibold">{userCount}</p>
              <div className="w-full bg-green-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(userCount / 100) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div> 

        {/* Total Questions Card */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center">
            <QuestionMarkCircleIcon className="h-8 w-8 text-yellow-500 mr-4" />
            <div>
              <h4 className="text-lg font-bold text-yellow-700">Total Questions</h4>
              <p className="text-2xl font-semibold">{questionCount}</p>
              <div className="w-full bg-yellow-200 rounded-full h-2.5 mt-2">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: `${(questionCount / 100) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Submissions Card */}
        {/* <div className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-pink-500 mr-4" />
            <div>
              <h4 className="text-lg font-bold text-pink-700">Total Submissions</h4>
              <p className="text-2xl font-semibold">{submissionCount}</p>
              <div className="w-full bg-pink-200 rounded-full h-2.5 mt-2">
                <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: `${(submissionCount / 100) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardOverview;

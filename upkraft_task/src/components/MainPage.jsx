
import React from 'react';
import RadialGauge from './RadialGauge';
import { Search, Bell, MoveRight, GraduationCap, Book, Trophy } from 'lucide-react';
import Sidebar from './Sidebar';
import shareIcon from '../assets/share.png';
import user from '../assets/userImage.png';

export default function Dashboard() {
  const lessons = [
    { date: '21 July', time: '2:00 - 3:00 Pm', course: 'Introduction to Piano', student: 'Eunice Robel & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 Pm', course: 'Finger Warmups', student: 'Eunice Robel & Arnold Hayes' },
    { date: '23 July', time: '3:00 - 4:00 Pm', course: 'Simple Chords', student: 'Eunice Robel & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 Pm', course: 'Rhythm Basics', student: 'Eunice Robel & Arnold Hayes' },
    { date: '25 July', time: '2:00 - 3:00 Pm', course: 'Simple Melodies', student: 'Eunice Robel & Arnold Hayes' },
    { date: '26 July', time: '7:00 - 8:00 Pm', course: 'Treble & Bass Clef', student: 'Eunice Robel & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 Pm', course: 'Rhythm Basics', student: 'Eunice Robel & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 Pm', course: 'Finger Warmups', student: 'Eunice Robel & Arnold Hayes' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col lg:flex-row">
      <Sidebar />

      <div className="flex flex-col w-full lg:w-5/6 m-3">
       
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <div className="bg-white h-12 rounded-lg w-full sm:w-2/5 flex shadow-xl items-center gap-3 px-2">
            <Search className="text-gray-500" />
            <p className="text-gray-500 text-sm">Search here</p>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <img src={shareIcon} alt="share" className="w-8 h-8 sm:w-10 sm:h-10" />

            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-3 right-2 h-2 w-2 bg-red-600 rounded-full"></span>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={user} alt="Sherry" className="w-10 h-10 object-cover" />
              </div>
              <div className="flex flex-col ml-3">
                <p className="font-bold text-black text-sm sm:text-base flex flex-wrap">Sherry Wolf</p>
                <p className="text-xs sm:text-sm text-gray-700">Tutor</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row mt-5 m-3 gap-3">
        
          <div className="bg-white flex-1 rounded-lg border-3 border-sky-300 shadow-xl p-6 flex flex-col">
            <h3 className="text-gray-700 font-bold mb-4 pl-3 pb-10">Profile</h3>

            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <svg className="absolute -top-1 -left-1 w-20 h-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#f59e0b"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${25 * 2.83} 283`}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <img src={user} alt="Tutor" className="w-16 h-16 rounded-full relative z-10" />
                </div>
                <div className="pt-6 text-center">
                  <h4 className="font-bold text-gray-900">Sherry Wolf</h4>
                  <p className="text-sm text-gray-500">Piano Tutor</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4 w-full sm:w-auto">
                <div className="flex items-center bg-purple-200 rounded-lg h-10 px-3">
                  <GraduationCap className="text-purple-600" />
                  <p className="ml-2 text-purple-700 font-medium">Students <span className="font-bold text-black">30</span></p>
                </div>
                <div className="flex items-center bg-purple-200 rounded-lg h-10 px-3">
                  <Book className="text-purple-600" />
                  <p className="ml-2 text-purple-700 font-medium">Course <span className="font-bold text-black">6</span></p>
                </div>
                <div className="flex items-center bg-purple-200 rounded-lg h-10 px-3">
                  <Trophy className="text-purple-600" />
                  <p className="ml-2 text-purple-700 font-medium">Reward <span className="font-bold text-black">3</span></p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="m-3 flex-1 flex flex-col md:flex-row gap-4">
 
  <div className="flex flex-col flex-1 space-y-4">
    <div className="bg-white rounded-lg p-4 shadow-xl">
      <span className="text-4xl text-purple-700 font-bold">30</span>
      <p className="text-gray-800">Total Active Students</p>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-xl">
      <span className="text-4xl text-purple-700 font-bold">80%</span>
      <p className="text-gray-800">Tutor CSAT Score</p>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-xl">
      <span className="text-4xl text-purple-700 font-bold">15%</span>
      <p className="text-gray-800">Assignment Completion Rate</p>
    </div>
  </div>

 
  <div className="flex flex-col flex-1 space-y-4">
    <div className="bg-white rounded-lg p-4 shadow-xl">
      <span className="text-4xl text-purple-700 font-bold">30</span>
      <p className="text-gray-800">Total Active Students</p>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-xl">
      <span className="text-4xl text-purple-700 font-bold">80%</span>
      <p className="text-gray-800">Tutor CSAT Score</p>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-xl">
      <span className="text-4xl text-purple-700 font-bold">15%</span>
      <p className="text-gray-800">Assignment Completion Rate</p>
    </div>
  </div>
</div>
         
          <div className="flex flex-col rounded-lg overflow-hidden shadow-xl flex-1">
            <div className="h-40 sm:h-48 w-full">
              <img src={user} alt="Sherry" className="w-full h-full object-cover" />
            </div>
            <div className="bg-purple-700 text-white flex flex-col justify-center items-center p-4 text-center">
              <h2 className="font-bold text-lg">Refer and Earn</h2>
              <p className="text-sm">Invite friends and earn exclusive rewards</p>
              <p className="text-sm mb-3">for every successful referral!!</p>
              <button className="bg-amber-400 text-black px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-amber-300">
                Refer Now <MoveRight />
              </button>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col lg:flex-row m-3 gap-3">
         
          <div className="flex-1 bg-white rounded-lg shadow-xl overflow-x-auto">
            <div className="flex items-center justify-between p-4">
              <h3 className="font-bold text-lg">Upcoming Lessons</h3>
              <button className="text-purple-600 text-sm font-medium">View All</button>
            </div>
            <table className="w-full min-w-[600px] text-sm">
              <thead className="bg-white">
                <tr className="text-left text-gray-600 border-b border-gray-200">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Student Name</th>
                </tr>
              </thead>
              <tbody>
                {lessons.map((lesson, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{lesson.date}</td>
                    <td className="px-4 py-2 text-gray-600">{lesson.time}</td>
                    <td className="px-4 py-2 text-gray-600">{lesson.course}</td>
                    <td className="px-4 py-2 text-gray-600">{lesson.student}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

       
          <div className="flex flex-col sm:flex-row lg:flex-col bg-white rounded-lg shadow-sm items-center p-6 gap-6 w-full lg:w-1/5">
            <div className="text-center">
              <h4 className="font-semibold text-gray-700">Overall Course Performance</h4>
              <RadialGauge value={7.6} max={10} size={128} gradientId="gradientId1" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-700">Overall Student Performance</h4>
              <RadialGauge value={6.6} max={10} size={128} gradientId="gradient2" />
            </div>
          </div>

        
          <div className="flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm justify-between w-full lg:w-1/5 items-center">
            <div className="text-center font-semibold text-gray-700">
              <h4>Feedback Pending</h4>
            </div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#fee2e2" strokeWidth="10" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#ef4444"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${12 * 10} 285`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-gray-800">12</span>
                <p className="text-sm sm:text-sm text-gray-500">Feedback Pending</p>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium
             hover:bg-purple-700 mt-4 flex items-center gap-2 flex-wrap">
              Give Feedback <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

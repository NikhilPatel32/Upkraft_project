import React, { useState } from 'react'
import { GraduationCap, NotebookTabs , CalendarDays, Settings,
     LayoutDashboard, Wallet, Music4, FileMusicIcon, ClipboardList, 
     LogOut , Gift, Menu, X } from 'lucide-react';

const Sidebar = () => {
    const [selected , setSelected] = useState('');
    const [open , setOpen] = useState(false);

    const handleSelect = (name) => {
        setSelected(name);
        setOpen(false); 
    }

  return (
    <>
     
      <div className="lg:hidden flex justify-between items-center bg-purple-700 text-white px-4 py-3">
        <div className='text-2xl font-extrabold'>UPKRAFT</div>
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

     
      <div className={`fixed lg:static top-0 left-0 min-h-screen w-64 bg-purple-700 text-white flex flex-col
       transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 z-50`}>

        <div className='hidden lg:block text-3xl mt-4 pl-3 font-extrabold'>
          UPKRAFT
        </div>

        <div
         className={`mt-14 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Home" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Home")}>
             <LayoutDashboard />
           <span>Home</span>
        </div>

        <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "My Students" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("My Students")}>
           <GraduationCap />
           <span>My Students</span>
        </div>

        <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "My Courses" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("My Courses")}>
            <NotebookTabs />
           <span>My Courses</span>
        </div>

        <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Calendar" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Calendar")}>
            <CalendarDays />
           <span>Calendar</span>
        </div>

         <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Assignment" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Assignment")}>
            <ClipboardList />
           <span>Assignment</span>
        </div>
         
         <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Music Library" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Music Library")}>
            <FileMusicIcon />
           <span>Music Library</span>
        </div>

        <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Practice Studio" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Practice Studio")}>
            <Music4 />
           <span>Practice Studio</span>
        </div>

       <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Payment Summary" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Payment Summary")}>
            <Wallet />
           <span>Payment Summary</span>
        </div>

        <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Refer_Earn" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Refer_Earn")}>
            <Gift />
           <span>Refer & Earn</span>
        </div>

        <div
         className={`mt-5 flex pl-3 gap-3 text-xl items-center hover:cursor-pointer ${
         selected === "Settings" ? "bg-white w-auto h-10 mr-5 ml-1 text-purple-700 font-bold rounded-xl"
         :"hover:bg-white/70 w-auto h-10 mr-5 ml-1 hover:text-purple-600 hover:font-bold rounded-xl"
         }`}
        onClick={() => handleSelect("Settings")}>
                <Settings />
           <span>Settings</span>
        </div>

          <div className="flex mt-10 text-xl items-center gap-2  pl-3 ml-2 cursor-pointer">
          <LogOut/>
          <span>Logout</span>
          </div>

      </div>
    </>
  )
}

export default Sidebar

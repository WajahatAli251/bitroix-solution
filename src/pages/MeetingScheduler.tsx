import React from 'react';
import Navigation from '@/components/Navigation';
import ScheduleMeeting from '@/components/ScheduleMeeting';
import Footer from '@/components/Footer';

const MeetingScheduler = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Navigation />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ScheduleMeeting />
      </div>
      <Footer />
    </div>
  );
};

export default MeetingScheduler;
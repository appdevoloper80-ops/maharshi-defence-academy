import React, { useState } from 'react';
import { OfficialDefenceBanner } from './components/OfficialDefenceBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { CourseComparison } from './components/CourseComparison';
import { CadetRoadmap } from './components/CadetRoadmap';
import { ShauryaWall } from './components/ShauryaWall';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CadetRoutine } from './components/CadetRoutine';
import { EligibilityChecker } from './components/EligibilityChecker';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { SocialChannelsGrid } from './components/SocialChannelsGrid';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (prefillCourse?: string) => {
    setSelectedCourseForModal(prefillCourse);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    setSelectedCourseForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* 
        Sticky Header Container:
        Locks the Official Defence Banner and Navbar to the top of the viewport
        when the user scrolls anywhere on the website.
      */}
      <div className="sticky top-0 z-50 w-full shadow-lg">
        <OfficialDefenceBanner />
        <Navbar onOpenEnquiry={handleOpenEnquiry} />
      </div>

      {/* Main Page Content */}
      <main className="flex-1 overflow-x-hidden pb-16 lg:pb-0">
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* About Academy & Leadership */}
        <AboutSection />
        
        {/* Core Courses Section */}
        <CoursesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Side-by-Side Exam Course Comparison Table */}
        <CourseComparison onOpenEnquiry={handleOpenEnquiry} />

        {/* 4-Step Cadet Recruitment Roadmap */}
        <div id="roadmap">
          <CadetRoadmap 
            onOpenEnquiry={handleOpenEnquiry} 
            onOpenChecker={() => {
              const el = document.getElementById('eligibility');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        {/* Training Ground & Hostel Facilities */}
        <FacilitiesSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Daily Routine 05:00 AM to 10:00 PM */}
        <div id="routine">
          <CadetRoutine />
        </div>

        {/* Interactive Eligibility & Physical Standards Checker */}
        <div id="eligibility">
          <EligibilityChecker onSelectProgram={(program) => handleOpenEnquiry(program)} />
        </div>

        {/* Hall of Valor & Defence Heritage */}
        <div id="shaurya">
          <ShauryaWall />
        </div>

        {/* Cadet Success Stories & Parent Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Location, Campus Map, Piler Highway Direction & Contacts */}
        <LocationContactSection prefillExam={selectedCourseForModal} />

        {/* Official Social Media Hub */}
        <section id="connect" className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-military">
                Connect with Official Academy Channels
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Follow our official social platforms for real daily ground videos, rally notifications, and selection celebrations.
              </p>
            </div>
            <SocialChannelsGrid />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={handleCloseEnquiry}
        prefillExam={selectedCourseForModal}
      />

      {/* Mobile Quick Action Dock (Fixed for Mobile Aspirants) */}
      <MobileQuickBar onOpenEnquiry={() => handleOpenEnquiry()} />
    </div>
  );
}

export default App;

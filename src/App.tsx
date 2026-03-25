/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Download, 
  ChevronRight,
  Trophy,
  GraduationCap,
  Activity,
  Award,
  Briefcase
} from 'lucide-react';

// CONFIGURATION
// Replace this URL with the final public URL of the deployed landing page
const PUBLIC_PROFILE_URL = 'https://dmitry-fedoseev-profile.com';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-maize-500 selection:text-navy-900">
      {/* --- WEB ONLY LAYOUT --- */}
      <div className="print:hidden">
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-0 print:px-0 print:max-w-none">
        
        {/* HERO SECTION */}
        <section className="relative rounded-3xl overflow-hidden bg-navy-900 text-white shadow-2xl print:shadow-none print:rounded-none print:bg-transparent print:text-black print:hidden mb-16">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="court" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0 100V0h100" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#court)" />
            </svg>
          </div>
          
          <div className="relative z-10 px-8 py-16 md:py-24 lg:px-16 flex flex-col md:flex-row-reverse gap-12 items-center">
            
            {/* Profile Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-48 h-48 md:w-72 md:h-72 shrink-0 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl mx-auto md:mx-0 print:hidden bg-white/5 flex items-center justify-center"
            >
              {/* Note: Upload your photo as 'profile.jpg' to the public folder */}
              <img 
                src="/profile.jpg" 
                alt="Dmitry Fedoseev" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>

            <div className="flex-1 space-y-8 text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-maize-400 text-sm font-semibold tracking-wider uppercase mb-6 border border-white/20">
                  Professional Profile
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 text-white">
                  Dmitry <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Fedoseev</span>
                </h1>
                <p className="text-xl md:text-2xl text-maize-400 font-medium max-w-2xl leading-snug mx-auto md:mx-0">
                  High-Performance Basketball Leader | NCAA Division I | Player Development | Scouting | Analytics
                </p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-300 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0"
              >
                Over 20 years of international coaching and program management experience. Proven track record in NCAA Division I, contributing to championship-winning seasons and historic postseason runs. Expert in player development, advanced statistical analysis, and video scouting. Distinguished credentials include the elite ICAB Program (FIBA/USOPC/IOC) and FIBA FECC certification.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 no-print"
              >
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-maize-500 hover:bg-maize-400 text-navy-900 px-6 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,203,5,0.3)] hover:shadow-[0_0_30px_rgba(255,203,5,0.5)] active:scale-95"
                >
                  <Download size={20} />
                  Download PDF
                </button>
                <a 
                  href="#contact"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-semibold transition-all active:scale-95"
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Print-only Summary */}
        <div className="hidden print:block mb-10">
          <h2 className="text-xl font-bold text-navy-900 border-b border-gray-300 pb-2 mb-4 uppercase tracking-wider">Professional Summary</h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            High-performance Basketball Leader with over 20 years of international coaching and program management experience. Proven track record in NCAA Division I, contributing to championship-winning seasons and historic postseason runs. Expert in player development, advanced statistical analysis, and video scouting. Distinguished credentials include the elite ICAB Program (FIBA/USOPC/IOC) and FIBA FECC certification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 print:grid-cols-3 print:gap-8">
          
          {/* LEFT COLUMN - MAIN EXPERIENCE */}
          <div className="lg:col-span-2 space-y-16 print:space-y-10">
            
            {/* NCAA Experience */}
            <section>
              <FadeIn>
                <div className="flex items-center gap-3 mb-8 print:mb-4">
                  <div className="p-3 bg-navy-900 text-maize-500 rounded-xl print:p-0 print:bg-transparent print:text-navy-900">
                    <Trophy size={24} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-navy-900 print:text-xl print:uppercase print:tracking-wider print:border-b print:border-gray-300 print:pb-1 print:w-full">NCAA Coaching Experience</h2>
                </div>
              </FadeIn>

              <div className="space-y-10 print:space-y-6">
                {/* Michigan */}
                <FadeIn delay={0.1} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 print:pl-4 print:before:hidden">
                  <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-maize-500 border-2 border-white print:hidden"></div>
                  <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="text-xl font-bold text-gray-900 print:text-lg">University of Michigan <span className="text-gray-500 font-normal text-base print:text-sm">| NCAA Division I</span></h3>
                    <span className="text-sm font-semibold text-navy-700 bg-navy-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 print:bg-transparent print:p-0">June 2024 – June 2025</span>
                  </div>
                  <p className="text-navy-800 font-medium mb-4 print:mb-2 print:text-sm">Graduate Assistant – Men’s Basketball <span className="text-gray-500 font-normal">| Boca Raton, FL</span></p>
                  <ul className="space-y-3 text-gray-600 print:text-sm print:space-y-1">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-maize-500 shrink-0 mt-0.5 print:hidden" />
                      <span className="print:list-item print:ml-4">Contributed to the team’s historic run, culminating in winning the Big Ten Tournament Championship.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-maize-500 shrink-0 mt-0.5 print:hidden" />
                      <span className="print:list-item print:ml-4">Played a pivotal role in the development of center Vladislav Goldin, who earned Big Ten Tournament MVP honors and ranked #3 in the nation in ESPN’s efficiency rating.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-maize-500 shrink-0 mt-0.5 print:hidden" />
                      <span className="print:list-item print:ml-4">Responsible for detailed video breakdown, processing advanced statistical data, and creating comprehensive scouting reports to drive tactical adjustments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-maize-500 shrink-0 mt-0.5 print:hidden" />
                      <span className="print:list-item print:ml-4">Conduct specialized individual skill development sessions with an emphasis on post-player footwork and finishing.</span>
                    </li>
                  </ul>
                </FadeIn>

                {/* FAU */}
                <FadeIn delay={0.2} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 print:pl-4 print:before:hidden page-break-inside-avoid">
                  <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gray-300 border-2 border-white print:hidden"></div>
                  <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="text-xl font-bold text-gray-900 print:text-lg">Florida Atlantic University <span className="text-gray-500 font-normal text-base print:text-sm">| NCAA Division I</span></h3>
                    <span className="text-sm font-medium text-gray-500 mt-2 sm:mt-0">August 2023 – May 2024</span>
                  </div>
                  <p className="text-navy-800 font-medium mb-4 print:mb-2 print:text-sm">Graduate Assistant / Assistant Coach – Men’s Basketball <span className="text-gray-500 font-normal">| Boca Raton, FL</span></p>
                  <ul className="space-y-3 text-gray-600 print:text-sm print:space-y-1">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                      <span className="print:list-item print:ml-4">Directed individual training programs for frontcourt players, focusing on technical proficiency and defensive positioning.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                      <span className="print:list-item print:ml-4">Supported the coaching staff during the 2024 March Madness tournament, ensuring peak player preparation and tactical readiness.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                      <span className="print:list-item print:ml-4">Utilized data-driven insights to monitor player progress and optimize training loads.</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </section>

            {/* International Experience */}
            <section className="page-break-inside-avoid">
              <FadeIn>
                <div className="flex items-center gap-3 mb-8 print:mb-4">
                  <div className="p-3 bg-navy-900 text-maize-500 rounded-xl print:p-0 print:bg-transparent print:text-navy-900">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-navy-900 print:text-xl print:uppercase print:tracking-wider print:border-b print:border-gray-300 print:pb-1 print:w-full">International Head Coaching</h2>
                </div>
              </FadeIn>

              <FadeIn delay={0.1} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 print:pl-4 print:before:hidden">
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gray-300 border-2 border-white print:hidden"></div>
                <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-xl font-bold text-gray-900 print:text-lg">BC "Peresvet-SFU" / Rostov-Don-SFU <span className="text-gray-500 font-normal text-base print:text-sm">| Russia</span></h3>
                  <span className="text-sm font-medium text-gray-500 mt-2 sm:mt-0">2017 – 2022</span>
                </div>
                <p className="text-navy-800 font-medium mb-4 print:mb-2 print:text-sm">Head Coach & Program Director</p>
                <ul className="space-y-3 text-gray-600 print:text-sm print:space-y-1">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                    <span className="print:list-item print:ml-4">Led the team to four straight Russian Super League 1 titles (2018–2021).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                    <span className="print:list-item print:ml-4">Won Bronze Medal in the European Women’s Basketball League (EWBL).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                    <span className="print:list-item print:ml-4">Managed full program operations, integrating POLAR Team System analytics for real-time physiological monitoring.</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 print:pl-4 print:before:hidden mt-10 print:mt-6 page-break-inside-avoid">
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gray-300 border-2 border-white print:hidden"></div>
                <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-xl font-bold text-gray-900 print:text-lg">Dynamo Moscow <span className="text-gray-500 font-normal text-base print:text-sm">| Russia</span></h3>
                  <span className="text-sm font-medium text-gray-500 mt-2 sm:mt-0">2015 – 2017</span>
                </div>
                <p className="text-navy-800 font-medium mb-4 print:mb-2 print:text-sm">Head of Youth Training</p>
                <ul className="space-y-3 text-gray-600 print:text-sm print:space-y-1">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                    <span className="print:list-item print:ml-4">Recruited to head youth training, involving talent scouting, contract negotiations, and strategic team management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="text-gray-400 shrink-0 mt-0.5 print:hidden" />
                    <span className="print:list-item print:ml-4">Achieved a championship win in the Super League-2 and a bronze medal in the youth category.</span>
                  </li>
                </ul>
              </FadeIn>
            </section>

          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="space-y-12 print:space-y-8">
            
            {/* Education & Certifications */}
            <section className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 print:p-0 print:shadow-none print:border-none print:bg-transparent page-break-inside-avoid">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6 print:mb-3">
                  <div className="p-2 bg-navy-50 text-navy-900 rounded-lg print:p-0 print:bg-transparent">
                    <GraduationCap size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 print:uppercase print:tracking-wider print:border-b print:border-gray-300 print:pb-1 print:w-full">Education & Certs</h2>
                </div>
                <ul className="space-y-5 print:space-y-3">
                  <li className="print:text-sm">
                    <p className="font-bold text-gray-900">FIBA Europe Coaching Certificate (FECC)</p>
                    <p className="text-sm text-gray-500">2011–2013</p>
                  </li>
                  <li className="print:text-sm">
                    <p className="font-bold text-gray-900">ICAB Program</p>
                    <p className="text-sm text-gray-500">FIBA / USOPC / IOC</p>
                  </li>
                  <li className="print:text-sm">
                    <p className="font-bold text-gray-900">MBA: Strategy & Org. Leadership</p>
                    <p className="text-sm text-gray-500">Florida Atlantic University | Expected May, 2026</p>
                  </li>
                  <li className="print:text-sm">
                    <p className="font-bold text-gray-900">Ph.D. in Education</p>
                    <p className="text-sm text-gray-500">Scientific report (dissertation): « Managing the training of qualified basketball players based on the analysis of competitive activities»<br/>Southern Federal University | 2020</p>
                  </li>
                  <li className="print:text-sm">
                    <p className="font-bold text-gray-900">Specialist Degree in Automation</p>
                    <p className="text-sm text-gray-500">NUST MISIS | 2007</p>
                  </li>
                </ul>
              </FadeIn>
            </section>

            {/* Key Competencies */}
            <section className="bg-navy-900 text-white p-8 rounded-3xl shadow-lg print:p-0 print:shadow-none print:bg-transparent print:text-black page-break-inside-avoid">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6 print:mb-3">
                  <div className="p-2 bg-white/10 text-maize-400 rounded-lg print:p-0 print:bg-transparent print:text-navy-900">
                    <Activity size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-white print:text-navy-900 print:uppercase print:tracking-wider print:border-b print:border-gray-300 print:pb-1 print:w-full">Key Competencies</h2>
                </div>
                
                <div className="space-y-6 print:space-y-4">
                  <div>
                    <h3 className="text-maize-400 font-semibold mb-3 text-sm uppercase tracking-wider print:text-gray-600 print:mb-1">Technical</h3>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {['Synergy Sports', 'Video Scouting', 'Advanced Analytics', 'Hudl', 'Polar Team System'].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-sm print:bg-gray-100 print:border-gray-200 print:text-gray-800 print:px-2 print:py-0.5 print:text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-maize-400 font-semibold mb-3 text-sm uppercase tracking-wider print:text-gray-600 print:mb-1">Coaching</h3>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {['Individual Skill Development', 'Tactical Planning', 'Training Programming', 'International Recruiting Networks'].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-sm print:bg-gray-100 print:border-gray-200 print:text-gray-800 print:px-2 print:py-0.5 print:text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* QR Code Section */}
            <section className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center print:p-4 print:border-2 print:border-navy-900 print:rounded-xl page-break-inside-avoid">
              <FadeIn>
                <h3 className="text-lg font-bold text-navy-900 mb-4 print:text-base">Scan to View Full Profile</h3>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-inner border border-gray-100 print:p-0 print:border-none print:shadow-none">
                    <QRCodeSVG 
                      value={PUBLIC_PROFILE_URL} 
                      size={140}
                      bgColor={"#ffffff"}
                      fgColor={"#0a1128"}
                      level={"Q"}
                      includeMargin={false}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 max-w-[200px] mx-auto print:text-xs">
                  Scan the QR code to access Dmitry Fedoseev’s online professional profile
                </p>
              </FadeIn>
            </section>

          </div>
        </div>
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-navy-900 text-white py-12 mt-16 print:mt-8 print:py-4 print:bg-transparent print:text-black print:border-t-2 print:border-navy-900 page-break-inside-avoid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-display font-bold text-white print:text-navy-900">Dmitry Fedoseev</h2>
              <p className="text-maize-400 mt-1 print:text-gray-600">High-Performance Basketball Leader</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 text-gray-300 print:text-gray-800 print:text-sm">
              <a href="mailto:dv.fedoseyev@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} className="text-maize-400 print:text-navy-900" />
                dv.fedoseyev@gmail.com
              </a>
              <a href="tel:+19173456499" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} className="text-maize-400 print:text-navy-900" />
                +1 (917) 345-6499
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-maize-400 print:text-navy-900" />
                Boca Raton, FL 33432
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>

      {/* --- PRINT ONLY LAYOUT --- */}
      {/* Page size settings: Default is US Letter (8.5 x 11 inches). 
          To switch to A4, change the @page size in index.css to A4. */}
      <div className="hidden print:block w-full bg-white text-black font-sans" style={{ maxWidth: '100%' }}>
        {/* Header */}
        <header className="border-b-2 border-navy-900 pb-3 mb-3">
          <h1 className="text-[28pt] font-display font-bold uppercase tracking-tight leading-none text-navy-900">Dmitry Fedoseev</h1>
          <p className="text-[12pt] font-bold text-navy-800 mt-1 uppercase tracking-wider">High-Performance Basketball Leader</p>
          <p className="text-[10pt] text-gray-600 mt-0.5">NCAA Division I | Player Development | Scouting | Analytics</p>
          <div className="flex gap-4 mt-2 text-[9pt] text-gray-800 font-medium">
            <span>Boca Raton, FL</span>
            <span>•</span>
            <span>+1 (917) 345-6499</span>
            <span>•</span>
            <span>dv.fedoseyev@gmail.com</span>
          </div>
        </header>

        {/* Editable Summary */}
        <section className="mb-4">
          <p className="text-[10pt] leading-snug text-justify text-gray-800">
            High-performance basketball leader with 20+ years of international coaching and program leadership experience, including NCAA Division I and championship-winning teams. Expertise in player development, scouting, advanced analytics, and performance systems.
          </p>
        </section>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column: Experience (Span 8) */}
          <div className="col-span-8 space-y-4">
            <section>
              <h2 className="text-[12pt] font-bold uppercase tracking-wider text-navy-900 border-b border-gray-300 pb-1 mb-2">Selected Experience</h2>
              
              {/* Experience Items */}
              <div className="space-y-3">
                {/* Michigan */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[10.5pt] font-bold text-gray-900">University of Michigan</h3>
                    <span className="text-[9pt] font-medium text-gray-600">June 2024 – Present</span>
                  </div>
                  <p className="text-[9.5pt] font-semibold text-navy-800 italic mb-1">Graduate Assistant – Men’s Basketball</p>
                  <ul className="list-disc ml-4 text-[9.5pt] leading-tight text-gray-800 space-y-0.5">
                    <li>Big Ten Tournament Championship contribution</li>
                    <li>Player development support for Vladislav Goldin</li>
                    <li>Video scouting, analytics, tactical reports</li>
                    <li>Individual post-player development</li>
                  </ul>
                </div>

                {/* FAU */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[10.5pt] font-bold text-gray-900">Florida Atlantic University</h3>
                    <span className="text-[9pt] font-medium text-gray-600">Aug 2023 – May 2024</span>
                  </div>
                  <p className="text-[9.5pt] font-semibold text-navy-800 italic mb-1">Graduate Assistant / Assistant Coach – Men’s Basketball</p>
                  <ul className="list-disc ml-4 text-[9.5pt] leading-tight text-gray-800 space-y-0.5">
                    <li>Frontcourt player development</li>
                    <li>March Madness support</li>
                    <li>Data-informed performance tracking</li>
                  </ul>
                </div>

                {/* Peresvet */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[10.5pt] font-bold text-gray-900">BC Peresvet-SFU / Rostov-Don-SFU</h3>
                    <span className="text-[9pt] font-medium text-gray-600">2017 – 2022</span>
                  </div>
                  <p className="text-[9.5pt] font-semibold text-navy-800 italic mb-1">Head Coach & Program Director</p>
                  <ul className="list-disc ml-4 text-[9.5pt] leading-tight text-gray-800 space-y-0.5">
                    <li>4 consecutive Russian Super League 1 titles</li>
                    <li>EWBL Bronze Medal</li>
                    <li>Full program leadership and performance integration</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Education, Competencies, QR (Span 4) */}
          <div className="col-span-4 space-y-4">
            <section>
              <h2 className="text-[12pt] font-bold uppercase tracking-wider text-navy-900 border-b border-gray-300 pb-1 mb-2">Education & Credentials</h2>
              <ul className="space-y-2 text-[9.5pt] leading-tight text-gray-800">
                <li><span className="font-bold">MBA, Strategy & Org. Leadership</span><br/>Florida Atlantic University (Expected 2026)</li>
                <li><span className="font-bold">Ph.D. in Education</span><br/>Southern Federal University, 2020</li>
                <li><span className="font-bold">Specialist Degree in Automation</span><br/>NUST MISIS, 2007</li>
                <li className="font-bold">FIBA Europe Coaching Certificate (FECC)</li>
                <li className="font-bold">ICAB Program (FIBA / USOPC / IOC)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[12pt] font-bold uppercase tracking-wider text-navy-900 border-b border-gray-300 pb-1 mb-2">Core Competencies</h2>
              <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-[8.5pt] text-gray-800">
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">Player Development</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">Video Scouting</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">Advanced Analytics</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">Tactical Planning</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">Synergy Sports</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">KenPom / Haslametrics</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">Polar Team System</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">Intl Recruiting Networks</span>
              </div>
            </section>

            {/* QR URL Location */}
            <section className="pt-4 mt-4 border-t border-gray-300 text-center">
              <div className="inline-block p-1.5 border-2 border-navy-900 rounded-lg bg-white mb-1.5">
                <QRCodeSVG 
                  value={PUBLIC_PROFILE_URL} 
                  size={72}
                  bgColor={"#ffffff"}
                  fgColor={"#0a1128"}
                  level={"Q"}
                  includeMargin={false}
                />
              </div>
              <p className="text-[7.5pt] font-bold text-navy-900 uppercase tracking-wide leading-tight">Scan to view full<br/>online profile</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

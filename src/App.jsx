import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Placement from "./components/Placement";
import PlacementEnhanced from "./components/PlacementEnhanced";
import QARPreparation from "./components/QARPreparation";
import VARCPreparation from "./components/VARCPreparation";
import DSAPractice from "./components/DSAPractice";
import BTechGuide from "./components/BTechGuides";
import ProgrammingLanguages from "./components/ProgrammingLanguages";
import CareerPath from "./components/CareerPath";
import ResumeBuilder from "./components/ResumeBuilder";
import JobSearch from "./components/JobSearch";
import CompanySpecific from "./components/CompanySpecific";
import EntranceExams from "./components/EntranceExams";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import AdminPanel from "./components/AdminPanel";
import AIChatbot from "./components/AIChatbot";
import AIMLTools from "./components/AIMLTools";
import PowerBIAnalytics from "./components/PowerBIAnalytics";
import DataEngineering from "./components/DataEngineering";
import WebFrameworks from "./components/WebFrameworks";
import MobileDevelopment from "./components/MobileDevelopment";
import DevOpsCloud from "./components/DevOpsCloud";
import Certifications from "./components/Certifications";

import "./index.css";

// Protected Route Component
function ProtectedRoute({ element }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: '#FFFFFF',
        color: '#1f2937',
        fontSize: '18px',
        margin: 0,
        padding: 0,
        fontWeight: '600'
      }}>
        Loading...
      </div>
    );
  }

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function App() {
  const { isAuthenticated, loading } = useAuth();
  const [hasSeenWelcome, setHasSeenWelcome] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    // Whenever authentication status changes, check welcome flag
    if (!isAuthenticated) {
      setHasSeenWelcome(false);
      return;
    }
    
    // User is authenticated
    // FORCE clear the welcome flag so welcome shows for EVERY login/signup
    localStorage.removeItem('education_path_welcome_seen');
    setHasSeenWelcome(false);
    console.log('🎯 Welcome - showing for every authentication session');
  }, [isAuthenticated]);

  // Close sidebar when route changes
  React.useEffect(() => {
    setSidebarOpen(false);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        background: '#FFFFFF',
        color: '#1f2937',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* ADMIN ROUTES - GLOBALLY ACCESSIBLE FROM ANYWHERE */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        
        {/* ALL OTHER ROUTES - Check authentication first */}
        <Route 
          path="*" 
          element={
            isAuthenticated ? (
              // Authenticated Layout
              <>
                {/* If user hasn't seen welcome, show ONLY welcome page */}
                {!hasSeenWelcome ? (
                  <Welcome onGetStarted={() => {
                    console.log('✅ Welcome dismissed - showing dashboard');
                    localStorage.setItem('education_path_welcome_seen', 'true');
                    setHasSeenWelcome(true);
                  }} />
                ) : (
                  // After welcome, show the full app with sidebar
                  <div className="app">
                    <button 
                      className="sidebar-toggle" 
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      title={sidebarOpen ? "Close Menu" : "Open Menu"}
                    >
                      {sidebarOpen ? '✕' : '☰'}
                    </button>
                    <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                      <Sidebar onNavigate={() => setSidebarOpen(false)} />
                    </div>
                    <div className="main-content" onClick={() => sidebarOpen && setSidebarOpen(false)}>
                      <Routes>
                        {/* Main dashboard routes */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/placement" element={<Placement />} />
                        <Route path="/placement-enhanced" element={<PlacementEnhanced />} />
                        <Route path="/qar" element={<QARPreparation />} />
                        <Route path="/vacr" element={<VARCPreparation />} />
                        <Route path="/dsa" element={<DSAPractice />} />
                        <Route path="/btech-guides" element={<BTechGuide />} />
                        <Route path="/programming-languages" element={<ProgrammingLanguages />} />
                        <Route path="/career-path" element={<CareerPath />} />
                        <Route path="/resume-builder" element={<ResumeBuilder />} />
                        <Route path="/job-search" element={<JobSearch />} />
                        <Route path="/company-specific" element={<CompanySpecific />} />
                        <Route path="/entrance-exams" element={<EntranceExams />} />
                        <Route path="/ai-chatbot" element={<AIChatbot />} />
                        <Route path="/ai-tools" element={<AIMLTools />} />
                        <Route path="/power-bi" element={<PowerBIAnalytics />} />
                        <Route path="/data-engineering" element={<DataEngineering />} />
                        <Route path="/web-frameworks" element={<WebFrameworks />} />
                        <Route path="/mobile-development" element={<MobileDevelopment />} />
                        <Route path="/devops-cloud" element={<DevOpsCloud />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                      <AIChatbot context="main-dashboard" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              // Not authenticated - Show login/signup
              <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;


import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Placement Preparation", path: "/placement" },
  { name: "Tech Certifications", path: "/certifications" },
  { name: "QAR Preparation", path: "/qar" },
  { name: "VACR Preparation", path: "/vacr" },
  { name: "DSA Practice", path: "/dsa" },
  { name: "Coding Contests", path: "/job-search" },
  { name: "Programming Language Preparation", path: "/programming-languages" },
  { name: "BTECH Guidance", path: "/btech-guides" },
  { name: "Career Paths", path: "/career-path" },
  { name: "Resume Builder", path: "/resume-builder" },
  { name: "Job Search", path: "/job-search" },
  { name: "Company Specific", path: "/company-specific" },
  { name: "Entrance Exams", path: "/entrance-exams" },
  { name: "AI & ML Tools", path: "/ai-tools" },
  { name: "Power BI & Analytics", path: "/power-bi" },
  { name: "Data Engineering", path: "/data-engineering" },
  { name: "Web Frameworks", path: "/web-frameworks" },
  { name: "Mobile Development", path: "/mobile-development" },
  { name: "DevOps & Cloud", path: "/devops-cloud" },
];

const Sidebar = ({ onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <aside className="sidebar">
      {/* Branding Card */}
      <div className="sidebar-card branding-card">
        <div className="branding-icon">⚡</div>
        <div className="branding-content">
          <h2 className="branding-title">EDUCATION PATHWAY</h2>
        </div>
      </div>

      {/* User Profile Card */}
      {currentUser && (
        <div className="sidebar-card user-profile-card">
          {currentUser.photoURL && (
            <div className="profile-avatar">
              <img src={currentUser.photoURL} alt="avatar" />
            </div>
          )}
          <div className="profile-info">
            <div className="profile-name">{(function getSafe(v){
                if (!v) return '';
                if (typeof v === 'string') return v;
                if (typeof v === 'object') {
                  if (typeof v.fullName === 'string') return v.fullName;
                  if (typeof v.email === 'string' && v.email.indexOf('@')>-1) return v.email;
                  // avoid exposing passwords — try to find a readable id
                  if (v.id) return String(v.id);
                  return '';
                }
                return '';
              })(currentUser.fullName || currentUser.email || currentUser)}
            </div>
            <div className="profile-email">{(function getSafeEmail(v){
                if (!v) return '';
                if (typeof v === 'string') return v.indexOf('@')>-1? v : '';
                if (typeof v === 'object') {
                  if (typeof v.email === 'string') return v.email;
                  return '';
                }
                return '';
              })(currentUser.email)}</div>
          </div>
        </div>
      )}

      <nav>
        {menu.map((item, i) => (
          <a
            key={i}
            className={location.pathname === item.path ? "active" : ""}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
           Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

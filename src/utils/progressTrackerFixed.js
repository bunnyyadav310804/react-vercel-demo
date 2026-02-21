// Progress Tracker - Manages user progress across all sections
// Stores progress per user in localStorage
// FIXED VERSION: Only updates on actual task completion, not page visits

const progressTracker = {
  // Get user progress
  getUserProgress(userId) {
    if (!userId) return null;
    const stored = localStorage.getItem(`education_path_progress_${userId}`);
    return stored ? JSON.parse(stored) : null;
  },

  // Initialize user progress (called when user registers)
  initializeProgress(userId) {
    const progress = {
      sections: {
        placement: 0,
        qar: 0,
        varc: 0,
        dsa: 0,
        programming: 0,
        blueprint: 0,
        careers: 0,
        resume: 0,
        jobsearch: 0,
        company: 0,
        exams: 0,
        aiml: 0,
        powerbi: 0,
        dataeng: 0,
        webframes: 0,
        mobile: 0,
        devops: 0,
        chatbot: 0
      },
      totalProgress: 0,
      lastUpdated: new Date().toISOString(),
      moduleAccess: {}
    };
    localStorage.setItem(`education_path_progress_${userId}`, JSON.stringify(progress));
    return progress;
  },

  // Track module access - ONLY records timestamp, does NOT auto-increment progress
  // Progress updates happen only when user completes actual tasks/questions
  trackModuleAccess(userId, section) {
    if (!userId) return null;

    let userProgress = this.getUserProgress(userId);
    if (!userProgress) {
      this.initializeProgress(userId);
      userProgress = this.getUserProgress(userId);
    }

    // Initialize moduleAccess if needed
    if (!userProgress.moduleAccess) {
      userProgress.moduleAccess = {};
    }

    // Record access timestamp ONLY - NO auto-increment
    userProgress.moduleAccess[section] = new Date().toISOString();

    userProgress.lastUpdated = new Date().toISOString();
    localStorage.setItem(`education_path_progress_${userId}`, JSON.stringify(userProgress));

    // Notify other components
    try {
      window.dispatchEvent(new CustomEvent('progressUpdated', { detail: { userId } }));
    } catch (e) {
      // ignore in non-browser contexts
    }

    return userProgress;
  },

  // Update section progress - ONLY call this when user actually completes work
  updateSectionProgress(userId, section, progress) {
    if (!userId) return null;

    let userProgress = this.getUserProgress(userId);
    if (!userProgress) {
      return this.initializeProgress(userId);
    }

    // Update the specific section
    if (Object.prototype.hasOwnProperty.call(userProgress.sections, section)) {
      userProgress.sections[section] = Math.min(100, Math.max(0, progress)); // Clamp between 0-100
    }

    // Calculate total progress
    const sections = Object.values(userProgress.sections);
    userProgress.totalProgress = Math.round(
      sections.reduce((a, b) => a + b, 0) / sections.length
    );

    userProgress.lastUpdated = new Date().toISOString();
    localStorage.setItem(`education_path_progress_${userId}`, JSON.stringify(userProgress));

    try {
      window.dispatchEvent(new CustomEvent('progressUpdated', { detail: { userId } }));
    } catch (e) {}

    return userProgress;
  },

  // Increment section progress by a specific amount
  // Call this when user completes practice questions, answers correctly, etc.
  incrementSectionProgress(userId, section, increment = 5) {
    const userProgress = this.getUserProgress(userId);
    if (!userProgress || !Object.prototype.hasOwnProperty.call(userProgress.sections, section)) {
      return null;
    }

    const currentProgress = userProgress.sections[section];
    return this.updateSectionProgress(userId, section, currentProgress + increment);
  },

  // Get all user stats for dashboard
  getAllStats(userId) {
    const progress = this.getUserProgress(userId);
    if (!progress) return null;

    return {
      totalProgress: progress.totalProgress,
      sectionsProgress: progress.sections,
      lastUpdated: progress.lastUpdated,
      completedSections: Object.values(progress.sections).filter(p => p === 100).length,
      startedSections: Object.values(progress.sections).filter(p => p > 0).length
    };
  },

  // Get sections needing focus (lowest progress)
  getSectionNeedingFocus(userId, count = 3) {
    const progress = this.getUserProgress(userId);
    if (!progress) return [];

    return Object.entries(progress.sections)
      .map(([section, value]) => ({ section, progress: value }))
      .sort((a, b) => a.progress - b.progress)
      .slice(0, count);
  },

  // Get top performing sections
  getTopSections(userId, count = 3) {
    const progress = this.getUserProgress(userId);
    if (!progress) return [];

    return Object.entries(progress.sections)
      .map(([section, value]) => ({ section, progress: value }))
      .sort((a, b) => b.progress - a.progress)
      .slice(0, count);
  }
};

export default progressTracker;

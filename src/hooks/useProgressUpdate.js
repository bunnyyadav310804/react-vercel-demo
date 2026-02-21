import { useCallback } from 'react';
import progressTracker from '../utils/progressTracker';

/**
 * Custom hook to easily update progress from any component
 * Usage: const updateProgress = useProgressUpdate();
 *        updateProgress(userId, 'placement', 75);
 */
export const useProgressUpdate = () => {
  const updateProgress = useCallback((userId, section, percent) => {
    if (!userId) {
      console.warn('useProgressUpdate: userId is required');
      return;
    }
    
    progressTracker.updateSectionProgress(userId, section, percent);
  }, []);

  return updateProgress;
};

export default useProgressUpdate;

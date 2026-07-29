import { useEffect, useState } from "react";

const STORAGE_KEY = "practice-project-saved-items";

export default function useSavedItems() {
  const [savedIds, setSavedIds] = useState(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    try {
      return JSON.parse(storedValue);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  function toggleSaved(itemId) {
    setSavedIds((currentIds) => {
      if (currentIds.includes(itemId)) {
        return currentIds.filter((id) => id !== itemId);
      }

      return [...currentIds, itemId];
    });
  }

  return { savedIds, toggleSaved };
}

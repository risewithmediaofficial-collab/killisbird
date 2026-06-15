import { createContext, useContext, useMemo } from "react";

const AppContext = createContext(null);

const APP_CONFIG = {
  siteName: "Killis Bird",
  tagline: "Autonomous Flight. Engineered.",
  contactEmail: "info@killisbird.com",
  contactPhone: "+91 98765 43210",
  address: "Bharat, India",
  socials: {
    instagram: "https://instagram.com/killisbird",
    linkedin: "https://linkedin.com/company/killisbird",
    youtube: "https://youtube.com/@killisbird",
  },
  theme: {
    neon: "#e8450a",
    foreground: "#0f0f0f",
    background: "#f5f5f0",
  },
};

/**
 * AppContextProvider — wraps the app and exposes global site config.
 * Access via `useAppContext()` in any component.
 */
function AppContextProvider({ children }) {
  // Memoize config so consumers don't re-render on every parent render
  const value = useMemo(() => ({ config: APP_CONFIG }), []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * useAppContext — consume site-wide config from any component.
 * @returns {{ config: typeof APP_CONFIG }}
 */
function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside <AppContextProvider>");
  }
  return ctx;
}

export { AppContextProvider, useAppContext, APP_CONFIG };

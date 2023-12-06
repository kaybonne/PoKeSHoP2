import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface GbModeProviderProps {
  children: ReactNode;
}

const GbModeContext = createContext<any>(null);

function GbModeProvider({ children }: GbModeProviderProps) {
  const [isGbMode, setIsGbMode] = useState(false);

  useEffect(
    function () {
      if (isGbMode) {
        document.documentElement.classList.add('gb-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('gb-mode');
      }
    },
    [isGbMode]
  );

  function toggleGbMode() {
    setIsGbMode((isGb) => !isGb);
  }

  return (
    <GbModeContext.Provider value={{ isGbMode, toggleGbMode }}>
      {children}
    </GbModeContext.Provider>
  );
}

function useGbMode() {
  const context = useContext(GbModeContext);
  if (context === undefined)
    throw new Error('GbModeContext was used outside of GbModeProvider');
  return context;
}

export { GbModeProvider, useGbMode };

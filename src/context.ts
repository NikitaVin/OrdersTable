import { createContext } from 'react';

interface TAppContext {
  isLightTheme: boolean;
}

const AppContext = createContext<TAppContext>({
  isLightTheme: false,
});

export default AppContext;

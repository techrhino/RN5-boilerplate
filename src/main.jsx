import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { I18nManager } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import { RootNavigator } from './rootNavigator';
import { PreferencesContext } from './context/preferencesContext';

export const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState(
    colorScheme === 'dark' ? 'dark' : 'light'
  );
  const [rtl] = React.useState(I18nManager.isRTL);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const toggleRTL = React.useCallback(() => {
    I18nManager.forceRTL(!rtl);
  }, [rtl]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left')
    }),
    [rtl, theme, toggleRTL]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={
          theme === 'light'
            ? {
                ...DefaultTheme,
                colors: { ...DefaultTheme.colors, primary: '#d6514c' },
              }
            : {
                ...DarkTheme,
                colors: { ...DarkTheme.colors, primary: '#d6514c' },
              }
        }
      >
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

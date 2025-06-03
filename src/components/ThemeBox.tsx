import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme, themeManager } from '../../ThemeManager';


export const ThemedBox: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(themeManager.getTheme());

  useEffect(() => {
    const handleThemeChange = (newTheme: Theme) => {
      setTheme(newTheme);
    };

    themeManager.subscribe(handleThemeChange);

    return () => {
      themeManager.unsubscribe(handleThemeChange);
    };
  }, []);

  const styles = createStyles(theme);

  return (
    <View style={styles.box}>
      <Text style={styles.text}>Tema atual: {theme}</Text>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    box: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: theme === 'light' ? '#eee' : '#333',
      alignItems: 'center',
      height: 100,
      justifyContent: 'center',
    },
    text: {
      color: theme === 'light' ? '#000' : '#fff',
      fontSize: 16,
    },
  });

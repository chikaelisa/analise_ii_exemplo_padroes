import { Button } from "react-native";
import { themeManager } from "../../ThemeManager";

export const ThemeToggle = () => {
  const handleToggle = () => {
    themeManager.toggleTheme();
  };

  return <Button title="Alternar Tema" onPress={handleToggle} />;
};

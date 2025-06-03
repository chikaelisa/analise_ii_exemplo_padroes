import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemedBox } from '../components/ThemeBox';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

const AboutScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre este App</Text>
      <Text style={styles.content}>
        Este é um exemplo de uso dos padrões Singleton e Observer no React Native com TypeScript.
      </Text>
      <ThemedBox />
      <Button title="<-- Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 48,
    gap: 24,
  },
  title: {
    fontSize: 22,
  },
  content: {
    fontSize: 16,
  },
});

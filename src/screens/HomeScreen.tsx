import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ThemedBox } from '../components/ThemeBox';
import { ThemeToggle } from '../components/ThemeToggle';
import { RootStackParamList } from '../navigation/AppNavigator';


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, boas vindas ao nosso app</Text>
      <ThemedBox />
      <View>
      <ThemeToggle />
      <Button title="Bora ver a outra tela -> " onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 48,
    gap: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});

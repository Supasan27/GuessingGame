import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>;
  }

  return (
    <LinearGradient colors={['#9b3273','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/imgbg.jpg')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});

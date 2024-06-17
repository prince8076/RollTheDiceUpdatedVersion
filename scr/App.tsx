import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import DiceOne from "../assets/One.png"
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"

type DiceProps = PropsWithChildren<{ 
  imageUrl: ImageSourcePropType  // it will validate the image url against the properties
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => { // it is a commonent properties like app 
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}

const App = (): React.JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
    const randomIndex = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} /> 
      <TouchableOpacity onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;

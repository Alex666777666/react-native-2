import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstractionText";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuesss, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (currentGuesss == userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuesss, userNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuesss < userNumber) ||
      (direction === "greater" && currentGuesss > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong...", [
        { text: "Sory", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuesss;
    } else {
      minBoundry = currentGuesss + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuesss
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuesss}</NumberContainer>
      <Card>
        <InstructionsText style={styles.instructionText}>
          Highter or Lower
        </InstructionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuesss}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              stlye={styles.listItem}
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 38,
  },
  instructionText: {
    marginBottom: 12,
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },

  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },

  listContainer: {
    flex: 1,
    padding: 16,
  },
});

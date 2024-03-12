import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../constans/Colors";
import Title from "../components/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightLight}>{roundsNumber}</Text>{" "}
        rounds to get a number{" "}
        <Text style={styles.hightLight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    borderRadius: 200,
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: Colors.yellow,
    overflow: "hidden",
    margin: 35,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },

  hightLight: {
    color: Colors.yellow,
    fontWeight: "bold",
  },
});

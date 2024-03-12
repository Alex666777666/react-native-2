import {
  StyleSheet,
  View,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Colors from "../constans/Colors";
import Title from "../components/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 400) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/image/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.hightLight}>{roundsNumber}</Text> rounds to get a
          number <Text style={styles.hightLight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
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

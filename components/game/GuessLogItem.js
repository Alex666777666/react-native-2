import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constans/Colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: Colors.purple,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 10,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});

import { StyleSheet, View } from "react-native";
import Colors from "../../constans/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    backgroundColor: Colors.purple,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 1.25,
  },
});

import { Text, StyleSheet } from "react-native";
import Colors from "../../constans/Colors";

const InstructionsText = ({ children, style }) => {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
};

export default InstructionsText;

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.yellow,
    fontSize: 24,
  },
});

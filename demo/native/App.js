import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Box } from "./lib/components/";

export default function App() {
  return (
    <View style={styles.container}>
      <Box parse="w:100% h:100% c:#0E1115 d:flex a:center j:center">
        <Text
          style={{
            color: "#fff",
          }}
        >
          Hello Native!
        </Text>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

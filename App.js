import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Antonio-Bold": require("./assets/fonts/Antonio-Bold.ttf")
  })

  if(!loaded){
    return <Text>
      Font is loading...
    </Text>
  }
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: "Antonio-Medium", fontSize: spacing[5]}}>Hello!</Text>
      <Text style={{ marginTop: spacing[4]}}>Hello Again!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

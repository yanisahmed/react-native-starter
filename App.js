import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Antonio-Bold": require("./assets/fonts/Antonio-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf")
  })

  if(!loaded){
    return <Text>
      Font is loading...
    </Text>
  }
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: typography.primary, fontSize: spacing[5]}}>Hello!</Text>
      <Text style={{ marginTop: spacing[4], fontFamily: typography.primaryBold, fontSize: spacing[4]}}>Hello Again!</Text>
      <Text style={{ marginTop: spacing[4], fontFamily: typography.bold, fontSize: spacing[4]}}>Hello Again, Yanis!</Text>

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

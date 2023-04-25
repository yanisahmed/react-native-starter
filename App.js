import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import Text from './src/components/text/text';

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
      <Text preset='h1'>Awesome Project</Text>
      <Text preset='h2'>React Native App</Text>
      <Text preset='small' style={{marginTop:spacing[3]}}>Developed By Yanis Ahmed</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

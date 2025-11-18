import cubecalc from "./cubecalc";
import SqrCalc from "./SqrCalc"
import { link } from 'expo-router'
import { Text, View} from "react-native"

export default function App() {
  return (
    <View>
     <Text>Calculator App</Text>
     <link herf='/SqrCalc'>Square Cal</link>
     <link herf='/CubeCalc'>Cube Cal</link>
    </View>
  );
}
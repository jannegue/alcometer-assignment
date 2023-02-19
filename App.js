import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import NumericInput from "react-native-numeric-input";
import { RadioButton } from "react-native-paper";
import { useFonts } from "expo-font";
import { lightStyle } from "./Styles/Styles";
import { darkStyle } from "./Styles/darkStyle";
import { Octicons } from "@expo/vector-icons";

export default function App() {
  const [nbr_bottles, setNbr_bottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [sex, setSex] = useState("m");
  const [dark, setDark] = useState(false);
  const [high, setHigh] = useState(false);
  const [low, setLow] = useState(false);

  var buttonTitle = "CALCULATE";

  let myStyle = dark ? darkStyle : lightStyle;

  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  //error message if no weight input
  function handleWeightInput() {
    if (!weight) {
      Alert.alert("Please put weight in."), setResult("ERROR");
    } else {
      calculate();
    }
  }

  return (
    <ScrollView>
      <View style={myStyle.container}>
        <Switch
          style={myStyle.switch}
          value={dark}
          onValueChange={() => setDark(!dark)}
        ></Switch>
        <Octicons name="meter" size={80} color="#d5eeff" style={myStyle.icon} />
        <Text style={myStyle.title}>Alcometer</Text>

        <Text style={myStyle.Label}>Bottles</Text>

        <NumericInput
          onChange={(n) => setNbr_bottles(n)}
          minValue={0}
          totalWidth={150}
          totalHeight={40}
          rounded
          containerStyle={{ backgroundColor: "#d5eeff" }}
        />

        <Text style={myStyle.Label}>Hours</Text>

        <NumericInput
          style={myStyle.NumericInput}
          onChange={(n) => setHours(n)}
          minValue={0}
          totalWidth={150}
          totalHeight={40}
          rounded
          containerStyle={{ backgroundColor: "#d5eeff" }}
        />

        <Text style={[myStyle.Label ,{marginTop: 30}]}>Weight in kg</Text>

        <TextInput
          keyboardType="number-pad"
          style={myStyle.TextInput}
          onChangeText={(t) => {
            setWeight(t);
          }}
        ></TextInput>

        {/* Apple Layout for Radio Button is different */}
        <RadioButton.Group onValueChange={(s) => setSex(s)} value={sex}>
          <View style={myStyle.ViewSex}>
            <SexButton label={"Male"} value={"m"} />
            <SexButton label={"Female"} value={"f"} />
          </View>
        </RadioButton.Group>

        <Text style={[myStyle.result, { color: getStyle(result) }]}>
          {result}
        </Text>

        <TouchableOpacity
          style={myStyle.Button}
          onPress={() => handleWeightInput()}
        >
          <Text style={myStyle.Label}> CALCULATE </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  function getStyle(result) {
    if (result < 1) {
      return "#00ab1a";
    } else if (result > 1 && result < 2) {
      return "#ffaa01";
    } else if (result > 2) {
      return "#d30000";
    } else {
      return "#d30000";
    }
  }

  function calculate() {
    console.log("Pressed");

    //calculate blood alcohol
    let l = nbr_bottles * 0.33;

    let gr = l * 8 * 4.5;

    let burning = weight / 10;

    let gramsleft = gr - burning * hours;

    if (sex == "m") {
      let resultMale = gramsleft / (weight * 0.7);

      console.log({ weight });

      if (resultMale < 0) resultMale = 0;
      resultMale = resultMale.toFixed(2);
      setResult(resultMale);
    }

    if (sex == "f") {
      let resultFemale = gramsleft / (weight * 0.6);
      if (resultFemale < 0) resultFemale = 0;
      resultFemale = resultFemale.toFixed(2);
      setResult(resultFemale);
    }
  }

  //Selection of Radio Button
  function SexButton({ label, value }) {
    return (
      <View style={myStyle.radioButton}>
        <RadioButton value={value} />
        <Text style={myStyle.LabelRadioButton}>{label}</Text>
      </View>
    );
  }
}

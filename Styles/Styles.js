import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const lightStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    height: 900,
  },
  icon: {
    color: "#004887",
    size: 50,
    alignSelf: "center",
  },
  Label: {
    fontSize: 25,
    color: "#004887",
    marginBottom: 10,
    alignSelf: "left",
    fontFamily: "Lato-Regular",
    marginTop: 15,
  },
  TextInput: {
    backgroundColor: "#d5eeff",
    width: 380,
    marginBottom: 10,
    marginTop: 6,
    alignSelf: "left",
    height: 40,
    fontSize: 20,
    fontFamily: "Lato-Regular",
  },
  title: {
    fontSize: 50,
    alignSelf: "center",
    color: "#004887",
    fontFamily: "Lato-Regular",
    marginBottom: 10,
  },
  radioButton: {
    marginTop: 30,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: "#d5eeff",
    fontFamily: "Lato-Regular",
    justifyContent: "center",
    alignItems: "center",
  },
  switch: {
    alignSelf: "left",
    color: "black",
    marginBottom: 15,
  },
  result: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 40,
    color: "#004887",
    fontFamily: "Lato-Regular",
    alignSelf: "center",
  },
  Button: {
    color: "#004887",
    fontSize: 30,
    alignSelf: "center",
    borderColor: "#004887",
    borderWidth: 2,
  },

  error: {
    fontFamily: "Lato-Regular",
    fontSize: 15,
    color: "#ff0000",
    fontWeight: "bold",
  },
  ViewSex: {
    flexDirection: "row",
    justifyContent: "center",
  },
  LabelRadioButton: {
    fontSize: 25,
    color: "#004887",
    marginBottom: 10,
    alignSelf: "center",
    fontFamily: "Lato-Regular",
    marginTop: 15,
  },
});

export { lightStyle };

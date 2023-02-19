import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const darkStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    backgroundColor: "#004887",
    height: 900,
  },
  icon: {
    color: "#ffffff",
    size: 50,
    alignSelf: "center",
  },
  Label: {
    fontSize: 25,
    color: "#ffffff",
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
    color: "#ffffff",
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
    color: "#ffffff",
    fontFamily: "Lato-Regular",
    alignSelf: "center",
  },
  Button: {
    fontSize: 30,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 2,
  },

  error: {
    fontFamily: "Lato-Regular",
    fontSize: 15,
    color: "#fb3b3b",
    fontWeight: "bold",
  },
  ViewSex: {
    justifyContent: "center",
    flexDirection: "row",
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

export { darkStyle };

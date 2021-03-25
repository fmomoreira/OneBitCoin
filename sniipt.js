import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Title from "./src/components/Title";
import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";
import QuotationsList from "./src/components/QuotationsList";

export default function App(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <CurrentPrice />
      <HistoryGraphic/>
      <QuotationsList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 60 : 0,
  },
});



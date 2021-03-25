import React from "react";
import { View, Text } from "react-native";
import styles from "./style"

export default function Title() {
  return (
    <View style={styles.headerTitulo}>
      <Text style={styles.titulotext}>OneBitCoin</Text>
    </View>
  );
}



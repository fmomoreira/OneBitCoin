import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ 54343.355</Text>
      <Text style={styles.subTitle}>ultima cotação</Text>
    </View>
  );
}


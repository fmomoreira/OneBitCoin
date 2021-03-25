import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationsItem(props) {
  return (
    <View style={styles.cardPrincipal}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require("../../../images/bitcoinredpng.png")}
          />
         <Text style={styles.dayCotacion}>{props.data}</Text>
        </View>
        
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>$ {props.valor}</Text>
      </View>
    </View>
  );
}



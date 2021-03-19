import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";



export default function CardCotacaoDiaria(props) {
    return(
      <View style={styles.cardPrincipal}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require("../../images/logoBitcoin-removebg-preview.png")}
          />
          <Text style={styles.nameCripto}>Bitcoin</Text>
        </View>
        <Text style={styles.priceDate}>{props.data}</Text>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>R$ {props.valor}</Text>
      </View>
      </View>

    );
  }
   



   

import React from 'react';
import {View, Text, Image } from 'react-native';
import styles from './style'

export default function CardCotacaoDiaria(){
    return(
        <View style={styles.cardPrincipal}>
            <View style={styles.contextLeft}>
              <View style={styles.boxLogo}>              
                <Image style={styles.logBitcoin} source={require('../../images/logoBitcoin-removebg-preview.png')}></Image>  
                <Text style={styles.nameCripto}>Bitcoin</Text>
              </View>
             <Text style={styles.priceDate}>16 de mar 2021</Text>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>R$ 310.605,78</Text>
            </View>
        </View>
    );
}




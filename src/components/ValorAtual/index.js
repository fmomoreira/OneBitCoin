import React from 'react'
import {View, Text } from 'react-native'
import styles from './style'

export default function PrecoAtual(){
    return(
        <View style={styles.headerPreco}>
            <Text style={styles.precoatual}>R$ 310.605,78</Text>
            <Text style={styles.subtitulo}>Hoje</Text>
        </View>
    );
}



import React from 'react'
import {ScrollView } from 'react-native'
import CotacaoDiaria from '../CardCotacaoDiaria/index'
import styles from './styles'

export default function CardCotacoes(){
    return(
        
            <ScrollView style={styles.headerCard}>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              <CotacaoDiaria/>
              
           </ScrollView>
      
        
      
    );
}


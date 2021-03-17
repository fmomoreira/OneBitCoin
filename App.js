import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import CardCotacoes from './src/components/CardCotacoes/';
import Grafico from './src/components/Grafico/';
import Titulo from './src/components/Titulo/'
import PrecoAtual from './src/components/ValorAtual/';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Titulo/>
      <PrecoAtual/>
      <Grafico/>
      <CardCotacoes/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#0E0D0D',
    alignItems:'center',
    paddingTop: Platform.OS === 'android' ? 60: 0,
    
  },
})
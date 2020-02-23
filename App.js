import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity} from 'react-native';

function App(){

  const [nomeCores] = useState(['AZUL', 'AMARELO', 'VERDE', 'VERMELHO']);

  return(
    <View style={{flex: 1, backgroundColor: '#E8E8E8'}}>

      <StatusBar hidden />

      <View style={styles.containerObjetivo}>
        <TouchableOpacity style={styles.circuloObjetivo} />
      </View>

      <View style={{flex: 4}}>
        <TouchableOpacity style={styles.opcoesEscolha}>
          <Text style={[styles.textoOpcoes, {color: 'red'}]}> {nomeCores[0]} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesEscolha}>
          <Text style={[styles.textoOpcoes, {color: 'blue'}]}> {nomeCores[1]} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesEscolha}>
          <Text style={[styles.textoOpcoes, {color: 'yellow'}]}> {nomeCores[2]} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesEscolha}>
          <Text style={[styles.textoOpcoes, {color: 'green'}]}> {nomeCores[3]} </Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}> Rodada: 1/10 | Pontos: 0 </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  containerObjetivo: {
    alignItems: 'center',
    paddingTop: 45,
    flex: 2
  },
  circuloObjetivo: {
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: 'green'
  },
  opcoesEscolha: {
    paddingTop: 35,
    alignItems: 'center'
  },
  textoOpcoes: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default App;

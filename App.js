import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity} from 'react-native';

import LottieView from 'lottie-react-native';

function App(){

  const [nomeCores] = useState(['AZUL', 'AMARELO', 'VERDE', 'VERMELHO']);
  const [cores] = useState(['blue', 'yellow', 'green', 'red']);
  const [numeroAleatorioPalavras, setNumeroAleatorioPalavras] = useState([]);
  const [numeroAleatorioObjetivo, setNumeroAleatorioObjetivo] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [rodada, setRodada] = useState(1);


  useEffect(() => {
    chamaSorteio();
  }, []);


  function jogo(jogadaUsuario){
    if(verificaJogada(jogadaUsuario)){
      atualizaJogo();
    }else{
      chamaSorteio();
      setRodada(rodada + 1);
    }
  }


  function chamaSorteio(){
    setNumeroAleatorioPalavras(sorteiaNumero());
    setNumeroAleatorioObjetivo(Math.floor(Math.random() * 4));
  }


  function sorteiaNumero(){
    let posicoes = [0, 1, 2, 3];
    let randomico = posicoes.sort(function(a,b){
      return(Math.round(Math.random())-0.5);
    });
    return randomico;
  }


  function verificaJogada(usuario){
    if(usuario === 'AZUL' && cores[numeroAleatorioObjetivo] === 'blue'){
      return true;
    }else if(usuario === 'AMARELO' && cores[numeroAleatorioObjetivo] === 'yellow'){
      return true;
    }else if(usuario === 'VERDE' && cores[numeroAleatorioObjetivo] === 'green'){
      return true;
    }else if(usuario === 'VERMELHO' && cores[numeroAleatorioObjetivo] === 'red'){
      return true;
    }else{
      return false;
    }
  }


  function atualizaJogo(){
    setPontos(pontos + 1);
    setRodada(rodada + 1);
    chamaSorteio();
  }


  if(rodada > 10){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>

        <StatusBar backgroundColor={'#FF7E2A'} />

        <LottieView source={require('./src/lottie/win.json')} autoPlay loop />

        <Text style={{fontSize: 25, color: '#FF7E2A', fontWeight: 'bold'}}> Você acertou {pontos} vezes! </Text>

        <TouchableOpacity style={{paddingTop: 30}} onPress={() => {
          setPontos(0);
          setRodada(1);
        }}>
          <Text style={{color: '#363636', fontSize: 19}}> Jogar Novamente </Text>
        </TouchableOpacity>
      </View>
    );
  }else{
    return(
      <View style={{flex: 1, backgroundColor: '#E8E8E8'}}>

        <StatusBar hidden />

        <View style={styles.containerObjetivo}>
          <TouchableOpacity style={[styles.circuloObjetivo, {backgroundColor: cores[numeroAleatorioObjetivo]}]} />
        </View>

        <View style={{flex: 4, paddingTop: 55}}>
          <TouchableOpacity style={styles.opcoesEscolha} onPress={() => {
            jogo(nomeCores[numeroAleatorioPalavras[0]]);
          }}>
            <Text style={[styles.textoOpcoes, {color: cores[numeroAleatorioPalavras[3]]}]}> {nomeCores[numeroAleatorioPalavras[0]]} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcoesEscolha} onPress={() => {
            jogo(nomeCores[numeroAleatorioPalavras[1]]);
          }}>
            <Text style={[styles.textoOpcoes, {color: cores[numeroAleatorioPalavras[2]]}]}> {nomeCores[numeroAleatorioPalavras[1]]} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcoesEscolha} onPress={() => {
            jogo(nomeCores[numeroAleatorioPalavras[2]]);
          }}>
            <Text style={[styles.textoOpcoes, {color: cores[numeroAleatorioPalavras[1]]}]}> {nomeCores[numeroAleatorioPalavras[2]]} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcoesEscolha} onPress={() => {
            jogo(nomeCores[numeroAleatorioPalavras[3]]);
          }}>
            <Text style={[styles.textoOpcoes, {color: cores[numeroAleatorioPalavras[0]]}]}> {nomeCores[numeroAleatorioPalavras[3]]} </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: '#696969'}}> Rodada: {rodada}/10 </Text>
        </View>

      </View>
    );
  }

};

const styles = StyleSheet.create({
  containerObjetivo: {
    alignItems: 'center',
    paddingTop: 45,
    flex: 2
  },
  circuloObjetivo: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  opcoesEscolha: {
    paddingTop: 15,
    alignItems: 'center'
  },
  textoOpcoes: {
    fontSize: 45,
    fontWeight: 'bold'
  }
});

export default App;

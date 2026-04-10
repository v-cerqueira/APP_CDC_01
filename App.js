import React from 'react';
import { View, Image, Text, ScrollView, SafeAreaView } from 'react-native';
import estilos from './src/styleSheet/estilo';

function App() {
  const img = "https://cdn-icons-png.flaticon.com/512/919/919851.png";
  const autor = "Vinicius Cerqueira Silva";
  const data = "10/04/2026";

  const paises = [
    { id: 1, nome: 'Japão', capital: 'Tóquio', estilo: estilos.cardJapao, titulo: estilos.textoAmarelo, detalhe: estilos.textoBranco },
    { id: 2, nome: 'Portugal', capital: 'Lisboa', estilo: estilos.cardPortugal, titulo: estilos.textoPreto, detalhe: estilos.textoBranco },
    { id: 3, nome: 'Itália', capital: 'Roma', estilo: estilos.cardItalia, titulo: estilos.textoAmarelo, detalhe: estilos.textoBranco },
    { id: 4, nome: 'Alemanha', capital: 'Berlim', estilo: estilos.cardAlemanha, titulo: estilos.textoVerde, detalhe: estilos.textoPreto },
    { id: 5, nome: 'Egito', capital: 'Cairo', estilo: estilos.cardEgito, titulo: estilos.textoBranco, detalhe: estilos.textoBranco },
    { id: 6, nome: 'Síria', capital: 'Damasco', estilo: estilos.cardSiria, titulo: estilos.textoVerde, detalhe: estilos.textoPreto },
  ];

  return (
    <SafeAreaView style={estilos.safeArea}>
      <View style={estilos.container}>
        <View style={estilos.header}>
          <Text style={estilos.titulo}>FUNDAMENTOS II</Text>

          <View style={estilos.avatarBox}>
            <Image source={{ uri: img }} style={estilos.avatar} />
          </View>

          <Text style={estilos.subtitulo}>DSV MOBILE</Text>
        </View>

        <View style={estilos.faixaAmarela} />

        <ScrollView
          style={estilos.scrollArea}
          contentContainerStyle={estilos.listaPaises}
          showsVerticalScrollIndicator={false}
        >
          {paises.map((pais) => (
            <View key={pais.id} style={[estilos.cardPais, pais.estilo]}>
              <Text style={[estilos.textoPais, pais.titulo]}>{pais.nome}</Text>
              <Text style={[estilos.textoCapital, pais.detalhe]}>Capital: {pais.capital}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={estilos.footer}>
          <Text style={estilos.footerText}>{autor}</Text>
          <Text style={estilos.footerText}>{data}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;

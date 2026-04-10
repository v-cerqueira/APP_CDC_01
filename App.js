import React from 'react';
import { View, Image, Text } from 'react-native';
import estilos from './src/styleSheet/estilo';

function App() {
  let img = "https://cdn-icons-png.flaticon.com/512/919/919851.png";
  let autor = "Vinicius Cerqueira Silva";
  let data = "10/04/2026";

  return (
    <View style={estilos.container}>

      <View style={estilos.header}>
        <Text style={estilos.titulo}>FUNDAMENTOS II</Text>

        <View style={estilos.avatarBox}>
          <Image
            source={{ uri: img }}
            style={estilos.avatar}
          />
        </View>

        <Text style={estilos.subtitulo}>DSV MOBILE</Text>
      </View>

      <View style={estilos.contentBox}>
        <Text style={estilos.contentText}>CONTEÚDO</Text>
      </View>

      <View style={estilos.spacer} />

      <View style={estilos.footer}>
        <Text style={estilos.footerText}>{autor}</Text>
        <Text style={estilos.footerText}>{data}</Text>
      </View>

    </View>
  );
}

export default App;

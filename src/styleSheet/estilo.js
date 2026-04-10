import { StyleSheet } from 'react-native';
import container from './container';
import cabecalho from './cabecalho';
import conteudo from './conteudo';
import rodape from './rodape';

const estilos = StyleSheet.create({
  ...container,
  ...cabecalho,
  ...conteudo,
  ...rodape,
});

export default estilos;

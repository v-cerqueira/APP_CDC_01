import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 14,
    paddingTop: 36,
    paddingBottom: 12,
  },
  header: {
    backgroundColor: '#a80000',
    borderRadius: 26,
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 6,
    minHeight: 185,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 12,
  },
  avatarBox: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#ff8d8d',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 14,
  },
  subtitulo: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  contentBox: {
    backgroundColor: '#1200ff',
    minHeight: 290,
    marginTop: 10,
    paddingTop: 6,
    paddingHorizontal: 2,
  },
  contentText: {
    color: '#ffffff',
    fontSize: 18,
  },
  spacer: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#a80000',
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footerText: {
    color: '#ffff00',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default estilos;

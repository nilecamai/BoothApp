import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Platform.OS === 'web' ? 60 : 24,
    paddingTop: Platform.OS === 'web' ? 8 : 0,
    height: '100%',
    backgroundColor: '#F2F2F2'
  },
  smallMargin: {
    marginBottom: 8
  },
  limitedSizeContainer: {
    width: 840,
    maxWidth: '100%'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid: {
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  webPadded: {
    paddingVertical: Platform.OS === 'web' ? 8 : 0,
    paddingEnd: -24
  },
  image: {
    marginTop: 8,
    borderRadius: 20,
    width: '100%',
    height: 300,
    marginBottom: 8,
  },
  button: {
    borderRadius: 40
  }
});
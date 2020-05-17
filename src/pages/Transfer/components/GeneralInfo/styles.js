import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  container: {
    padding: 15,
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },

  agencyContainer: {
    marginRight: 20
  },

  agencyTitle: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 3
  },

  creditTitle: {
    color: 'grey',
    fontSize: 16
  },

  credit: {
    fontWeight: 'bold',
    fontSize: 18
  },

  limitDescription: {
    color: 'grey',
    marginTop: 5,
    fontSize: 12
  },

  limit: {
    color: 'black',
    fontWeight: 'bold'
  }
})

export default styles;
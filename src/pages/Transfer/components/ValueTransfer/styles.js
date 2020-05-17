import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  container:{
    padding: 15
  },

  valueText: {
    color: 'grey',
    fontSize: 18
  },

  mainValueContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  mainValue: {
    fontSize: 40,
  },

  xButton: {
    marginLeft: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 3,
    borderRadius: 5
  },

  x: {
    color: 'grey',
    fontSize: 16,
  },

  valuesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20
  },

  valuesBox: {
    borderWidth: 1.1,
    padding: 10,
    paddingVertical: 15,
    marginVertical: 10,
    width: 90,
    borderRadius: 5,
    textAlign: 'center'
  },

  continueButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#5bb332',
    borderRadius: 20,
    padding: 10,
    width: '95%'
  },

  continueButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color:'white',
  }
})

export default styles;
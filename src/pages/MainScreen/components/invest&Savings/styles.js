import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        marginTop: 5,
        padding: 20,
    },  

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#282828',
        marginBottom: 10
    },

    square: {
        backgroundColor: 'white',
        marginBottom: 20,
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.3,
        borderRadius: 5,
        padding: 20
    },
    
    alignItens: {
        flexDirection: 'row'
    },

    icon: {
        color: '#5bb332',
        marginRight: 10
    },

    description: {
        color: 'grey',
        marginTop: 5
    },

    subtitle: {
        fontSize: 16,
        top: 2
    },

    iconArrow: {
        left: '690%'
    },

    iconArrowEnd: {
        left: '590%'
    }
});

export default styles;
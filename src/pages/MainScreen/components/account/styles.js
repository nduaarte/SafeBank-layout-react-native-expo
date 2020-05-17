import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        top: -30,
        width: 330,
        height: 210,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset:{width: 2, height: 2},
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        padding: 20,
    },

    menuContainer: {
        flexDirection: 'row',
        borderColor: '#e7e7e4',
        marginBottom: 20
    },

    title: {
        fontSize: 18,
        marginLeft: 10
    },

    iconArrow: {
        alignSelf: 'flex-end',
        left: '400%'
    },

    money: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },

    creditLimit: {
        fontSize: 16,
    },

    buttonContainer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: '#e7e7e4',
        padding: 10
    },

    button: {
        alignSelf: 'center',
        width: 250,
        alignItems: 'center'
    },

    textButton: {
        fontSize: 16,
        color: '#5bb332',
        marginTop: 5,
        fontWeight: 'bold'
    }


});

export default styles;
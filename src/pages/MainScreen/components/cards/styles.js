import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        marginTop: 5,
        padding: 20
    },  

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#282828',
        marginBottom: 10
    },

    cards: {
        backgroundColor: '#519f2d',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        flexDirection: 'row',
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    cardName: {
        color: 'white',
        fontSize: 17
    },

    numberCard: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    },

    icon: {
        color: '#004d00'
    },

    onlineCard: {
        borderWidth: 2,
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#5bb332',
        backgroundColor: 'white'
    },

    onlineCardText: {
        fontSize: 18,
        color: '#5bb332',
        textAlign: 'center'
    },

    addCard: {
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: 'grey',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5
    },

    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5bb332',
        marginRight: 10
    },

    iconAddCard: {
        color: '#5bb332',
    },

    textAddCard: {
        color: 'grey'
    }
});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
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
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    icon: {
        color: '#5bb332',
    },

    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5bb332',
    },

    description: {
        color: 'grey',
        flexShrink: 10,
        marginLeft: 10,
        top: 5
    }
});

export default styles;
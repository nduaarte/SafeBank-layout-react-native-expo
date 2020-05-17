import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        marginTop: 5,
        padding: 20,
    },

    title: {
        color: '#282828',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    square: {
        backgroundColor: 'white',
        padding: 23,
        borderRadius: 5,
        shadowOffset: {width: 5, height: 5},
        shadowColor: 'grey',
        shadowOpacity: 0.3,
    },

    alignItens: {
        flexDirection: 'row',
    },

    subtitle: {
        fontSize: 16,
        top: 2
    },

    icon: {
        color: '#5bb332',
        marginRight: 10
    },

    description: {
        color: 'grey',
        marginTop: 5
    },

    iconArrow: {
        left: '550%'
    }
});

export default styles;
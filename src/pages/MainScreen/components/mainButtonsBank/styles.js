import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {

    },

    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowOffset:{width: 3, height: 3},
        marginBottom: 30
    },

    button: {
        padding: 30,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    icon: {
        color: '#5bb332'
    },

    text: {
        marginTop: 10,
        color: 'grey'
    },

    textLarger: {
        color: 'grey',
        flexShrink: 0.3
    },

    largerButtonContainer: {
        alignItems: 'center',
    },

    largerButton: {
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        marginHorizontal: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowOffset:{width: 5, height: 5},
        borderRadius: 5
    },

    iconContainer: {
        width: 36,
        height: 36,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: '#5bb332',
        marginRight: 15,
    },


});

export default styles;
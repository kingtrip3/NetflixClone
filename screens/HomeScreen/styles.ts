import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 40,
        paddingBottom: 10,
    },
    image: {
        width: 150,
        height: 250,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }

});

export default styles;
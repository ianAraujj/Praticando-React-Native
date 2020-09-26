import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    textoPadrao:{
        color: '#797D7F',
    },
    separador:{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    formulario:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    botao:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E74C3C',
        marginLeft: 5
    },
    TextInput:{
        flex: 1,
        backgroundColor: '#D7DBDD',
        paddingLeft: 8,
    },
    card:{
        paddingBottom: 4,
        backgroundColor: '#E5E7E9'
    },
    imagemAvatar:{
        backgroundColor: '#F4F6F6',
        height: 64,
        width: 64,
        borderRadius: 32
    }
});


import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
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
    botaoCard:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E74C3C',
        marginTop: 4,
        borderRadius: 8
    },
    TextInput:{
        flex: 1,
        backgroundColor: '#D7DBDD',
        paddingLeft: 8,
    },
    listaUsuario:{
        flex: 1,
        paddingTop: 15,
    },
    card:{
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#F2F3F4',
        borderRadius: 6
    },
    cardPerfil:{
        backgroundColor: '#F2F3F4',
        borderRadius: 6,
        marginTop: 35
    },
    containerImagemAvatar:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagemAvatar:{
        backgroundColor: '#F4F6F6',
        height: 64,
        width: 64,
        borderRadius: 32
    },
    imagemPerfil:{
        backgroundColor: '#F4F6F6',
        height: 100,
        width: 100,
        borderRadius: 50
    },
    containerNome:{
        marginTop: 50
    },
    nomeUsuario:{
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bioUsuario: {
        fontSize: 15,
        color: '#ABB2B9',
        textAlign: 'center'
    }
});


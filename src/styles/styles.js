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
        borderRadius: 6,
    },
    cardRepo:{
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#D7DBDD',
        borderRadius: 6,
        flexDirection: 'row'
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
    info:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 15,
        marginRight: 10
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
    imagemOwner:{
        backgroundColor: '#F4F6F6',
        height: 48,
        width: 48,
        borderRadius: 24,
        marginLeft: 20
    },
    containerNome:{
        marginTop: 50
    },
    nomeUsuario:{
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    nomeRepo:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
    },
    nomeOwner:{
        fontSize: 13,
        color: '#ABB2B9',
        textAlign: 'center'
    },
    bioUsuario: {
        fontSize: 15,
        color: '#ABB2B9',
        textAlign: 'center'
    }
});


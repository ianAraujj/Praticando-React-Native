import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from '../styles/styles';
import api from '../services/api'

export default class Main extends Component {


    state = {
        usuarios: [],
        novoUsuario: "",
        loading: false
    }

    async componentDidMount() {
        const usuarios = await AsyncStorage.getItem('usuarios');

        if (usuarios) {
            this.setState({ usuarios: JSON.parse(usuarios) });
        }

    }

    async store(usuarios) {
        AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    /*
    componentDidUpdate(_, prevState){

        const usuarios = this.state.usuarios;

        if(prevState.usuarios != usuarios){
            AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    }
    */


    buscarUsuario = (usuario) => {
        const usuarios = this.state.usuarios;
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].login == usuario) {
                return usuarios[i];
            }
        }
        return false;
    }

    adicionarNovoUsuario = async () => {
        const novoUsuario = this.state.novoUsuario;

        try {

            this.setState({ loading: true });

            const response = await api.get(`/users/${novoUsuario}`);

            const usuario = response.data.login;

            if (this.buscarUsuario(usuario) != false) {
                alert(usuario + ' já foi adicionado !');
            } else {
                const data = {
                    login: usuario,
                    name: response.data.name,
                    avatar: response.data.avatar_url,
                    bio: response.data.bio
                }

                var usuarios = this.state.usuarios;
                usuarios.push(data);
                this.setState({
                    usuarios: usuarios,
                    newUser: "",
                });

                this.store(usuarios);
            }
        }
        catch (e) {
            //alert(e);
            alert("Usuário Não Encontrado");
        }

        this.setState({ loading: false })
        Keyboard.dismiss();

    }

    verPerfil = (item) => {
        this.props.navigation.navigate('Perfil', { item });
    }



    render() {

        const { loading } = this.state;

        const renderItemUser = ({ item }) => (
            <View style={styles.card}>
                <View style={styles.containerImagemAvatar}>
                    <Image source={{ uri: item.avatar }} style={styles.imagemAvatar} />
                </View>
                <Text style={styles.nomeUsuario}>{item.name}</Text>
                <Text style={styles.bioUsuario} numberOfLines={2} >{item.bio}</Text>
                <RectButton style={styles.botaoCard} onPress={() => this.verPerfil(item)}>
                    <View style={{ paddingVertical: 2 }}>
                        <Text style={{ color: '#FDFEFE' }}>VER PERFIL</Text>
                    </View>
                </RectButton>
                <View style={styles.separador} />
            </View>
        );

        return (
            <View style={styles.container}>
                <View style={styles.formulario}>
                    <View style={styles.TextInput}>
                        <TextInput placeholder="Adicionar usuário"
                            style={{ height: Platform.OS == 'android' ? 40 : 20 }}
                            autoCorrect={false} autoCapitalize="none"
                            onChangeText={(text) => this.setState({ novoUsuario: text })}
                            returnKeyType="send"
                            onSubmitEditing={this.adicionarNovoUsuario} />
                    </View>

                    <RectButton style={styles.botao} onPress={() => this.adicionarNovoUsuario()}>
                        {loading ? (<ActivityIndicator color='#FDFEFE' style={{ marginHorizontal: 5 }} />) :
                            (<Icon name="add" size={30} color="#FDFEFE" />)}
                    </RectButton>
                </View>
                <View style={styles.separador} />
                <FlatList data={this.state.usuarios} keyExtractor={(item) => item.login}
                    renderItem={renderItemUser} style={styles.listaUsuario} />
            </View >
        );
    }
}


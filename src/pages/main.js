import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';

import { styles } from '../styles/styles';
import api from '../services/api'

export default class Main extends Component {

    state = {
        usuarios: [],
        novoUsuario: "",
    }

    adicionarNovoUsuario = async () => {
        const novoUsuario = this.state.novoUsuario;

        try {

            const response = await api.get(`/users/${novoUsuario}`);
            const status = response.status;

            const data = {
                login: response.data.login,
                name: response.data.name,
                avatar: response.data.avatar_url,
                bio: response.data.bio
            }

            var usuarios = this.state.usuarios;
            usuarios.push(data);
            this.setState({
                usuarios: usuarios,
                newUser: ""
            });

            alert(data.bio);

        }
        catch (e) {
            alert("Usuário Não Encontrado");
        }

        Keyboard.dismiss();

    }



    render() {

        const renderItemUser = ({ item }) => (
            <View style={styles.card}>
                <Image source={{uri: item.avatar}} style={styles.imagemAvatar}/>
                <Text>Nome: {item.name}</Text>
                <Text>Bio: {item.bio}</Text>
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
                        <Icon name="add" size={30} color="#FDFEFE" />
                    </RectButton>
                </View>
                <View style={styles.separador} />
                <FlatList data={this.state.usuarios} keyExtractor={(item) => item.login}
                    renderItem={renderItemUser} />
            </View >
        );
    }
}

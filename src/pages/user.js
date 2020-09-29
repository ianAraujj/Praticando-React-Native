import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import { styles } from '../styles/styles';
import api from '../services/api';

export default class User extends Component {


    state = {
        usuario: [],
        favoritos: [],
    }


    async componentDidMount() {
        const usuario = this.props.route.params.item;
        this.setState({ usuario: usuario });


        try {

            const response = await api.get(`/users/${usuario.login}/starred`);

            const favoritos = []

            for (var i = 0; i < response.data.length; i++) {
                favoritos.push({
                    id: response.data[i].id,
                    repo: response.data[i].name,
                    avatar_owner: response.data[i].owner.avatar_url,
                    name: response.data[i].owner.login
                })
            }

            this.setState({ favoritos: favoritos });

        } catch (error) {
            console.log(error);
            alert('Não foi possível carregar os Favoritos');
        }
    }


    render() {

        const favoritos = this.state.favoritos;

        const renderFavoritos = ({ item }) => {
            return (
                <View style={{marginBottom: 10}}>
                    <View style={styles.cardRepo}>
                        <Image source={{ uri: item.avatar_owner }} style={styles.imagemOwner} />
                        <View style={styles.info}>
                            <Text style={styles.nomeRepo}>{item.repo}</Text>
                            <Text style={styles.nomeOwner}>{item.name}</Text>
                        </View>
                    </View>
                </View>
            );
        };

        return (
            <View style={styles.container}>
                <View style={styles.cardPerfil}>

                    <View style={styles.containerImagemAvatar}>
                        <Image source={{ uri: this.state.usuario.avatar }} style={styles.imagemPerfil} />
                    </View>

                    <View style={styles.containerNome}>
                        <Text style={styles.nomeUsuario}>{this.state.usuario.name}</Text>
                    </View>

                    <Text style={styles.bioUsuario}>{this.state.usuario.bio}</Text>

                    <View style={styles.separador} />

                    <FlatList data={favoritos} keyExtractor={(item) => String(item.id)}
                        renderItem={renderFavoritos} contentContainerStyle={{ paddingBottom: 150}}/>

                </View>
            </View>
        )
    };

}

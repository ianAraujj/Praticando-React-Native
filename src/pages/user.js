import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from '../styles/styles';

export default function User(props) {

    const usuario = props.route.params.item;

    return (

        <View style={styles.container}>
            <View style={styles.cardPerfil}>

                <View style={styles.containerImagemAvatar}>
                    <Image source={{ uri: usuario.avatar }} style={styles.imagemPerfil} />
                </View>

                <View style={styles.containerNome}>
                    <Text style={styles.nomeUsuario}>{usuario.name}</Text>
                </View>

                <Text style={styles.bioUsuario}>{usuario.bio}</Text>

                <View style={styles.separador} />

            </View>
        </View>
    )

}

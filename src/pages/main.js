import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { styles } from '../styles/styles';

function alerta(text) {
    alert("Voce digitou: " + text);
}

const Main = () => {
    return (
        <View style={styles.container}>
            <View>
                <TextInput placeholder="Adicionar" style={{ height: Platform.OS == 'android' ? 40 : 20 }}/>
            </View>
        </View>
    );
}

export default Main;
import React, { useState } from 'react'
import { StyleSheet, Text, Button, Image, View, Switch } from 'react-native'
import * as Speech from 'expo-speech'
import { Linking } from 'expo'

function Dice({ navigation }) {
    const user = navigation.getParam('user')

    const [img, setImg] = useState(require('../images/1.png'))

    const [n, setN] = useState('')

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const openInstagram = () => {
        Linking.openURL('instagram://user?username=brdnsousa')
    }

    const playDice = () => {
        var max = 7;
        var min = 1;
        min = Math.ceil(min)
        max = Math.floor(max)

        var numero_aleatorio = Math.floor(Math.random() * (max - min)) + 1

        setN(`O dado é o ${numero_aleatorio}`)

        Speech.speak(`O dado é o ${numero_aleatorio}`)
        if (!isEnabled)
            Speech.stop()
        switch (numero_aleatorio) {
            case 1:
                setImg(require('../images/1.png'))
                break;
            case 2:
                setImg(require('../images/2.png'))
                break;
            case 3:
                setImg(require('../images/3.png'))
                break;
            case 4:
                setImg(require('../images/4.png'))
                break;
            case 5:
                setImg(require('../images/5.png'))
                break;
            case 6:
                setImg(require('../images/6.png'))
                break;
            default:
                setImg(require('../images/2.png'))
                break;
        }
    }

    return (
        <>
            <View style={style.container_voice}>
                <Text style={{ right: 10 }}>Desativar/Ativar Voz</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={style.container}>
                <Text style={style.username}>Usuário {user}</Text>
                <Image style={style.dice} source={img} />
                <Text>{n}</Text>
                <Button
                    style={style.play_dice}
                    title="Lançar dado"
                    onPress={playDice}
                />
            </View>
            <Text style={{color: '#0431B4'}} onPress={openInstagram}>Feito por Brandon Sousa @brdnsousa</Text>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    username: {
        color: '#0B6138',
        height: 30,
        fontSize: 25,
        marginBottom: 8
    },
    play_dice: {
        top: 8,
    },
    dice: {
        width: 150,
        height: 150,
        marginBottom: 8
    },
    container_voice: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    }

})

export default Dice
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button
} from 'react-native'

import { Linking } from 'expo'

function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const openInstagram = () => {
        Linking.openURL('instagram://user?username=brdnsousa')
    }

    function signin() {
        if (user.length == '' || pass.length == '') {
            setError('Fields cannot be empty ')
        } else if (user != 'root' || user != 'root') {
            setError('Incorrect email/pass')
        } else {
            alert('olá ' + user)
            navigation.navigate('Dice', { user: user })
        }
    }

    return (
        <>
            <View style={style.loginForm}>
                <TextInput
                    style={style.input}
                    placeholder='Usuário root'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={user}
                    onChangeText={setUser} />
                <TextInput
                    style={style.input}
                    placeholder='Senha root'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={pass}
                    onChangeText={setPass} />
                <Button onPress={signin} title='Logar' />
            </View>
            <Text style={style.err}>{error}</Text>
            <Text style={{ color: '#0431B4' }} onPress={openInstagram}>Feito por Brandon Sousa @brdnsousa</Text>
        </>
    )
}

const style = StyleSheet.create({
    loginForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    input: {
        width: 250,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: '#FFFF',
        marginBottom: 15,
        marginHorizontal: 20,
        fontSize: 16
    },
    err: {
        height: 24,
        color: '#ff0000',
        left: 20

    }
})

export default Login
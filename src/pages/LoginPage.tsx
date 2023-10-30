import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const LoginPage = (props: any) => {

    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('****');

    const handleSubmit = () => {
        console.log('Uha Still work to do...', email, password);
    };
    
    const navHandler = () => {
        props.navigation.navigate("Counter");
    }

    return (
        <View style={style.mainContainer}>
            <Text>Hello TO THE NEW PAGE</Text>
            <View>
                <TextInput style={style.inputStyle} value={email} onChangeText={setEmail}></TextInput>
            </View>
            <View>
                <TextInput style={style.inputStyle} value={password} onChangeText={setPassword}></TextInput>
            </View>
            <View>
                <Button title='Submit' onPress={handleSubmit}></Button>
            </View>

            <View>
                <Button title='BACK' onPress={navHandler}></Button>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterContainer: {
        fontWeight: "700",
        color: "red",
        height: 40,
        margin: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonLeft: {
        height: 30,
        width: 60,
    },
    buttonRight: {
        height: 30,
        width: 60,
    },
    inputStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200, 
        borderRadius: 4
    }

})


export default LoginPage;
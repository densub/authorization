import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(){
        const { email, password } = this.state;
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCreds) => {
            const user = userCreds.user
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder='email'
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />
                <Button 
                    title='Sign In'
                    onPress={() => this.onSignUp()}
                />
            </View>
        )
    }
}


export default Login

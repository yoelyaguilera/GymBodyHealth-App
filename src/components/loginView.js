import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet } from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base'

class loginView extends Component {
    constructor(props) {
        super(props);
        this.state = { User: '',
                       Pasword: ''};
    }

     render() {
        return(
            <View style={styles.container}>
                <Image style={styles.base} source={require('../images/login.jpg')} />
                    <Text style={styles.tittle}>Gym Body Health</Text>
                    <TextInput style={styles.text} onChangeText={(User) => this.setState({User})} value={this.state.User} 
                               placeholder="Nombre de Usuario"/>
                    <TextInput style={styles.text} onChangeText={(Pasword) => this.setState({Pasword})} value={this.state.Pasword} 
                               placeholder="Contraseña" secureTextEntry={true} />
                <View style={styles.next}>
                    <Footer>
                        <FooterTab>
                            <Button onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Text>Registrarse</Text>
                            </Button>
                            <Button onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name="arrow-forward" />
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'black',
    },
    base:{
        width: '100%',
        height: '100%', 
        flex: 1, 
        position: 'absolute'
    },
    tittle:{
        marginTop:'27%',
        fontSize:30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '30%'
    },
    text:{
        height: 40,
        width: '60%',
    },
    next: {
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end'
    },
})

module.exports = loginView;
import React, {Component} from 'react';
import {View, Text, Alert, TextInput, Image, StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Root } from 'native-base'

class signInView extends Component {
    constructor(props) {
        super(props);
        this.state = { Name: '',
                       Surname: '',
                       idUser:'',
                       User: '',
                       Password: '' };
    }
    render (){
        return(
            <View style={styles.container}>
                <Image style={styles.base} source={require('../images/signIn.jpg')} />
                    <Text style={styles.tittle}>Gym Body Health</Text>
                    <TextInput style={styles.text} onChangeText={(Name) => this.setState({Name})} value={this.state.Name}
                               placeholder="Nombre"/>
                    <TextInput style={styles.text} onChangeText={(Surname) => this.setState({Surname})} value={this.state.Surname}
                               placeholder="Apellido"/>
                    <TextInput style={styles.text} onChangeText={(idUser) => this.setState({idUser})} value={this.state.idUser}
                               placeholder="Cedula"/>
                    <TextInput style={styles.text} onChangeText={(User) => this.setState({User})} value={this.state.User}
                               placeholder="Nombre de Usuario"/>
                    <TextInput style={styles.text} onChangeText={(Password) => this.setState({Password})} value={this.state.Password}
                               placeholder="Contraseña"/>
                <View style={styles.next}>
                    <Footer>
                        <FooterTab>
                            <Button>
                                <Icon name="arrow-back" onPress={() => this.props.navigation.navigate('Login')}/>
                            </Button>
                            <Button>
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
        marginBottom: '20%'
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

module.exports = signInView;

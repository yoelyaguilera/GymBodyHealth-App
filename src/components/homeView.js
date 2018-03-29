import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet } from 'react-native';
import {Container, List, Drawer, ListItem, Switch, Card, Content, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab} from 'native-base';
import SideBar from './menuView.js';

class loginView extends Component {
    constructor(props) {
        super(props);
        this.state = { User: '',
                       Pasword: ''};
    }

    closeDrawer() {
        this._drawer._root.close()
    }

    openDrawer() {
        this._drawer._root.open()
    }

     render() {
        return(
            <Drawer ref={(ref) => { this._drawer = ref; }}
                    content={<SideBar navigator={this._navigator} />}
                    onClose={() => this.closeDrawer()} >

                    <Container>
                        <Header>
                            <Left>
                                <Button transparent onPress={() => this.openDrawer()}>
                                    <Icon name='menu'/>
                                </Button>
                            </Left>
                            <Body>
                                <Title> Header </Title>
                            </Body>
                        </Header>

                        <Content>
                        </Content>

                    </Container>
            </Drawer>
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
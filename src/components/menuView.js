import React from 'react';
import {Text, View} from 'react-native';
import {Container, Drawer, Root, List, ListItem, Switch, Card, Content, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab} from 'native-base';

export default class SideBar extends React.Component{
	render(){
		return(
			<Content style={{backgroundColor: '#fff'}}>
				 <List>
            		<ListItem icon>
              			<Left>
                			<Icon name='plane'/>
              			</Left>
              			<Body>
                			<Text> Thumbnail</Text>
              			</Body>
              			<Right>
                			<Switch value={false}/>
              			</Right>
            		</ListItem>
            		<ListItem icon>
              			<Left>
                			<Icon name='wifi'/>
             			</Left>
              			<Body>
                			<Text> Multiple FABs </Text>
              			</Body>
              			<Right>
                			<Text>geekyant</Text>
                			<Icon name='arrow-forward'/>
              			</Right>
            		</ListItem>
            		<ListItem icon>
              			<Left>
                			<Icon name='bluetooth'/>
              			</Left>
              			<Body>
               		 		<Text> bluetooth </Text>
              			</Body>
              			<Right>
                			<Text> On </Text>
                			<Icon name='arrow-forward'/>
              			</Right>
            		</ListItem>
          		</List>
			</Content>
		)
	};
}

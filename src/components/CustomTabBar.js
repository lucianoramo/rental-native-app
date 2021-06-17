import React from 'react';
import styled from 'styled-components/native'


const TabArea = styled.View`
    height: 60px;
    background-color: #fff;
    flex-direction: row;
`
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;

`
const TabItemImage = styled.Image`
    
`
const TabItemText = styled.Text`
    font-size: 10px;
    padding-top: 5px;

`


export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }
    return (
        <TabArea>
            <TabItem
                onPress={() => goTo('Alugar')}
                style={{ color: state.index === 0 ? "#ffcc00" : "black" }}
            >
                <TabItemImage source={require('../../assets/briefcase.png')} />
                <TabItemText>Alugar</TabItemText>
            </TabItem>
            <TabItem 
                onPress={() => goTo('Reservas')}
                style={{ opacity: state.index === 0 ? 0.5 : 1 }}
            >
                <TabItemImage source={require('../../assets/file-document.png')} />
                <TabItemText>Reservas</TabItemText>
            </TabItem>
            <TabItem 
                onPress={() => goTo('Lojas')}
                style={{ opacity: state.index === 0 ? 0.5 : 1 }}
            >
                <TabItemImage source={require('../../assets/shopping-cart.png')} />
                <TabItemText>Lojas</TabItemText>
            </TabItem>
            <TabItem 
                onPress={() => goTo('Fidelidade')}
                style={{ opacity: state.index === 0 ? 0.5 : 1 }}
            >
                <TabItemImage source={require('../../assets/template.png')} />
                <TabItemText>Fidelidade</TabItemText>
            </TabItem>
            <TabItem 
                onPress={() => goTo('Perfil')}
                style={{ opacity: state.index === 0 ? 0.5 : 1 }}
            >
                <TabItemImage source={require('../../assets/profile.png')} />
                <TabItemText>Perfil</TabItemText>
            </TabItem>
        </TabArea>
    );

};

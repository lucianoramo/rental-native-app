import React from 'react';
import { Container } from './styles'
import { Text } from 'react-native'

import {
    HeaderArea,
    HeaderItem,
    HeaderItemImage,
    CentralImage,
    Card,
    InputArea,
    Input
} from './styles'





export default () => {
    return (
        <Container>
            <HeaderArea>
                <HeaderItem>
                    <HeaderItemImage source={require('../../../assets/briefcase.png')} />
                </HeaderItem>
                <HeaderItem>
                    <HeaderItemImage source={require('../../../assets/profile.png')} />

                </HeaderItem>
                <HeaderItem>
                    <HeaderItemImage source={require('../../../assets/shopping-cart.png')} />

                </HeaderItem>
                <HeaderItem>
                    <HeaderItemImage source={require('../../../assets/briefcase.png')} />

                </HeaderItem>
            </HeaderArea>
            <CentralImage source={require('../../../assets/movida-white.png')} />
            <Card>
                <Text>Alugue os melhores veículos, perto de vc</Text>
                <InputArea>
                    <Input placeholder="Escolha o local"></Input>
                </InputArea>
            </Card>
        </Container>
    )

};

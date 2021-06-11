import React from 'react';
import { Container } from './styles'
import { Text } from 'react-native'

import { HeaderArea } from './styles'
import { HeaderItem } from './styles'
import { CentralImage } from './styles'
import { Card } from './styles'




export default () => {
    return (
        <Container>
            <HeaderArea>
                <HeaderItem></HeaderItem>
                <HeaderItem></HeaderItem>
                <HeaderItem></HeaderItem>
                <HeaderItem></HeaderItem>
            </HeaderArea>
            <CentralImage source={require('../../../assets/movida-white.png')} />
            <Card>
                <Text>Alugue os melhores veículos, perto de vc</Text>
            </Card>
        </Container>
    )

};

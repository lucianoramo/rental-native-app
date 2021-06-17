import React, { useState, useEffect } from 'react';
import { Container, Scroller } from './styles'
import { Text } from 'react-native'

import CardLojas from '../../components/CardLojas'

export default () => {
    return (
        <Container>
            <Scroller>
                <Text>Lojas Próximas</Text>
                <CardLojas></CardLojas>
                <CardLojas></CardLojas>
                <CardLojas></CardLojas>
                <CardLojas></CardLojas>
                <CardLojas></CardLojas>
                <CardLojas></CardLojas>
                <CardLojas></CardLojas>
                <CardLojas></CardLojas>
            </Scroller>
        </Container>

    )

};

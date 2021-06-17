import React from 'react';
import styled from 'styled-components/native'


const CardArea = styled.View`
    padding: 20px 0
    width:95%
    height: 120px
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between
    margin-bottom: 15px
`
const IconArea = styled.View`
    
    align-items: center
    justify-content: center

`
const Icon = styled.Image`
    margin: 0 20px
    width:20px
    height: 20px
`
const DataArea = styled.View`
    justify-content: space-between
    
`
const StoreName = styled.Text`
    font-size: 14px
    line-height: 24px
    font-weight: 700
    text-transform: uppercase
`
const StoreLocation = styled.Text`
    font-size: 13px
    line-height: 20px
    font-weight: 300
    text-transform: uppercase

`
const StoreDummy = styled.Text`
    font-size: 12px
    font-weight: 700
    line-height: 24px
    
`

const StoreHours = styled.Text`
    font-size: 12px
    font-weight: 300

`

const KmArea = styled.View`
    flex: 1
    margin-right: 20px
    justify-content: space-between
    align-items: flex-end

`
const IconTop = styled.View`
    width: 12px
    height: 12px
    background-color: #ff0000
    border-radius: 6px

`
const Distance = styled.Text`
    font-size: 12px
    font-weight: 500
`

export default () => {
    return (
        <CardArea>
            <IconArea>
                <Icon source={require('../../assets/briefcase.png')}/>
            </IconArea>
            <DataArea>
                <StoreName>Brasilia Aeroporto</StoreName>
                <StoreLocation>Brasilia / DF</StoreLocation>
                <StoreDummy>Horário de Funcionamento</StoreDummy>
                <StoreHours>Segunda a Sexta - 07:00 as 19:00</StoreHours>     
            </DataArea>
            <KmArea>
                <IconTop source={require('../../assets/briefcase.png')}></IconTop>
                <Distance>8,33km</Distance>
            </KmArea>
        </CardArea>
    );

};

import React from 'react' 
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #f17d3b;
    align-items: center;
    height: 100%

`
export const HeaderArea = styled.View`
    margin-top: 60px
    width: 100%
    height: 120px
    justify-content: space-around
    flex-direction: row
`

export const HeaderItem = styled.View`
    height: 80px
    width: 80px
    border-radius: 40px
    background-color: #fff
   
`

export const CentralImage = styled.Image`
    margin-top: 100px
    margin-bottom: 50px
    width: 180px

`
export const Card = styled.View`
    width:80%
    height: 100px
    background-color: #fafafa
    padding: 20px

`
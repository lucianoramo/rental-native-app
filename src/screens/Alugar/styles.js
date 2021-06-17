import React from 'react'
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #f17d3b;
    align-items: center;
    height: 100%

`
export const HeaderArea = styled.View`
    margin-top: 30px
    width: 100%
    height: 120px
    justify-content: space-around
    flex-direction: row
`

export const HeaderItem = styled.View`
    height: 64px
    width: 64px
    padding:20px
    border-radius: 40px
    background-color: #fff
   justify-content:center
   align-items: center
   box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
`
export const HeaderItemImage = styled.Image`
    
    width:100%
    height:100%

`

export const CentralImage = styled.Image`
    margin-top: 80px
    margin-bottom: 50px
    width: 180px

`
export const Card = styled.View`
    width:90%
    
    background-color: #fafafa
    padding: 20px
    border-radius: 10px

`
export const InputArea = styled.View`
    margin-top: 10px
    flex-direction: row
    padding-left: 20px
    align-items: center
    height: 30px
    background-color: #f0f0f0
    border-radius: 30px

`
export const Input = styled.TextInput`
    font-size: 14px
    color: #050505


`
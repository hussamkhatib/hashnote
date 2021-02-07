import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: grid; 
grid-template-columns: 40vw 1fr;`
const Title = styled.h1`
background:#3b3b3b;
color:#aca7cb;`

const Header = () => {
    return (
        <Wrapper>
            <Title>Note Making App</Title>            
        </Wrapper>
    )
}

export default Header

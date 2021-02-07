import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
font-weight:600;`
const Content = styled.span`
font-size:.8em;
hyphens:auto;`

const File = ({ Heading,WriteUp,I }) => {
    return (
        <>
            <Title>{Heading}</Title>
            <Content>{
                WriteUp[I].map(i=>( 
                       i.children[0].text
                    )
                )
            }</Content>
        </>
    )
}

export default File

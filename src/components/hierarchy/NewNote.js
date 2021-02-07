import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
border: none;
background: #232323;
color :#aca7cb;
width: 100%;
padding: 1em;`

const NewNote = ({ createNewNote }) => {
    return (
        <>
            <Button onClick={createNewNote}>
                New Note 
            </Button>
        </>
    )
}

export default NewNote

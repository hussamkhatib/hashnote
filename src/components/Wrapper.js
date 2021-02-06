import React,{ useState } from 'react'
import styled from 'styled-components'
import TextEditor from './Editor/TextEditor'
import Nav from './Nav'

const Container = styled.div`
display: grid;
width:100vw;
grid-template-columns: 40vw 1fr;
`

const Wrapper = () => {

    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ])
    const [notes,setNotes] = useState(Array.from({length: 5}).map(()=> value))
    const [activeNote,setActiveNote] = useState([0,0])  
    
    const handleChange3 = value => setValue(value)
    function setActiveIndex (index) {setActiveNote([index,0])}

return (
        <Container>
            <Nav Active={activeNote[0]} setActiveIndex={setActiveIndex}/>
            <TextEditor value={value} handleChange3={handleChange3}/>            
        </Container>
    )
}

export default Wrapper

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
    const [notes,setNotes] = useState(Array.from({length:3}).map(()=> [value,value]))
    const [activeNote,setActiveNote] = useState([0,0])  

    function handleChange3 (value) { 
        setValue(value)
        setNotes([notes[activeNote[0]][activeNote[1]]=value,...notes].slice(1)) 
    }

    function setFolderIndex (index) {
        setActiveNote([index,activeNote[1]])
        setValue(notes[index][activeNote[1]])
    }
    function setFileIndex(index){
        setActiveNote([activeNote[0],index])
        setValue(notes[activeNote[0]][index])
    }


    return (
        <Container>
            <Nav 
                FolderActive={activeNote[0]} 
                FileActive={activeNote[1]} 
                setFolderIndex={setFolderIndex}
                setFileIndex={setFileIndex}
                FolderName = 'Folder'
                Heading= 'Title'
                WriteUp = {notes[activeNote[0]]}
            />
            <TextEditor 
                value={value} 
                handleChange3={handleChange3}/>            
        </Container>
    )
}

export default Wrapper

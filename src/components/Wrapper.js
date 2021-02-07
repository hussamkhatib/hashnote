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
    const [textAreaVal,setTextAreaVal] = useState('.')
    const [titleArr,setTitleArr] = useState(Array.from({length:3}).map(()=>['Untitled','Untitled']))
    const [foldersNames,setFolderNames] = useState(['general','school','meeting'])

    function handleChange2(e){
        const cur = e.target.value
        if(cur === '' ){
            setTextAreaVal('.') 
            setTitleArr([titleArr[activeNote[0]][activeNote[1]] ='Untitled',...titleArr].slice(1))
        }else{    
            setTextAreaVal(cur)  
            setTitleArr([titleArr[activeNote[0]][activeNote[1]] = cur,...titleArr].slice(1))
        }
        }
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
        setActiveNote([index,0])
        setValue(notes[index][0])
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
                FolderName = {foldersNames}
                Heading= {titleArr[activeNote[0]]}
                WriteUp = {notes[activeNote[0]]}
            />
            <TextEditor
                textAreaVal={textAreaVal}
                handleChange2={handleChange2} 
                value={value}
                handleChange3={handleChange3}/>            
        </Container>
    )
}

export default Wrapper

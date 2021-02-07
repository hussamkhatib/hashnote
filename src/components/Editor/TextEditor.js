import React, { useRef,useMemo,useCallback } from 'react'
import { createEditor,Transforms } from 'slate'
import { Slate, Editable,withReact,ReactEditor } from 'slate-react'
import styled from 'styled-components'

const Wrapper = styled.div`
`
const TextAreaTypography = styled.div`
line-height: 40px;
width:100%;
font-size: 30px;
font-weight: 600;
font-family: Source Sans Pro,-apple-system,system-ui,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
padding-bottom: 4px;`

const TArea = styled(TextAreaTypography)`
border: none;
resize: none;
overflow: hidden;
position: absolute;
height: 100%;
}`
const TADiv = styled.div`
position: relative;
`
const TextAreaContent = styled(TextAreaTypography)`
visibility: hidden;
white-space: pre-wrap;
word-break: break-word;
overflow-wrap: break-word;`

const TextEditor = (props) => {
  const inputEl = useRef(null);
  function handleChange (e) {
    e.key === 'Enter' && ReactEditor.focus(editor);
    
    if((e.key === 'ArrowDown' || e.key === 'ArrowRight') && e.target.selectionEnd === e.target.value.length){
      e.preventDefault(); 
      ReactEditor.focus(editor); 
  }
}
   
 
    const editor = useMemo(() => withReact(createEditor()), [])
  
    const renderElement = useCallback(props => {
      switch (props.element.type) {
        case 'code':
          return <CodeElement {...props} />
        default:
          return <DefaultElement {...props} />
      }
    }, [])
    return (
      <Wrapper>
      <TextAreaWrapper
        textAreaVal={props.textAreaVal}>
        <TArea 
          ref={inputEl} 
          as='textarea' 
          value={props.textAreaBox} 
          placeholder='Title' 
          onKeyDown={handleChange} 
          onKeyUp={props.handleChange2}
          onChange={props.handleChange5}
          />
      </TextAreaWrapper>
      <Slate editor={editor} value={props.value} onChange={props.handleChange3}>
        <Editable
          renderElement={renderElement}
          onKeyDown={event => {
          
            if (event.key === '&') {
              event.preventDefault()
              editor.deleteFragment()
            }
            if (event.key === '`' && event.ctrlKey) {
              event.preventDefault()
              Transforms.delete(
                editor,
                {reverse: true , distance : 4}
                )
            }
          }}
          onKeyUp = {event =>{
            let cur = editor.selection.anchor
            if ((event.key === 'ArrowUp' || event.key === 'ArrowLeft' )&& cur.offset === 0 && cur.path[0] === 0){
              inputEl.current.focus();
          }
          }}
        />
      </Slate>
      </Wrapper>
    )
    }            

export default TextEditor

const CodeElement = props => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }
  
const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}
const TextAreaWrapper = props => {
  return (
    <TADiv>       
          {props.children}
          <TextAreaContent>{props.textAreaVal}</TextAreaContent>
    </TADiv>
  )
}
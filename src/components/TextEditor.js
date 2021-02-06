import React, { useEffect, useMemo, useState,useCallback } from 'react'
import { createEditor,Transforms,Editor } from 'slate'
import { Slate, Editable,withReact } from 'slate-react'

const TextEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ])
  
    const renderElement = useCallback(props => {
      switch (props.element.type) {
        case 'code':
          return <CodeElement {...props} />
        default:
          return <DefaultElement {...props} />
      }
    }, [])
  
    

    return (
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable
          renderElement={renderElement}
          onKeyDown={event => {
            //console.log(editor.children[editor.selection.anchor.path[0]])
      
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
            let temp = editor.selection.anchor.path[0]
            console.log(editor.children[temp].children[0].text)
          }}
        />
      </Slate>
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
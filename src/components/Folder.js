import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
        padding: 1em;
        text-align: center;
        border: 3px solid orangered;
        ${(props) =>
            props.Active
            ?  `
                background: : white;
                color: dodgerblue;
            `
            : `
                background: dodgerblue;
                color: white;
            `
            }
    `;

const Folder = ({index,Active,setActiveIndex}) => {
    
    return (
        <Wrapper Active={index === Active}  onClick={()=>setActiveIndex(index)}>
           {index} 
        </Wrapper>
    )
}

export default Folder

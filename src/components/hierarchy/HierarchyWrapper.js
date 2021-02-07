import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
        padding: 1em;
        border: 3px solid orangered;
        overflow-wrap: break-word;
        height: ${props => props.Height};
        padding: ${props => props.Padding};    
        ${props => 
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

const HierarchyWrapper = (props) => {
    const { index,Active,setActiveIndex,Height,Padding } = props
    return (
        <Wrapper 
            Height = {Height}
            Padding = {Padding}
            Active={index === Active}  
            onClick={()=>setActiveIndex(index)}>
            {props.children} 
        </Wrapper>
    )
}

export default HierarchyWrapper

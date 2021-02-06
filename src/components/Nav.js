import React from 'react'
import styled from 'styled-components'
import Folder from './Folder'

const NavBar = styled.nav`
border-right: 3px solid black;
height: 100vh;
display: flex;
`
const Flex = styled.div`
flex: 1;`

const Nav = ({ Active,setActiveIndex }) => {
    return (
        <NavBar>
            <Flex>
            {Array.from({length: 5}).map((item,index) => (
                <Folder
                    setActiveIndex={setActiveIndex} 
                    Active ={Active}
                    index={index} 
                    key={index}/>
            )
            )}
            </Flex>
            <Flex />   
        </NavBar>
    )
}

export default Nav

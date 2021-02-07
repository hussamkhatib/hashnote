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

const Nav = ({ FolderActive,FileActive,setFolderIndex,setFileIndex }) => {
    return (
        <NavBar>
            <Flex>
            {Array.from({length: 3}).map((item,index) => (
                <Folder
                    setActiveIndex={setFolderIndex} 
                    Active ={FolderActive}
                    index={index} 
                    key={index}/>
            )
            )}
            </Flex>
            <Flex >
            {Array.from({length: 2}).map((item,index) => (
                <Folder
                    setActiveIndex={setFileIndex} 
                    Active ={FileActive}
                    index={index} 
                    key={index}/>
            )
            )}
            </Flex>   
        </NavBar>
    )
}

export default Nav

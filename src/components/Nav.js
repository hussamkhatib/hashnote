import React from 'react'
import styled from 'styled-components'

import HierarchyWrapper from './hierarchy/HierarchyWrapper'
import File from './hierarchy/File'
import Folder from './hierarchy/Folder'
import NewNote from './hierarchy/NewNote'

const NavBar = styled.nav`
border-right: 3px solid black;
display: flex;
background:#3b3b3b;
`
const Flex = styled.div`
flex: 1;`

const Nav = ({ FolderActive
            ,FileActive
            ,setFolderIndex
            ,setFileIndex
            ,Heading
            ,WriteUp
            ,FolderName
            ,createNewNote
            ,FolderLen
            ,FileLen }) => {
    return (
        <NavBar>
            <Flex>
            {Array.from({length: FolderLen}).map((item,index) => (
                <HierarchyWrapper
                    Height = '30px'
                    Padding= '0px'
                    setActiveIndex={setFolderIndex} 
                    Active ={FolderActive}
                    index={index} 
                    key={index}>
                    <Folder 
                        I={index} 
                        FolderName={FolderName}
                        Folder={true}/>
                </HierarchyWrapper>        
            )
            )}
            </Flex>
            <Flex >
                <NewNote 
                    createNewNote={createNewNote}/>
            {Array.from({length: FileLen}).map((item,index) => (
                <HierarchyWrapper
                    Height = '100px'
                    Padding = '1em'
                    setActiveIndex={setFileIndex} 
                    Active ={FileActive}
                    index={index} 
                    key={index}>
                    <File
                        I={index} 
                        Heading={Heading}
                        WriteUp={WriteUp}
                    />
                </HierarchyWrapper>
            )
            )}
            </Flex>   
        </NavBar>
    )
}

export default Nav

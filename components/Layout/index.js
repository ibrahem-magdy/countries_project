import React from 'react'
import Header from "../Header"
import Footer from "../Footer"
import { Flex, Spacer,Box } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
export default function Layout({children}) {
    return (
        <div>
            <Flex direction="column" minH="100vh">
                <Header/>
                <Container maxW="container.xl" centerContent >
                    <Box minH="70vh" w="100%">
                        {children}
                    </Box>
                </Container>
                <Spacer/>
                <Footer/>
            </Flex>
        </div>
    )
}
import React from 'react'
import {Flex,Heading} from "@chakra-ui/react"
export default function NoData() {
    return (
        <div>
             <Flex w="100%" h="70vh" justifyContent="center" alignItems="center">
                <Heading as="h3" textAlign="center">Sorry We have An error in our service please come in another time!!!</Heading>
            </Flex>
        </div>
    )
}

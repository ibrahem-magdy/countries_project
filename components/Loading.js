import React from 'react'
import styles from "../styles/Loading.module.css"
import {Text,Flex,Box,Spinner} from "@chakra-ui/react"

export default function Loading() {
    return (
        <Flex className={styles.Loading} justifyContent="center" alignItems="center" transition=".3s">
            <Flex alignItems="center" justifyContent="center" direction="column" className={styles.loader}>
                <Spinner size="xl" color="white" m="5px auto"/>
                <Text color="white" fontWeight="bold" fontSize="25px">Loading</Text>
            </Flex>
        </Flex>
    )
}

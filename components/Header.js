import React,{useState} from 'react'
import { Container,IconButton,InputGroup,Input,InputRightElement} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import styles from "../styles/Header.module.css"
import Link from "next/link"
export default function Header() {
    const [value,setValue] = useState("egypt")
    const name=value.to
    console.log(name)
    return (
        <div className={styles.Nav}>
            <Container maxW="container.xl">
                <div className={styles.con_nav}>
                    <Link href="/">home</Link>
                    {/* <InputGroup width="40%" m="auto">
                        <Input type="text" placeholder="phone number"/>
                        <InputRightElement width="4.5rem">
                            <Link href={`/countries/[id]`} as={`countries/${name}`}>
                                <IconButton aria-label="Search database"  icon={<SearchIcon/>}/>
                            </Link>
                        </InputRightElement>
                    </InputGroup> */}
                </div>
            </Container>
        </div>
    )
}

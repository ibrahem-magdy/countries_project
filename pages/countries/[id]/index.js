import React from 'react'
import {useState,useEffect} from "react"
import { useQuery, gql } from "@apollo/client";
import styles from "../../../styles/Home.module.css";
import {useRouter} from "next/router"
import Loading from "../../../components/Loading"
import {Box,Text,Flex,Spacer,Heading,Image,AspectRatio} from "@chakra-ui/react"
import NoData from "../../../components/NoData"
export default function Country() {
// const [id,setId]=useState("")
const {query} =useRouter()
const{id}=query
// console.log(typeof id)
    const QUERY = gql`
    query Countries ($id: String!){
      Country (name:$id) {
        name
        capital
        flag{
          svgFile
        }
        officialLanguages{
          name
        }
        currencies{
          name
        }
      }
    }
  `;
    const { data, loading, error } = useQuery(QUERY,{variables:{id}});
    if (loading) {
      return <Loading/>;
    }
    if (error) {
      console.error(error);
      return (
       <NoData/>
      )
    }
    console.log(data)
    const countries=data.Country

    return (
      <Box h="100%" w="100%">
        <Flex w="100%" minHeight="100%" alignItems="center" justifyContent="center">
          {countries?.map((country) => (
              <Box 
              _hover={{
                boxShadow:"0 0 5px 9px #c8c5c594"
              }}
              transition=".3s"
              boxShadow="0 0px 6px 3px #e4e4e4"
              w={["100%","100%","50%"]}
              padding="5px"
              borderRadius="3px"
              mt="30px"
            >
                <AspectRatio w="100%" h="250px" ratio={1}
                _before={
                  {
                    padding:"0"
                  }
                }
                >
                  <Image src={country.flag.svgFile} alt="" objectFit="cover"/>
                </AspectRatio>
                <Box className={styles.con_text}>
                  <Box className={styles.name}>
                      <Heading as="h4" color="#535353" mt="10px" mb="10px"fontSize="20px" textAlign="center">{country.name}</Heading>
                  </Box>
                  <Flex className={styles.con_language} mb="10px"> 
                    <Text className={styles.label} color="#049189" fontWeight="bold">Language</Text>
                    <Spacer/>
                    <Text fontWeight="bold" color="#366600">{country.officialLanguages[0].name}</Text>
                  </Flex>
                  <Flex className={styles.con_currency} mb="10px">
                    <Text className={styles.label} color="#049189" fontWeight="bold">Currency</Text>
                    <Spacer/>
                    <Text fontWeight="bold" color="#366600">{country.currencies[0].name}</Text>
                  </Flex>
                  <Flex className={styles.con_currency} mb="10px">
                    <Text className={styles.label} color="#049189" fontWeight="bold">Capital</Text>
                    <Spacer/>
                    <Text fontWeight="bold" color="#366600">{country.capital}</Text>
                  </Flex>
                </Box>
            </Box>
          ))}
        </Flex>
 
      </Box>
    );
  }
  // export function getServerSideProps(context){
  //     return{
  //         props:{params:context.params}
  //     }
  // }
import { useQuery, gql } from "@apollo/client";
import {useState,useEffect} from "react"
import styles from "../styles/Home.module.css";
import Link from "next/link"
import Head from 'next/head'
import Loading from "../components/Loading"
import { SimpleGrid,AspectRatio,Flex,Spacer,Box,Heading,Text,Button} from "@chakra-ui/react"
import NoData from "../components/NoData"
import { useToast } from "@chakra-ui/react"
import ToastExample from "../components/Toast"
export default function Home() {
  const [page,setPage]=useState(8)
  const [start,setStart]=useState(0)
  const toast = useToast()
  const QUERY = gql`
  query Countries{
      Country {
        name
        flag{
          svgFile
        }
        # check the docs for more info
      }
    }
`;
const { data, loading, error } = useQuery(QUERY);
if (loading) {
  return <Loading/>;
}

if (error) {
  console.error(error);
  return <NoData/>;
}
  var countries =data.Country.slice(start, page)
  // useEffect(() => {
  //   countries= data.Country.slice(start, page);
  // }, [page,start])
  // console.log(page,start)
  const Next=()=>{
    if(page >= data.Country.length){
      return false
    }
    else{
      setPage(prevPage=>prevPage + 8)
      setStart(prevStart=>prevStart + 8)
    }

    console.log(countries)
  }
  const Prev=()=>{
    if(start <= 0){
        toast({
          position: "bottom-right",
          title: "It is first page there is no last pages",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
    }
    else{
      setPage(prevPage=>prevPage - 8)
      setStart(prevStart=>prevStart - 8)
      console.log(start)
    }
  }

  return (
    <>
    <SimpleGrid columns={[1,2,3,4]} spacingX="20px" spacingY="20px" pt="30px" pb="30"  className={styles.con_cart}>
      {
        countries.map(country=>{
          return(
            <Link href={`/countries/[id]`} as={`countries/${country.name}`} key={country.name}>
              <Box className={styles.cart}
                _hover={{
                  boxShadow:"0 0 5px 9px #c8c5c594"
                }}
                transition=".3s"
                boxShadow="0 0px 6px 3px #e4e4e4"
              >
                  <div className={styles.con_img}>
                    <img src={country.flag.svgFile} alt=""/>
                  </div>
                  <Box className={styles.con_text}>
                    <Box className={styles.name}>
                        <Heading as="h4" color="#535353" mt="10px" mb="10px"fontSize="20px">{country.name}</Heading>
                    </Box>
                    {/* <Flex className={styles.con_language} mb="10px"> 
                      <Text className={styles.label} color="#049189" fontWeight="bold">Language</Text>
                      <Spacer/>
                      <Text fontWeight="bold" color="#366600">{country.languages[0].name}</Text>
                    </Flex>
                    <Flex className={styles.con_currency} mb="10px">
                      <Text className={styles.label} color="#049189" fontWeight="bold">Currency</Text>
                      <Spacer/>
                      <Text fontWeight="bold" color="#366600">{country.currencies[0].name}</Text>
                    </Flex> */}
                  </Box>
              </Box>
            </Link>
          )
        })
      }
    </SimpleGrid>
    <Flex justifyContent="center">
      <Button onClick={Prev} m="15px" w="60px" h="60px" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">prev</Button>
      <Button onClick={Next} m="15px" w="60px" h="60px" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">next</Button>
    </Flex>
    </>
  )
}

import { useToast } from "@chakra-ui/react"
export default function ToastExample() {
    const toast = useToast()
    return (
          toast({
            title: "It is first page there is no last pages",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
    )
  }
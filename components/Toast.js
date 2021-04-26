import { useToast } from "@chakra-ui/react"
function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: "It is first page there is no last pages",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      ></Button>

    )
  }
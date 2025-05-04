import { useColorModeValue } from '../components/ui/color-mode'
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useStore } from '../store/Store'
import { Toaster,toaster } from '../components/ui/toaster'


const CreatePage = () => {

    <Toaster />
    const bg = useColorModeValue("gray.200", "black")
    const [newStore, setNewStore] = useState({
        name: "",
        image: ""
    })

    const { createStore } = useStore();

    const handleAddStore = async () => {
        const { success, message } = await createStore(newStore);
        if (success) {
            toaster.success({
                title: "Update successful",
                description: "File saved successfully to the server",
                action: {
                  label: "Close",
                },
              })
              setNewStore({ name: "", image: "" })
        }
        else {
            toaster.error({
                title: "Update failed",
                description: message,
                action: {
                  label: "Close",
                },
              })
        }
    }

    return (
        <Box>
            <Container p={4} bg={bg} boxShadow='md'>
                <VStack>
                    <Heading as='h1' size='2xl' textAlign='center' mb='8'>
                        Create a new Store
                    </Heading>
                    <Box bg={useColorModeValue("white", "gray.800")} p={4} borderRadius='md' boxShadow='lg' width={{ base: "100%", md: "80%", lg: "60%", xl: "50%" }}>
                        <VStack spacing='4'>
                            <Input
                                placeholder='Store Name'
                                name='name'
                                value={newStore.name}
                                onChange={(e) => setNewStore({ ...newStore, name: e.target.value })} />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                value={newStore.image}
                                onChange={(e) => setNewStore({ ...newStore, image: e.target.value })} />
                            <Button bg='blue.500' onClick={handleAddStore} w={'full'}>Add Store</Button>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default CreatePage
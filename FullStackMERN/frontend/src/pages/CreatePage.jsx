import { useColorModeValue } from '../components/ui/color-mode'
import { Box, Button, Container, Flex, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useStore } from '../store/Store'
import { Toaster } from '@/components/ui/toaster'


const CreatePage = () => {

    const bg = useColorModeValue("gray.200", "black")
    const [newStore, setNewStore] = useState({
        name: "",
        image: ""
    })

    const {createStore} = useStore();

    const handleAddStore = async() => {
        const {success, message} = await createStore(newStore);
        
    }

    return (
        <Box>
            <Container maxW='container.sm' p={4} bg={bg} boxShadow='md'>
                <VStack>
                    <Heading as='h1' size='2xl' textAlign='center' mb='8'>
                        Create a new Store
                    </Heading>
                    <Box bg={useColorModeValue("white", "gray.800")} p={4} borderRadius='md' boxShadow='lg' w='100%'>
                        <VStack spacing='4'>
                            <Input 
                            placeholder='Store Name' 
                            name='name' 
                            value={newStore.name} 
                            onChange={(e)=>setNewStore({...newStore, name: e.target.value})}/>
                            <Input 
                            placeholder='Image URL' 
                            name='image' 
                            value={newStore.image} 
                            onChange={(e)=>setNewStore({...newStore, image: e.target.value})}/>
                            <Button bg='blue.500' onClick={handleAddStore} w={'full'}>Add Store</Button>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default CreatePage
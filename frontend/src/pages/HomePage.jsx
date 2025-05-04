import { useStore } from '../store/Store'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Store from '../components/Store'

const HomePage = () => {
  const stores = useStore((state) => state.stores);
  const fetchStores = useStore((state) => state.fetchStores);

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);
  console.log("stores", stores)

  return (
    <Container w={['100%', '100%', '80%']} p='8'>
      <VStack align={'center'}>
        <Text fontSize={['xl', '1xl', '2xl']} fontWeight='bold' textAlign={'center'}>
          Welcome to ShopScore. Create your shop and get reviews from your customers.
          <br />
        </Text>

        {Array.isArray(stores) && stores.length > 0 && (
          <SimpleGrid columns={[1, 2, 3]} mt={8} w="100%" p={4} gap={4}>
            {stores.map((store) => (
              <Store key={store._id} store={store} />
            ))}
          </SimpleGrid>
        )}


        {stores && stores.length === 0 && (
          <Text fontSize={['lg', 'xl', '2xl']} fontWeight='bold' textAlign={'center'} color={'gray.500'} mt={4}>
            No Stores to display 😒
            <Link to='/create'>
              <Text as={'span'} color={'blue.500'} fontWeight='bold' _hover={{ textDecoration: "underline" }}> Create a Store</Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage
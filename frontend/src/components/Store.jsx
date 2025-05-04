import { Box, Button, Card, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { MdDelete } from 'react-icons/md';
import { useColorModeValue } from './ui/color-mode';
import { FaEdit } from 'react-icons/fa';
import { useStore } from '../store/Store';
import { toaster } from '../components/ui/toaster'

const Store = (store) => {
  const img = store.store.image;
  console.log(img)
  const storeName = store.store.name;
  const storeId = store.store._id;
  const textColor = useColorModeValue('gray.800', 'gray.200')
  const bgColor = useColorModeValue('gray.300', 'gray.800')

  const { deleteStore } = useStore();
  const handleDeleteStore = async (sid) => {
    console.log(sid);
    const { success, message } = await deleteStore(sid);
    console.log(success)
    if (success) {
      toaster.success({
        title: "Update successful",
        description: "File deleted successfully from the server",
        action: {
          label: "Close",
        },
      })
    }
    else {
      toaster.error({
        title: "Deletion failed",
        description: message,
        action: {
          label: "Close",
        },
      })
    }
    
  }

  return (
    <Card.Root maxW="sm" overflow="hidden" bg={bgColor} borderRadius={20} _hover={{ transitionDuration: "slowest", transitionProperty: "all", transform: "scale(1.02)", boxShadow: "lg" }}>
      <Image
        src={img}
        alt={store.store.name}
      />
      <Card.Body gap="2">
        <Card.Title color={textColor}>{storeName}</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <IconButton>
          <FaEdit />
        </IconButton>
        <IconButton colorPalette={"red"} onClick={() => handleDeleteStore(storeId)}>
          <MdDelete />
        </IconButton>
      </Card.Footer>
    </Card.Root>
  )
}

export default Store;
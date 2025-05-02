import { Button, Container, Flex, HStack, IconButton, Link, Text } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from "../components/ui/color-mode"
import React from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { LuMoon, LuSun } from 'react-icons/lu';

// import { CiLight } from "react-icons/ci";
// import { MdDarkMode } from "react-icons/md";


const NavBar = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    const bg = useColorModeValue("blue.400", "blue.900")
    return (
        <Container bg={bg} maxW="100%" p={4}>
            <Flex justifyContent="space-around" alignItems="center">
                <Text fontSize="2xl" color="white" fontWeight="bold">
                    <Link textStyle="3xl" href='/'>ShopScore</Link>
                </Text>
                <HStack spacing={{ base: "8", md: "4" }}>
                    <Link href='/' color="white" fontSize="3xl" fontWeight="bold"><IoMdHome /></Link>
                    <Link href='/create' color="white" fontSize="3xl" fontWeight="bold"><FaRegSquarePlus/></Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <LuMoon color="white" fontSize="3xl"/> : <LuSun color="black" fontSize="3xl"/>}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default NavBar
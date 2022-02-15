/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Divider,
  Flex,
  Img,
  Stack,
  Text,
  
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Heading } from "../../components/Heading";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Rocket NFTs</title>
      </Head>
      <Flex
        w="100%"
        my={["4", "4", "8"]}
        maxW={1280}
        mx="auto"
        d="flex"
        p="2"
        px={["4", "4", "6"]}
        height="100vh"
        alignItems="center"
      >
        <Box>
          <Text fontSize={["2xl", "3xl"]} fontWeight="bold">
            10K<Text as="span">+</Text>            
          </Text>
          <Text as="span" fontSize="md" color="gray.500">Artes</Text>
          <Text fontSize={["2xl", "3xl"]} fontWeight="bold">
            200<Text as="span">+</Text>           
          </Text>
          <Text as="span" fontSize="md" color="gray.500">Vendas</Text>
          <Text fontSize={["2xl", "3xl"]} fontWeight="bold">
            20
          </Text>
          <Text as="span" fontSize="md" color="gray.500">Artistas</Text>          
        </Box>
        <Divider
          orientation="vertical"
          bg="gray.200"
          borderRadius="0"
          border="1px solid"
          borderColor="gray.500"
          ml="4"
          mr="4"
        />        
        <Flex d="block">
        <Heading title="Sobre"/>
          <Stack mb="8" flexDirection={["column", "row"]}>
            <Box>
              <Text as="p" fontSize={["sm", "md"]} fontWeight="light" mb="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id
                <Text color="red.500">potenti diam</Text> et cras odio viverra.
                Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
                semper.
              </Text>
              <Link href="/">
                <Text as="a" cursor="pointer" color="red.500">
                  Ler mais...
                </Text>
              </Link>
            </Box>
            <Box>
              <Text as="p" fontSize={["sm", "md"]} fontWeight="light" mb="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id
                <Text color="red.500">potenti diam</Text> et cras odio viverra.
                Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
                semper.
              </Text>
              <Link href="/">
                <Text as="a" cursor="pointer" color="red.500">
                  Ler mais...
                </Text>
              </Link>
            </Box>
          </Stack>

          <Img src="/images/banner.svg" />
        </Flex>
      </Flex>
    </>
  );
}

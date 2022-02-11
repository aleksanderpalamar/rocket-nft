/* eslint-disable @next/next/link-passhref */
import { Box, Divider, Flex, Heading, HStack, Img, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

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
        <Box as="aside">
          <Text fontSize="5xl" fontWeight="bold" display="flex">
            10k
            <Text fontSize="4xl" fontWeight="medium">
              +
            </Text>
          </Text>
          <Text fontSize="2xl" fontWeight="medium" color="gray.500">
            Colecionáveis
          </Text>
          <Text fontSize="5xl" fontWeight="bold" display="flex">
            200k
            <Text fontSize="4xl" fontWeight="medium">
              +
            </Text>
          </Text>
          <Text fontSize="2xl" fontWeight="medium" color="gray.500">
            Vendas
          </Text>
          <Text fontSize="5xl" fontWeight="bold">
            20
          </Text>
          <Text fontSize="2xl" fontWeight="medium" color="gray.500">
            Artistas
          </Text>
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
          <HStack mb="8">
          <Box>
            <Text as="p" fontSize="lg" fontWeight="light" mb="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id
              <Text color="red.500">potenti diam</Text> et cras odio viverra.
              Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
            </Text>
            <Link href="/">
              <Text as="a" cursor="pointer" color="red.500">
                Ler mais...
              </Text>
            </Link>
          </Box>
          <Box>
            <Text as="p" fontSize="lg" fontWeight="light" mb="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id
              <Text color="red.500">potenti diam</Text> et cras odio viverra.
              Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
            </Text>
            <Link href="/">
              <Text as="a" cursor="pointer" color="red.500">
                Ler mais...
              </Text>
            </Link>
          </Box>
          </HStack>
          <Img src="/images/banner.svg" />
        </Flex>        
      </Flex>
    </>
  );
}

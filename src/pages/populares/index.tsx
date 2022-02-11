/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Divider,
  Flex,
  Img,
  Stack,
  Text,
  Heading as ChakraHeading,
} from "@chakra-ui/react";
import Head from "next/head";

import { Heading } from "../../components/Heading";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Populares da semana | Rocket NFTs</title>
      </Head>
      <Heading title="Populares" description="da semana" />
      <Flex
        w="100%"
        maxW={1280}
        d="flex"
        px={["4", "4", "8"]}
        py={["4", "4", "8"]}
        mx="auto"
        justifyContent="center"
        height="100vh"
        alignItems="center"
      >
        <Stack spacing="4" mt="8">
          <Box>
            <ChakraHeading
              as="h2"
              fontSize={["1xl", "2xl"]}
              fontWeight="medium"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              Astronauta 1
              <Img src="/images/Arrow.svg" w={["10", "12"]} />
            </ChakraHeading>
            <Box
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              mb="4"
            >
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="gray.500"
              >
                Artista 1{" "}
              </Text>
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                1.50 RKT
              </Text>
            </Box>
            <Img src="./images/Gallery/galeria-1.svg" />
          </Box>
          <Stack spacing="4" mt="8">
            <ChakraHeading
              as="h2"
              fontSize={["1xl", "2xl"]}
              fontWeight="medium"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              Astronauta 2
              <Img src="/images/Arrow.svg" w={["10", "12"]} />
            </ChakraHeading>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="gray.500"
              >
                Artista 2{" "}
              </Text>
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                3.75 RKT
              </Text>
            </Box>
            <Img src="./images/Gallery/galeria-2.svg" />
          </Stack>
        </Stack>
        <Divider
          orientation="vertical"
          bg="gray.200"
          borderRadius="0"
          border="1px solid"
          borderColor="gray.500"
          ml="4"
          mr="4"
        />
        <Stack spacing="4" mt="8">
          <Box>
            <ChakraHeading
              as="h2"
              fontSize={["1xl", "2xl"]}
              fontWeight="medium"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              Astronauta 3
              <Img src="/images/Arrow.svg" w={["10", "12"]} />
            </ChakraHeading>
            <Box
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              mb="4"
            >
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="gray.500"
              >
                Artista 3{" "}
              </Text>
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                2.0 RKT
              </Text>
            </Box>
            <Img src="./images/Gallery/galeria-3.svg" />
          </Box>
          <Stack spacing="4" mt="8">
            <ChakraHeading
              as="h2"
              fontSize={["1xl", "2xl"]}
              fontWeight="medium"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              Astronauta 4
              <Img src="/images/Arrow.svg" w={["10", "12"]} />
            </ChakraHeading>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="gray.500"
              >
                Artista 4{" "}
              </Text>
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                4.30 RKT
              </Text>
            </Box>
            <Img src="./images/Gallery/galeria-4.svg" />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

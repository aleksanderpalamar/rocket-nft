/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Flex,  
  FormControl,
  VStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";

import { Heading } from "../../components/Heading";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { Textarea } from "../../components/Form/Textarea";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato | Rocket NFTs</title>
      </Head>
      <Heading title="Contato" />
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
        <Box flex="1" bg="gray.800" p={["4", "4", "6"]}>
          <FormControl>
            <VStack spacing={["6", "8"]} mb="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input name="name" color="gray.100" label="Nome completo" />
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  color="gray.100"
                  placeholder="example@example.com"
                />
              </SimpleGrid>
            </VStack>
            <Select 
              name="select"
              label="Escolha uma das opções"              
              color="gray.300"              
              options={[                
                " - Selecione - ",
                "",
              ]}
            />
            <Textarea
              name="message"
              label="Mensagem"
              placeholder="Digite sua mensagem aqui"
            />
          </FormControl>
          <Button
            as="a"            
            size="lg"            
            color="gray.900"                       
            mt="4"
          >
            Enviar
          </Button>
        </Box>
      </Flex>
    </>
  );
}

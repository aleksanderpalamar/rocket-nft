/* eslint-disable @next/next/link-passhref */
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";

import { Heading } from "../../components/Heading";

export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQs | Rocket NFTs</title>
      </Head>
      <Heading title="FAQ's " />
      <Flex
        w="100%"
        maxW={1280}
        d="flex"
        px={["4", "4", "8"]}
        py={["4", "4", "8"]}
        mx="auto"
        justifyContent="start"
        height="100vh"
        alignItems="start"
      >
        <Tabs align="start" variant="enclosed">
          <TabList>
            <Tab
              _selected={{
                color: "red.500",
              }}
              _hover={{
                color: "red.500",
              }}
            >
              O que é NFT?
            </Tab>
            <Tab
              _selected={{
                color: "red.500",
              }}
              _hover={{
                color: "red.500",
              }}
            >
              Como criar um NFT?
            </Tab>
            <Tab
              _selected={{
                color: "red.500",
              }}
              _hover={{
                color: "red.500",
              }}
            >
              Qual a relação entre criptomoedas e os NFTs?
            </Tab>

            <Tab
              _selected={{
                color: "red.500",
              }}
              _hover={{
                color: "red.500",
              }}
            >
              Como e onde comprar um NFT?
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                NFT é a sigla para non-fungible token, ou token não fungível, um
                ativo criado a partir da tecnologia blockchain que serve como
                identidade digital de um item. O NFT assegura a autenticidade
                daquele item, que é único. Ou seja, o ativo garante a posse de
                um bem exclusivo, que nenhuma outra pessoa tem. Para compreender
                melhor, imagine a famosa pintura Mona Lisa. A obra original,
                pintada por Leonardo da Vinci, encontra-se no Museu do Louvre,
                em Paris. Você pode comprar um poster com a imagem da “Gioconda”
                ou uma reprodução praticamente igual pintada a óleo, mas nenhuma
                dessas cópias chegará perto do valor da pintura original,
                tomando como exemplo o mundo da arte, o NFT pode servir para
                atestar a originalidade da obra digital.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Qualquer pessoa pode criar um NFT. E você pode criá-lo a partir
                de qualquer coisa. Tirou uma fotografia bonita de uma paisagem?
                Pode criar um NFT para atestar a originalidade do arquivo da
                imagem — para os mais velhos, seria o equivalente ao negativo da
                foto.
              </p>
              <p>
                O passo a passo básico para criar um token não fungível é o
                seguinte:{" "}
              </p>
              <p>
                <p>1. Escolha a plataforma (a mais popular é a Ethereum)</p>
                <p>
                  2. Configure sua carteira digital (a mais usada é a MetaMask)
                </p>
                <p>
                  3. Transfira dinheiro para essa carteira e pague o custo de
                  mineração (para poder criar a NFT).
                </p>
                <p>
                  4. Selecione a plataforma de marketplace para vender o NFT (a
                  mais usada é a OpenSea).{" "}
                </p>
                <p>5. Faça o upload do arquivo.</p>
                <p>6. Determine o preço do NFT (pode ser fixo ou por leilão)</p>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Assim como as criptomoedas, os NFTs existem dentro do universo
                do blockchain, um banco de dados público e imutável, em uma rede
                descentralizada com regras preestabelecidas. Além disso, os NFTs
                são negociados em criptomoedas. Isto é, para comprar esse tipo
                de ativo, você precisa antes adquirir uma moeda digital (as
                moedas aceitas variam de acordo com o marketplace).
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Por enquanto, comprar um NFT não é a coisa mais simples do
                mundo. Primeiro, você precisa de uma carteira digital de
                criptomoedas.
              </p>
              <p>
                A MetaMask é a mais usada e permite interagir com a blockchain
                Ethereum. Tendo saldo nessa carteira, basta acessar um
                marketplace especializado em operações de compra e venda de
                NFTs. O maior e mais popular é o OpenSea, uma plataforma
                americana criada em 2017. Lá, você navega por diversas coleções
                de NFTs, em categorias como arte, colecionáveis, nomes de
                domínios, música, fotografia e outros.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

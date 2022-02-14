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
              Qual a relação entre os games e os NFTs?
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
                O mercado dos games é talvez o mais promissor para a exploração
                dos NFTs, e aquele em que os ativos mais fazem sentido do ponto
                de vista prático. Estamos falando de uma opção de entretenimento
                que ocorre no ambiente virtual e que tem um enorme público ávido
                por exclusividade e diferenciação. Imagine ser o único jogador
                de um game super popular com determinado personagem ou
                equipamento. Isso pode representar uma vantagem competitiva no
                game e, mais do que isso, ser um imenso fator de diferenciação,
                porque nenhum outro jogador terá a feature que você adquiriu. A
                não ser que você venda o NFT. Afinal, depois de criado o NFT, o
                desenvolvedor não pode alterar suas características, o que o
                torna um item raro, com potencial de revenda. Ainda há desafios
                técnicos e de modelo de negócio para que isso seja difundido
                amplamente na indústria dos games, mas já há vários jogos feitos
                na blockchain em que os jogadores podem ganhar NFTs como
                premiação pelo seu desempenho.
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

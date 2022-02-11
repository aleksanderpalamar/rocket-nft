import { Text, Box, Img } from "@chakra-ui/react";

export function Banner() {
  return (
    <>
    <Text as="span" color="gray.300" fontSize={["md", "lg"]}>
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
          </Text>
          <Text as="h1" fontSize={["4xl", "5xl"]} fontWeight="bold">
            Descubra a verdadeira
            <Text as="span" fontWeight="bold">
              {" "}
              arte digital{" "}
            </Text>{" "}
            e o ecossistema
            <Text as="span" fontWeight="bold">
              {" "}
              colecione diversas
            </Text>
            <Text as="span" fontWeight="bold" color="red.800">
              {" "}
              NFTs
            </Text>
          </Text>
          <Box display="flex">
            <Img src="/images/Avatars_agrupado.svg" />
            <Text ml="4" p="4" fontWeight="bold">
              +10
              <Text fontWeight="thin">Artistas selecionados</Text>
            </Text>
          </Box>
    </>
  )
}
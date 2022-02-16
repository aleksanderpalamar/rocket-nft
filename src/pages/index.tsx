import { Box, Flex, Img,  Text } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { ImagesGallery } from "../components/ImagesGallery";
import { Banner } from "../components/Banner";
import { client, ssrCache } from "../lib/urql";
import { usePageQuery, PageDocument } from "../generated/graphql"

const Home: NextPage = () => {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "home"      
    }
  });

  return (
    <>
      <Head>
        <title>Rocket NFTs</title>
        <meta
          name="description"
          content="Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você."
        />
        <link rel="icon" href="/favicon.ico" />
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
        justifyContent="space-between"
      >
        <Box as="section">
          <Banner title={data?.page?.title} subtitle={data?.page?.subtitle}/>
          <ImagesGallery />
        </Box>
      </Flex>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: "home" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
};

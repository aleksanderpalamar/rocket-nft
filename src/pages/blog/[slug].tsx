import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostDocument, usePostQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

export default function Post({ slug }: any) {
  const [
    {
      data: { post },
    },
  ]: any = usePostQuery({
    variables: {
      slug,
    },
  });

  return (
    <Flex
      as="div"
      position="relative"
      display="block"
      pb="16"
      bg="gray.100"
      overflow="hidden"
    >
      <Img w="full" h="96" objectFit="cover" src={post.coverImage.url} />
      <Box as="div" position="relative" px={["6", "8"]} pt="16">
        <Box as="div" fontSize="lg" maxW="lg" mx="auto">
          <Text as="h1">
            <Text
              as="span"
              mt="2"
              d="block"
              textAlign="center"
              fontWeight="extrabold"
              color="gray.900"
              fontSize={["sm", "lg"]}
            >
              {post.title}
            </Text>
          </Text>
        </Box>
        <Container
          maxW='xl' 
          centerContent          
        >
          <Box            
            mt="6"
            p="4"
            maxW="3xl"
            mx="auto"
            color="gray.800"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />                    
        </Container>
      </Box>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  await client.query(PostDocument, { slug: params.slug }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params.slug,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};

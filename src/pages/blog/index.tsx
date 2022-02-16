import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Key } from "react";
import { BlogPost } from "../../components/BlogPost.tsx";
import {
  PageDocument,
  PostsDocument,
  usePageQuery,
  usePostsQuery,
} from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

export default function Blog() {
  const [
    {
      data: { posts },
    },
  ]: any = usePostsQuery();
  const [
    {
      data: { page },
    },
  ]: any = usePageQuery({
    variables: {
      slug: "blog",
    },
  });

  return (
    <Flex position="relative" bg="gray.100" pt="16" pb="20" px="4">
      <Box as="div" position="absolute" inset={0}>
        <Box as="div" bg="gray.100" h="1/3" w="2/3" />
      </Box>
      <Box as="div" position="relative" maxW="7xl" mx="auto">
        <Box as="div" textAlign="center">
          <Text
            as="h2"
            fontSize={["3xl", "4xl"]}
            fontWeight="extrabold"
            color="gray.800"
          >
            {page.title}
          </Text>
          <Text
            as="p"
            mt="3"
            maxW="2xl"
            mx="auto"
            fontSize={["sm", "md"]}
            color="gray.800"
          >
            {page.subtitle}
          </Text>
        </Box>
        <SimpleGrid mt="12" columns={[1, 2, 3]} spacing={[4, 8, 16]}>
          {posts.map((post: { slug: Key | null | undefined; title: any; excerpt: any; author: { name: any; picture: { url: any; }; }; coverImage: { url: any; }; publishedAt: string | number | Date; }) => (
            <BlogPost
              key={post.slug}
              post={{
                title: post.title,
                href: `/blog/${post.slug}`,
                description: post.excerpt,
                author: {
                  name: post.author.name,
                  imageUrl: post.author.picture.url,
                },
                imageUrl: post.coverImage.url,
                date: new Date(post.publishedAt).toDateString(),
              }}
            />
          ))}
        </SimpleGrid>        
      </Box>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await Promise.all([
    client.query(PostsDocument).toPromise(),
    client.query(PageDocument, { slug: "blog" }).toPromise(),
  ]);

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

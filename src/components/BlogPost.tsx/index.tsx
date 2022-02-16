import Link from "next/link";
import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";

type BlogPostProps = {
  post: {
    title: string;
    imageUrl: string;
    href: string;
    description: string;
    author: {
      name: string;
      imageUrl: string;
    };
    date: string;
  };
};

export function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <Flex
        as="div"
        key={post.title}
        d="flex"
        flexDirection="column"
        rounded="lg"
        boxShadow="lg"
        overflow="hidden"
      >
        <Box as="div" flexShrink={0}>
          <Img h="48" w="full" src={post.imageUrl} />
        </Box>
        <Box
          as="div"
          flex="1"
          p="6"
          d="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box as="div" flex="1">
            <Link href={post.href}>
              <a>
                <Text
                  as="p"
                  fontSize="2xl"
                  fontWeight="semibold"
                  color="gray.800"
                >
                  {post.title}
                </Text>
                <Text
                  as="p"
                  mt="3"
                  fontSize="md"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  {post.description}
                </Text>
              </a>
            </Link>
          </Box>
          <Box
            as="div"
            mt="6"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box as="div" flexShrink={0}>
              <Box as="span" color="gray.500" mr="2">
                {post.author.name}
              </Box>
              <Avatar
                as="span"
                h="10"
                w="10"
                name={post.author.name}
                src={post.author.imageUrl}
              />
            </Box>
            <Box as="div" ml="3">
              <Text as="p" fontSize="sm" fontWeight="medium" color="gray.500">
                {post.author.name}
              </Text>
              <Box as="div" fontSize="sm" fontWeight="medium" color="gray.500">{post.date}</Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

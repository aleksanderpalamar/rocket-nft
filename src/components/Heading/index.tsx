import { Heading as ChakraHeading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Heading({ title, description }: HeadingProps) {
  return (
    <ChakraHeading fontSize={["2xl", "3xl"]} fontWeight={["semibold", "bold"]} mt="4" textAlign="center">
      <Text fontWeight={["semibold", "bold"]} color="gray.100" fontSize={["large", "larger"]}>
        {title}
      </Text>
      <Text mt="4"  color="red.500">
        {description}
      </Text>
    </ChakraHeading>
  )
}
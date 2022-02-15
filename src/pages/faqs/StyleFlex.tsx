import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface StyleFlexProps {
  children?: ReactNode;
}

export function StyleFlex({ children }: StyleFlexProps) {
  return (
    <Flex
        w="100%"
        d="flex"
        maxW={1280}
        px={["4", "4", "8"]}
        py={["4", "4", "8"]}
        mx="auto"
        justifyContent="start"
        height="100vh"
        alignItems="start"
      >
        {children}
      </Flex>
  )
}
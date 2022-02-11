import { Box, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

export function Menu() {
  const isMobileVersion = useBreakpointValue({
    base: "sm",
    lg: "md",
  });
  return (
    <>
      {isMobileVersion && (
        <Box as="nav" m="auto" display="flex">
          <Box mr="4">
            <Link href="/comprarnft">
              <a>Comprar NFT</a>
            </Link>
          </Box>
          <Box mr="4">
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </Box>
          <Box mr="4">
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
}

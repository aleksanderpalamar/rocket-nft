import { Box, Button, Img, useBreakpointValue } from "@chakra-ui/react";

export function ButtonSignIn() {
  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box
        as="button"        
        color="red.700"
        fontSize={isMobileVersion ? "lg" : "xl"}
        fontWeight="semibold"
        letterSpacing="tight"
        w="64"
        px="6"
        p="2"
        aria-label="Conectar Carteira"
      >
        <Button color="gray.950">
          <Img src="/images/MetaMasklogo.svg" alt="MetaMask logo" />
          {isMobileVersion && "Conectar Carteira"}
        </Button>
      </Box>
    </>
  );
}

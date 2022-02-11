import { Text, useBreakpointValue } from "@chakra-ui/react";

export function Logo() {
  const isMobileVersion = useBreakpointValue(
    {
      base: "xs",
      lg: "lg",
    },
    "min-width: 280px",    
  );
  return (
    <>
      {isMobileVersion && (
        <Text
          fontSize={["1xl", "3xl"]}
          fontWeight={["semibold", "bold"]}
          letterSpacing="tight"
          w="64"
          color="gray.100"
          px="6"
          p="2"
          aria-label="Logo"
        >
          Rocket
          <Text as="span" ml="2" color="red.700">
            NFTs
          </Text>
        </Text>
      )}
    </>
  );
}

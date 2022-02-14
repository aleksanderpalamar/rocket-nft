import {
  Box,
  Button,
  Text,
  Flex,
  HStack,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../Form/Input";
import { Logo } from "../Header/Logo";
import { NavSection } from "../Sidebar/NavSection";

export function Footer() {
  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="footer"
      w="100%"
      h="100%"
      mx="auto"
      px="6"
      align="center"
      bg="gray.850"
      padding="4"
      justifyContent="space-between"
    >
      <Logo />
      <Box alignItems="center" justifyContent="center">
        <Text fontSize={["2xl", "3xl"]} fontWeight={["light", "medium"]}>Fique por dentro de</Text>
        <Text as="span" fontSize={["2xl", "3xl"]} fontWeight={["light", "medium"]} color="red.500">todas as novidades</Text>
        <Input
          placeholder="nft@example.com.br"
          name="email"
          type="email"
          borderRadius="none"
          border="none"
        />
        <Button
          color="gray.900"
          borderRadius="none"
          size="lg"
          _hover={{
            color: "red.500",
          }}
        >
          Enviar
        </Button>
      </Box>
      {isMobileVersion && (
        <>
          <Box mr="20">
            <NavSection title="EMPRESA">
              <Link href="/">Home</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/time">Time</Link>
              <Link href="/carreira">Carreira</Link>
            </NavSection>
          </Box>
          <Box mr="20">
            <NavSection title="MAPA">
              <Link href="/galeria">Galeria</Link>
              <Link href="/populares">Populares</Link>
              <Link href="/vendas">Vendas</Link>
              <Link href="/contato">Contato</Link>
            </NavSection>
          </Box>
          <Box mr="20">
            <NavSection title="LINKS">
              <Link href="/faqs">FAQs</Link>
              <Link href="/termos">Termos</Link>
              <Link href="/politica">Política</Link>
              <Link href="/ajuda">Ajuda</Link>
            </NavSection>
          </Box>
        </>
      )}
    </Flex>
  );
}

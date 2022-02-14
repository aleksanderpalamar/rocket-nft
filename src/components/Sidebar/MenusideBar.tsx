import { Box, HStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

import { FaHome, FaQuestion, FaReadme } from "react-icons/fa";
import Link from "next/link";

export function MenusideBar() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <HStack spacing="12" align="flex-start" display={["block", "flex"]}>
      {isDesktopVersion && (
        <>
          <Link href="/">
            <a>Comprar NFT</a>
          </Link>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
          <Link href="/faqs">
            <a>FAQs</a>
          </Link>
        </>
      )}

      {isMobileVersion && (
        <Stack>
          <NavSection title="EMPRESA">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
            <NavLink href="/time">Time</NavLink>
            <NavLink href="/carreira">Carreira</NavLink>
          </NavSection>
          <NavSection title="MAPA">
            <NavLink href="/galeria">Galeria</NavLink>
            <NavLink href="/populares">Populares</NavLink>
            <NavLink href="/vendas">Vendas</NavLink>
            <NavLink href="/contato">Contato</NavLink>
          </NavSection>
          <NavSection title="LINK">
            <NavLink href="/faqs">FAQs</NavLink>
            <NavLink href="/termos">Termos</NavLink>
            <NavLink href="/politica">Política</NavLink>
            <NavLink href="/ajuda">Ajuda</NavLink>
          </NavSection>
        </Stack>
      )}
    </HStack>
  );
}

import {
  IconButton,
  Flex,
  useBreakpointValue,  
  Icon,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Sidebar } from "../Sidebar";
import { ButtonSignIn } from "./ButtonSignIn";
import { useSidebarDrawer } from "../../context/SidebarDrawer";

import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        as="header"
        w="100%"
        mx="auto"
        px="6"
        h="20"
        align="center"
        bg="gray.850"
        justifyContent="space-around"
      >
        {!isWideVersion && (
          <IconButton
            aria-label="Open sidebar"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          ></IconButton>
        )}
        <Logo aria-label="Logo" />
        <Sidebar />
        <ButtonSignIn />
      </Flex>
    </>
  );
}

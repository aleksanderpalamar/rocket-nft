import {
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Icon,
  useBreakpointValue,  
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon?: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: false,
  });

  return (
    <ChakraLink href={href} display="flex" align="center" justify="center" {...rest}>
      {isMobileVersion && <Icon as={icon} fontSize={["2xl", "3xl"]} />}
      <Text
        ml={["1", "4"]}
        fontWeight={["medium", "medium"]}
        fontSize={["smaller", "md"]}
      >
        {children}
      </Text>
    </ChakraLink>
  );
}

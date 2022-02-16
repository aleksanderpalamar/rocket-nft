import { Text, Box, Img } from "@chakra-ui/react";

type BannerProps = {
  title?: string;
  subtitle?: string | null;
  content?: string | null;    
};

export function Banner({ title, subtitle, content }: BannerProps) {
  return (
    <>
      <Text as="span" color="gray.300" fontSize={["md", "lg"]}>
        {subtitle}
      </Text>
      <Text as="h1" fontSize={["4xl", "5xl"]} fontWeight="bold">
        {title}        
      </Text>
      <Box display="flex">
        <Img src="/images/Avatars_agrupado.svg" />
        <Text ml="4" p="4" fontWeight="bold">
          +10
          <Text fontWeight="thin">Artistas selecionados</Text>
        </Text>
        {content}        
      </Box>
    </>
  );
}
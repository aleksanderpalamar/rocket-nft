import { HStack, Img } from "@chakra-ui/react";

export function ImagesGallery() {
  return (
    <>
      <HStack mt="8" alignItems="center" justifyContent="space-around">
        <Img
          src="/images/Gallery/galeria-1.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
        <Img
          src="/images/Gallery/galeria-2.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
        <Img
          src="/images/Gallery/galeria-3.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
        <Img
          src="/images/Gallery/galeria-4.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
      </HStack>
      <HStack mt="8" alignItems="center" justifyContent="space-around">
        <Img
          src="/images/Gallery/galeria-5.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
        <Img
          src="/images/Gallery/galeria-6.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
        <Img
          src="/images/Gallery/galeria-7.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
        <Img
          src="/images/Gallery/galeria-8.svg"
          alt="Galeria de arte"
          w="20%"
          h="20%"
        />
      </HStack>
    </>
  );
}

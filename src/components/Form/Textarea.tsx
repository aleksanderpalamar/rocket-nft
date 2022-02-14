import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, label }) => {
  return (
    <>
      <FormControl>
        {!!label && <FormLabel mt="4" htmlFor={name}>{label}</FormLabel>}
        <ChakraTextarea
          name={name}
          id={name}
          focusBorderColor="red.500"
          bgColor="gray.950"
          variant="filled"
          _hover={{
            bgColor: "gray.950",
            borderColor: "red.400",
          }}
          size="lg"          
        />
      </FormControl>
    </>
  );
};

export const Textarea = forwardRef(TextareaBase);

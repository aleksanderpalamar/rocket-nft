/* eslint-disable react/jsx-key */
import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface SelectProps extends ChakraSelectProps {
  name: string;
  options?: string[];
  label?: string;
  error?: FieldError;
}

const SelectBase: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = ({
  name,
  options,
  label,
  error = null,
  ...rest
}) => {
  return (
    <>
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraSelect
          name={name}
          id={name}
          focusBorderColor="red.500"
          bgColor="gray.950"
          w={["100%", "48%"]}
          variant="filled"
          _hover={{
            bgColor: "gray.950",
            borderColor: "red.400",
          }}
          size="lg"
          {...rest}
        >
          {options && options.map((option) => <option>{option}</option>)}          
        </ChakraSelect>
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export const Select = forwardRef(SelectBase);

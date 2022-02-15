import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel as ChakraTabPanel,
  Flex,  
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface TabPanelProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function TabPanel({ title, description }: TabPanelProps) {  
  return (
    <Flex d="flex">
      <Tabs defaultIndex={1}  align="start" variant="enclosed">
      <TabList>
        <Tab
          fontSize={["sm", "md"]}
          _selected={{
            color: "red.500",
          }}
          _hover={{
            color: "red.500",
          }}
        >
          {title}
        </Tab>                        
      </TabList>
      <TabPanels>
        <ChakraTabPanel fontSize={["sm", "md"]}>
          <p>
            {description}            
          </p>
        </ChakraTabPanel>
      </TabPanels>
    </Tabs>
    </Flex>
  );
}

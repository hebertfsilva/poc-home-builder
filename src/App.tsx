import React from "react";

import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import { HomeConfig } from "./core/config/config";
import { BaseContainer } from "./ui/components/base-container";

import "./ui/styles/App.css";

function App() {
  const [config] = React.useState<any | null>(() => HomeConfig);

  if (!config) return <>oops</>;

  return (
    <Box
      as="main"
      width="100%"
      height="100%"
      overflowX="hidden"
      padding={Tokens.Space400}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <BaseContainer
        variant={config.containerType}
        blockType={config.containerBlockType}
        blockConfig={config.containerBlocksConfig}
      />
    </Box>
  );
}

export default App;

import React from "react";

import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import { HomeConfigBase } from "./core/types/home";
import { BaseContainer } from "./ui/components/base-container";

import "./ui/styles/App.css";

const fetchConfig = async () => {
  const config = await fetch("/config.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  if (config.ok) {
    return config.json() as Promise<HomeConfigBase>;
  }

  return null;
};

function App() {
  const [config, setConfig] = React.useState<HomeConfigBase | null>(null);

  React.useEffect(() => {
    if (config) return;
    fetchConfig().then((config) => setConfig(config));
  }, [config]);

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
      <BaseContainer variant={config.containerType} blockType={config.containerBlockType}  blockConfig={config.containerBlocksConfig}/>
    </Box>
  );
}

export default App;

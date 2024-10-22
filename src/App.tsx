import React from "react";

import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import "./ui/styles/App.css";

import { useQuery } from "@tanstack/react-query";

import { CellsStructure, Config } from "./core/types/config";
import { DynamicContainer } from "./ui/components/v2/dynamic-container";
import { HomeBlock } from "./ui/components/v2/home-block";
import { HomeCell } from "./ui/components/v2/home-cell";
import { WidgetWrapper } from "./ui/components/v2/widget-wrapper";

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

const fetchCellsStructure = async () => {
  const response = await fetch("/cellsStructure.json");
  if (response.ok) {
    return response.json();
  }
  return null;
};

function App() {
  const { data: config, isFetched } = useQuery({
    queryKey: ["config"],
    queryFn: fetchConfig,
    refetchInterval: 2000,
  });

  const { data: cellsStructure, isFetched: isCellsStructureFetched } = useQuery(
    {
      queryKey: ["cellsStructure"],
      queryFn: fetchCellsStructure,
      refetchInterval: 2000,
    }
  );

  if (!isFetched || !isCellsStructureFetched) return <>Aguarde..</>;

  return (
    <Box
      as="main"
      width="100%"
      height="100vh"
      overflowX="hidden"
      padding={Tokens.Space400}
      backgroundColor={Tokens.ColorBackgroundSecondary}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <DynamicContainer
        type={config.dynamicContainer.type}
        mainBlockSize={config.dynamicContainer.mainBlockSize}
        proportionSize={config.dynamicContainer.proportionSize}
      >
        {config.homeBlocks.map((block, index) => (
          <HomeBlock
            key={index}
            variant={block.variant}
            rows={block.rows}
            columns={block.columns}
          >
            {cellsStructure[block.variant].map((cell) => (
              <HomeCell proportions={cell.proportions}>
                <WidgetWrapper>{cell.content}</WidgetWrapper>
              </HomeCell>
            ))}
          </HomeBlock>
        ))}
      </DynamicContainer>
    </Box>
  );
}

export default App;

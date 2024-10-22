/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import "./ui/styles/App.css";

import { useQuery } from "@tanstack/react-query";

import { DynamicContainer } from "./ui/components/v2/dynamic-container";
import { HomeBlock } from "./ui/components/v2/home-block";
import { HomeCell } from "./ui/components/v2/home-cell";
import { WidgetWrapper } from "./ui/components/v2/widget-wrapper";

const fetchConfig = async (homeVersion: string) => {
  const config = await fetch(`/${homeVersion}/config.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  if (config.ok) {
    return config.json();
  }

  return null;
};

const fetchCellsStructure = async (homeVersion: string) => {
  const response = await fetch(`/${homeVersion}/cellsStructure.json`);
  if (response.ok) {
    return response.json() as Promise<any>;
  }
  return null;
};

function App() {
  const homeVersion = "secretaria";

  const { data: config, isFetched } = useQuery({
    queryKey: ["config"],
    queryFn: () => fetchConfig(homeVersion),
    refetchInterval: 2000,
  });

  const { data: cellsStructure, isFetched: isCellsStructureFetched } = useQuery(
    {
      queryKey: ["cellsStructure"],
      queryFn: () => fetchCellsStructure(homeVersion),
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
        gridGap={config.dynamicContainer.gridGap}
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

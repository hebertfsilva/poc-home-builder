/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, MenuMain, TopMenu } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import "./ui/styles/App.css";

import { useState } from "react";

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
    return config.json() as Promise<any>;
  }

  return null;
};

const dictionary = {
  conquista: "Conquista",
  spe: "SPE",
  default: "SAS",
  secretaria: "SAS Secretaria",
};

const fetchCellsStructure = async (homeVersion: string) => {
  const response = await fetch(`/${homeVersion}/cellsStructure.json`);
  if (response.ok) {
    return response.json() as Promise<any>;
  }
  return null;
};

function App() {
  const [homeVersion, setHomeVersion] = useState("default");

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

  const handleSelectHome = (home: string) => {
    setHomeVersion(home);
  };

  if (!isFetched || !isCellsStructureFetched) return <>Aguarde..</>;

  return (
    <>
      <TopMenu>
        <TopMenu.Brand
          alt="Alt"
          src="https://cdn.arcotech.io/iris-ds/brand/arcotech/primary.svg"
          triggerProps={{
            logo: "arcotech",
            text: "Arcotech",
          }}
          options={[
            {
              icon: "Airplay",
              label: "Conquista",
              isSelected: homeVersion === "conquista",
              onClick: () => handleSelectHome("conquista"),
            },
            {
              icon: "Airplay",
              label: "SPE",
              isSelected: homeVersion === "spe",
              onClick: () => handleSelectHome("spe"),
            },
            {
              icon: "Airplay",
              label: "SAS",
              isSelected: homeVersion === "default",
              onClick: () => handleSelectHome("default"),
            },
            {
              icon: "Airplay",
              label: "SAS Secretaria",
              isSelected: homeVersion === "secretaria",
              onClick: () => handleSelectHome("secretaria"),
            },
          ]}
        />
        <MenuMain>
          <strong>
            Visualizando:{" "}
            <strong>
              {dictionary[homeVersion as keyof typeof dictionary]}
            </strong>
          </strong>
        </MenuMain>
      </TopMenu>
      <Box
        as="main"
        width="100%"
        height="calc(100vh - 70px)"
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
          {config.homeBlocks.map((block: any, index: number) => (
            <HomeBlock
              key={index}
              variant={block.variant}
              rows={block.rows}
              columns={block.columns}
            >
              {cellsStructure[block.variant].map((cell: any) => (
                <HomeCell proportions={cell.proportions}>
                  <WidgetWrapper>{cell.content}</WidgetWrapper>
                </HomeCell>
              ))}
            </HomeBlock>
          ))}
        </DynamicContainer>
      </Box>
    </>
  );
}

export default App;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import "./ui/styles/App.css";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import type { BU } from "./core/constants/buData";
import type { ProfileByBU } from "./core/constants/profilesData";
import { AppHeader } from "./ui/components/header";
import { DynamicContainer } from "./ui/components/v2/dynamic-container";
import { HomeBlock } from "./ui/components/v2/home-block";
import { HomeCell } from "./ui/components/v2/home-cell";
import { WidgetWrapper } from "./ui/components/v2/widget-wrapper";

const fetchConfig = async (homeVersion: BU, profile: ProfileByBU) => {
  const config = await fetch(
    `/poc-home-builder/${homeVersion}/${profile}/config.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
  );

  if (config.ok) {
    return config.json();
  }

  throw new Error("config not found");
};

const fetchCellsStructure = async (homeVersion: BU, profile: ProfileByBU) => {
  const response = await fetch(
    `/poc-home-builder/${homeVersion}/${profile}/cellsStructure.json`
  );
  if (response.ok) {
    return response.json() as Promise<any>;
  }
  throw new Error("config not found");
};

function App() {
  const [homeVersion, setHomeVersion] = useState<BU>("sas");
  const [profile, setProfile] = useState<ProfileByBU>("professor");

  const { data: config, isFetched } = useQuery({
    queryKey: ["config"],
    queryFn: () => fetchConfig(homeVersion, profile),
    refetchInterval: 4000,
  });

  const { data: cellsStructure, isFetched: isCellsStructureFetched } = useQuery(
    {
      queryKey: ["cellsStructure"],
      queryFn: () => fetchCellsStructure(homeVersion, profile),
      refetchInterval: 4000,
    }
  );

  const handleSelectBu = (home: typeof homeVersion) => {
    setHomeVersion(home);
  };

  const handleSelectProfile = (option: any) => {
    if (Array.isArray(option) || typeof option?.value !== "string") {
      return;
    }

    setProfile(option.value as typeof profile);
  };

  return (
    <Box height="100vh" width="100vw" overflowX="hidden">
      <AppHeader
        homeVersion={homeVersion}
        profile={profile}
        handleSelectBu={handleSelectBu}
        handleSelectProfile={handleSelectProfile}
      />
      <Box
        as="main"
        width="100%"
        // height="calc(100vh - 70px)"
        height="100%"
        padding={{ base: Tokens.Space400, xl: 0 }}
        marginTop={{ base: Tokens.Space800, md: 0 }}
        backgroundColor={Tokens.ColorBackgroundSecondary}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {!isFetched || !isCellsStructureFetched ? (
          <>Aguarde..</>
        ) : (
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
                {cellsStructure[block.variant].map((cell: any, index: number) => (
                  <HomeCell proportions={cell.proportions} key={`${index}-${cell.proportions}`}>
                    <WidgetWrapper>{cell.content}</WidgetWrapper>
                  </HomeCell>
                ))}
              </HomeBlock>
            ))}
          </DynamicContainer>
        )}
      </Box>
    </Box>
  );
}

export default App;

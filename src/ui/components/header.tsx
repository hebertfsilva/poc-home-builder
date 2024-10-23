import { Box, MenuMain, Select, TopMenu } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import { buDictionary } from "../../core/constants/buData";
import { profileDictionary } from "../../core/constants/profilesData";

export type AppHeaderProps = {
  homeVersion: keyof typeof buDictionary;
  profile: keyof (typeof profileDictionary)[keyof typeof buDictionary];
  handleSelectBu: (home: keyof typeof buDictionary) => void;
  handleSelectProfile: (option: any) => void;
};

const getProfileOptions = (bu: keyof typeof buDictionary) => {
  return Object.entries(profileDictionary[bu]).map(([key, value]) => ({
    label: value,
    value: key,
  }));
};

export function AppHeader({ homeVersion, profile, handleSelectBu, handleSelectProfile }: AppHeaderProps) {
  return (
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
            onClick: () => handleSelectBu("conquista"),
          },
          {
            icon: "Airplay",
            label: "SPE",
            isSelected: homeVersion === "spe",
            onClick: () => handleSelectBu("spe"),
          },
          {
            icon: "Airplay",
            label: "SAS",
            isSelected: homeVersion === "sas",
            onClick: () => handleSelectBu("sas"),
          },
          {
            icon: "Airplay",
            label: "COC",
            isSelected: homeVersion === "coc",
            onClick: () => handleSelectBu("coc"),
          },
        ]}
      />
      <MenuMain>
        <Box
          as="div"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingX={Tokens.Space500}
        >
          <Select
            options={{ options: getProfileOptions(homeVersion) }}
            defaultValue={getProfileOptions(homeVersion).filter(
              (item) => item.value === "professor"
            )}
            onChange={handleSelectProfile}
            clearable={false}
            searchable={false}
            width="15%"
          />
          <strong>
            Visualizando: &nbsp;
            <strong>
              {buDictionary[homeVersion]}&nbsp;-&nbsp;
              {profileDictionary[homeVersion][profile]}
            </strong>
          </strong>
        </Box>
      </MenuMain>
    </TopMenu>
  );
}

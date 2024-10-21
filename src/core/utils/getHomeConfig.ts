import { useWindowSize } from "@arcotech-services/iris-react";
import { Tokens } from "@arcotech-services/iris-tokens";

import type { HomeConfigBase } from "../types/home";

function prepareToken(token: string) {
  const [val] = token.split("px");
  return Number(val);
}

export function useHomeBlockConfig(
  blockConfig: HomeConfigBase["containerBlocksConfig"]
) {
  const { windowWidth } = useWindowSize();

  const breakpointMedium = prepareToken(Tokens.BreakpointMedium);
  const breakpointLarge = prepareToken(Tokens.BreakpointLarge);

  const isTablet =
    windowWidth >= breakpointMedium && windowWidth < breakpointLarge;
  const isDesktop = windowWidth >= breakpointLarge;

  switch (true) {
    case isDesktop:
      return {
        A: blockConfig.A.config.desktop,
        B: blockConfig?.B?.config?.desktop,
      };

    case isTablet:
      return {
        A: blockConfig.A.config.tablet,
        B: blockConfig?.B?.config?.tablet,
      };

    default:
      return {
        A: blockConfig.A.config.mobile,
        B: blockConfig?.B?.config?.mobile,
      };
  }
}

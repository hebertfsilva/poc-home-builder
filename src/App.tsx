import React from "react";

import { Tokens } from "@arcotech-services/iris-tokens";

import { HomeConfigBase } from "./core/types/home";
import { BaseBlock } from "./ui/components/base-block";
import { BaseContainer } from "./ui/components/base-container";
import { BaseWidget } from "./ui/components/base-widget";

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
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <BaseContainer variant={config.containerType}>
        <BaseBlock type={config.containerBlocksConfig.A.type}>
          {config.containerBlocksConfig.A.config.desktop.map((item, index) => {
            if (!item) return null;

            return (
              <BaseWidget
                widgetType={item.widgetType}
                order={item.order}
                initialRow={item.initialRow}
                initialColumn={item.initialColumn}
                key={`${item.widgetType}-${item.order}`}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "red",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: Tokens.FontSize700,
                      fontWeight: Tokens.FontWeightBold,
                      color: "white",
                      margin: "auto",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {index}
                  </p>
                </div>
              </BaseWidget>
            );
          })}
        </BaseBlock>
        {config.containerBlocksConfig?.B ? (
          <BaseBlock type={config.containerBlocksConfig.B.type}>
            {config.containerBlocksConfig.B.config.desktop.map(
              (item, index) => {
                if (!item) return null;

                return (
                  <BaseWidget
                    widgetType={item.widgetType}
                    order={item.order}
                    initialRow={item.initialRow}
                    initialColumn={item.initialColumn}
                    key={`${item.widgetType}-${item.order}`}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "red",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: Tokens.FontSize700,
                          fontWeight: Tokens.FontWeightBold,
                          color: "white",
                          margin: "auto",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {index}
                      </p>
                    </div>
                  </BaseWidget>
                );
              }
            )}
          </BaseBlock>
        ) : null}
      </BaseContainer>
    </main>
  );
}

export default App;

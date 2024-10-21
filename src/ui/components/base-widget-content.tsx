import { Tokens } from "@arcotech-services/iris-tokens";

import type { WidgetName } from "../../core/types/widget";

export function BaseWidgetContent({ widgetName }: { widgetName: WidgetName }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "red",
        borderRadius: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          height: "auto",
        }}
      >
        {widgetName}
      </p>
    </div>
  );
}

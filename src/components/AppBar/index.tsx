import React from "react";
import { Button, Popover } from "antd";
import { useWallet } from "../../contexts/wallet";
import { CurrentUserBadge } from "../CurrentUserBadge";
import { SettingOutlined } from "@ant-design/icons";
import { Settings } from "../Settings";
import { LABELS } from "../../constants";
import { ConnectButton } from "../ConnectButton";

export const AppBar = (props: { left?: JSX.Element; right?: JSX.Element }) => {
  const { connected } = useWallet();

  const TopBar = (
    <div className="App-Bar-right">
      {connected ? (
        <CurrentUserBadge />
      ) : (
        <ConnectButton
          id="btnn"
          type="text"
          size="large"
          allowWalletChange={true}
          style={{ color: "#2abdd2" }}
        />
      )}
    </div>
  );

  return TopBar;
};

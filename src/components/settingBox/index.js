import React, { useState } from "react";
import {
  SettingTitle,
  SettingTitleText,
  SettingContainer,
  SettingContent,
  DetailRowTitle,
  CustomToggler,
  CustomToggle,
  DetailRowConfig,
  SettingDetails,
  DetailContent,
  DetailRow,
  TimeInterval,
} from "./styles";

export default function SettingBox({ settingTitle }) {
  const [sync, setSync] = useState(false);

  const toggle = () => {
    return sync ? "translateX(31px)" : "translateX(0px)";
  };

  const testStyle = {
    transform: toggle(),
    transition: `transform 150ms`,
  };

  return (
    <SettingContainer>
      <SettingContent>
        <SettingTitle>
          <SettingTitleText>{settingTitle}</SettingTitleText>
        </SettingTitle>
        <SettingDetails>
          <DetailContent>
            <DetailRow>
              <DetailRowTitle>Sync</DetailRowTitle>
              <DetailRowConfig>
                <CustomToggle
                  onClick={() => {
                    setSync(!sync);
                  }}
                >
                  <CustomToggler style={testStyle} />
                  <div>ON</div>
                  <div>OFF</div>
                </CustomToggle>
              </DetailRowConfig>
            </DetailRow>
            <DetailRow>
              <DetailRowTitle>Time interval</DetailRowTitle>
              <DetailRowConfig>
                <TimeInterval>
                  <div>HH:MM</div>
                </TimeInterval>
              </DetailRowConfig>
            </DetailRow>
          </DetailContent>
        </SettingDetails>
      </SettingContent>
    </SettingContainer>
  );
}

import { Outlet } from "react-router-dom";
import { Content, LogoButton, LogoTitle, Menu, Page } from "./styles";
import smallLogo from "../../assets/images/logo_small.png";
import { useState } from "react";

export function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Page>
        <Menu isOpen={isOpen}>
          <LogoButton onClick={() => setIsOpen(!isOpen)}>
            <img src={smallLogo} />
            {isOpen && <LogoTitle>Developer.co</LogoTitle>}
          </LogoButton>
        </Menu>
        <Content>
          <Outlet />
        </Content>
      </Page>
    </>
  );
}

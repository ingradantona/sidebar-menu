import { Outlet } from "react-router-dom";
import { Content, Menu, Page } from "./styles";
import { useState } from "react";

export function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Page>
        <Menu isOpen={isOpen}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "fechar" : "abrir"}
          </button>
        </Menu>
        <Content>
          <Outlet />
        </Content>
      </Page>
    </>
  );
}

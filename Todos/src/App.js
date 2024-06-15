import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import keycloak from "./Keycloak";
import Todos from "./Todos";
import Topnav from "./Topnav";
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <ReactKeycloakProvider authClient={keycloak}>
        <Topnav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </AppContainer>
  );
}

export default App;

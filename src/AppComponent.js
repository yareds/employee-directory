import React from "react";

import { styled } from "styled-components";
import { styled } from "styled-components";

const AppWrapper = styled.div`
  display: flex;
`;

const styledItem1 = styled.div`
  width: 300px;
  height: 400px;
  background-color: #333;
  color: #fff;
`;
const styledItem2 = styled.div`
  width: 300px;
  height: 400px;
  background-color: #333;
  color: #fff;
`;

export default function AppComponent() {
  return (
    <AppWrapper>
      <styledItem1>Flex Item 1</styledItem1>
      <styledItem2>Flex Item 2</styledItem2>
    </AppWrapper>
  );
}

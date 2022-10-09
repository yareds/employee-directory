import styled from "styled-components";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const StyledHeader = styled.header`
  display: flex;
  padding: 0.5rem;
  background-color: transparent;
  width: 100% ${(props) => props.width};
  border: 3px solid rgb(52, 147, 211) ${(props) => props.borderColor};
  color: black;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  height: 3em ${(props) => props.height};
  justify-content: space-between;
`;

export default function Header({
  borderColor,
  headerValue,
  backgroundColor,
  width,
  height,
}) {
  return (
    <>
      <StyledHeader
        width={width}
        height={height}
        headerColor={borderColor}
        backgroundColor={backgroundColor}
      >
        <KeyboardArrowLeft
          style={{
            fontSize: "35px",
            color: "rgb(52, 147, 211)",
            marginLeft: ".5em",
          }}
        />
        {headerValue}
      </StyledHeader>
    </>
  );
}

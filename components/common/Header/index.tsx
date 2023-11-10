import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { useRecoilState } from "recoil";
import { themeModeAtom } from "recoil/atoms";
import { styled } from "styled-components";

function Header() {
  const [themeMode, setThemeMode] = useRecoilState(themeModeAtom);
  return (
    <HeaderContainer>
      <h1>OpenAI API Pricing & Token calculator</h1>
      <Button
        size="sm"
        isIconOnly
        onClick={() =>
          setThemeMode((prev) => (prev === "dark" ? "light" : "dark"))
        }
      >
        {themeMode === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </Button>
    </HeaderContainer>
  );
}

export default Header;

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 6%;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  & button {
    background: ${(props) => props.theme.colors.gray[50]};
  }
  & h1 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

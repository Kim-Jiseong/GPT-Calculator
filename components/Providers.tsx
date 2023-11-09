import GlobalStyle from "styles/GlobalStyle";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeModeAtom } from "recoil/atoms";
import { dark, light } from "styles/PDS";
import { ReactNode, useEffect, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const initialTheme =
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme") || "light"
      : "light";
  const [loading, setLoading] = useState(true);

  const [themeMode, setThemeMode] = useRecoilState(themeModeAtom);
  const theme = themeMode === "light" ? light : dark;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (themeMode === "dark") {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [themeMode]);
  useEffect(() => {
    setLoading(false);
    setThemeMode(initialTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!loading)
    return (
      <NextUIProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle>{children}</GlobalStyle>
        </ThemeProvider>
      </NextUIProvider>
    );
};

export default Providers;

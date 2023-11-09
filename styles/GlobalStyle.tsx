import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        {/* <SideSection /> */}
        {/* <MainSection> */}
        {children}
        {/* </MainSection> */}
      </Container>
    </>
  );
};

export const PC_VERSION_QUERY_POINT = 1000;
const SIDE_SECTION_WIDTH = 412;
const GAP = 40;
export const MOBILE_VERSION_MAX_WIDTH = 430;

const GlobalStyleWrapper = createGlobalStyle`
  html {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }
  body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  * {
    box-sizing: border-box;
  }

  body,
  button,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  input,
  legend,
  li,
  ol,
  ul,
  select,
  table,
  td,
  textarea,
  th {
    margin: 0;
    padding: 0;
    word-break: keep-all;

  }

  a {
    color: inherit;
    text-decoration: none;
  }
  /* img{
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  } */
  button {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
    &:disabled {
      cursor: default;
    }
  }

  input, textarea {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
      color: ${(props) => props.theme.colors.text};
  }

  body {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* -webkit-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none; */
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    touch-action: pan-x pan-y;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  *:focus {
    outline: none;
  }

  html {
    /* font-size: 62.5%; */
    -webkit-tap-highlight-color: transparent;
  }
/* 
  @media screen and (max-width: 415px) {
    html {
      font-size: 9.375px;
    }
  }

  @media screen and (max-width: 413px) {
    html {
      font-size: 8.75px;
    }
  }

  @media screen and (max-width: 361px) {
    html {
      font-size: 8.125px;
    }
  }

  @media screen and (max-width: 321px) {
    html {
      font-size: 7.5px;
    }
  } */

`;

const Container = styled.div`
  width: 100%;
  /* font-size: 1.6rem; */
  position: relative;
  div::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const SideSection = styled.aside`
  @media (max-width: ${PC_VERSION_QUERY_POINT}px) {
    display: none;
  }

  position: fixed;
  top: 0;
  left: calc(50% - ${SIDE_SECTION_WIDTH + GAP}px);
`;

const MainSection = styled.div`
  @media (max-width: ${PC_VERSION_QUERY_POINT}px) {
    margin: 0 auto;
    border: none;
    max-width: ${MOBILE_VERSION_MAX_WIDTH}px;
  }
  div::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  position: relative;
  margin: 0 0 0 calc(50vw + ${GAP}px);
  width: 100%;
  max-width: ${MOBILE_VERSION_MAX_WIDTH}px;
  font-size: 1.6rem;
  @media (min-width: ${MOBILE_VERSION_MAX_WIDTH}px) {
    min-height: 100vh;
  }
`;

export default GlobalStyle;

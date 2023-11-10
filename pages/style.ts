import { Autocomplete, Textarea } from "@nextui-org/react";
import styled, { css } from "styled-components";

export const Container = styled.main<{ $ismobile: boolean }>`
  width: 88%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 4.25rem 0;
  display: flex;
  gap: 1.25rem;
  position: relative;
  flex-direction: ${({ $ismobile }) => ($ismobile ? "column" : "row")};
  /* overflow: auto; */
`;

export const PromptContainer = styled.div<{ $ismobile: boolean }>`
  width: ${({ $ismobile }) => ($ismobile ? "100%" : "60%")};
  display: flex;
  padding: 1.25rem 0;
  flex-direction: column;
  gap: 1.25rem;
  flex-shrink: 0;
`;
export const PriceContainer = styled.div<{ $ismobile: boolean }>`
  width: ${({ $ismobile }) => ($ismobile ? "100%" : "calc(40% - 1.25rem)")};
`;

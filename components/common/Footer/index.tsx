import { Instagram } from "lucide-react";
import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <h2>PAX HUMANA</h2>
        <p>jiseong0173@gmail.com</p>
        <p>49, Goryeodae-ro 26-gil, Seongbuk-gu, Seoul, South Korea</p>
        <p>
          If you need assistance or would like to suggest additional features,
          please contact us at the email provided.
        </p>
        {/* <IconWrapper>
          <Instagram
            onClick={() =>
              window.open(
                "https://instagram.com/fynd_everything?igshid=NzZlODBkYWE4Ng==",
                "_blank"
              )
            }
            size={18}
          />
        </IconWrapper> */}
      </FooterContentContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: ${(props) => props.theme.colors.black}; */
  background: #000;
`;
const FooterContentContainer = styled.div`
  width: 88%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2.5rem 0 3.75rem;
  & h1 {
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.625rem;
    font-family: "Montserrat", sans-serif;
  }
  & h2 {
    color: ${(props) => props.theme.colors.gray[500]};
    font-weight: 700;
    font-size: 1rem;
  }
  & p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray[700]};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.gray[500]};
  margin: 1rem 0;
  & svg {
    cursor: pointer;
  }
`;

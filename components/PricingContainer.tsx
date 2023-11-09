import { Input, Tab, Tabs, Textarea } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { promptTextAtom, selectedModelAtom } from "recoil/atoms";
import { styled } from "styled-components";

const priceList = [
  {
    name: "Input",
  },
  {
    name: "Output",
  },
  {
    name: "Average",
  },
];

function PricingContainer({ tokens }: { tokens: any }) {
  const [selectedModel, setSelectedModel] = useRecoilState(selectedModelAtom);
  const [promptText, setPromptText] = useRecoilState(promptTextAtom);
  const [count, setCount] = useState<any>(1);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${count.length + 1}ch`;
    }
  }, [count]);

  const calcPrice = (tokenLength: number, type: string): string => {
    let price;
    switch (type) {
      case "Input":
        price = count * tokenLength * (selectedModel.price.input / 1000);
        break;
      case "Output":
        price = count * tokenLength * (selectedModel.price.output / 1000);
        break;
      case "Average":
        price =
          count *
          tokenLength *
          ((selectedModel.price.input + selectedModel.price.output) / 2 / 1000);
        break;
      default:
        return "Invalid type";
    }
    return price.toFixed(4);
  };

  return (
    <Container key={selectedModel.value}>
      <DataWrapper>
        <SubTitle> Characters: </SubTitle>
        <p>{promptText ? promptText.length : "No Data"}</p>
      </DataWrapper>
      <DataWrapper>
        <SubTitle> Tokens: </SubTitle>
        <p>{tokens ? tokens.length : "No Data"}</p>
      </DataWrapper>
      <DataWrapper>
        <SubTitle>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ display: "flex", flexShrink: "0" }}>Price per</span>{" "}
            <input
              ref={inputRef}
              min="1"
              defaultValue={count}
              type="number"
              onChange={(e) => setCount(e.target.value)}
              style={{
                textAlign: "center",
                display: "inline-box",
                width: "2rem",
              }}
            />{" "}
            <span style={{ display: "flex", flexShrink: "0" }}>
              execution(s):
            </span>
          </div>
        </SubTitle>
        {tokens && (
          <PriceWrapper>
            {priceList.map((content) => (
              <Input
                key={content.name}
                label={content.name}
                placeholder="0.00"
                labelPlacement="outside"
                readOnly
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
                value={calcPrice(tokens.length, content.name)}
                endContent={
                  //   <div className="flex items-center">
                  //     <label className="sr-only" htmlFor="currency">
                  //       Currency
                  //     </label>
                  //     <select
                  //       className="outline-none border-0 bg-transparent text-default-400 text-small"
                  //       id="currency"
                  //       name="currency"
                  //     >
                  //       <option>USD</option>
                  //       <option>ARS</option>
                  //       <option>EUR</option>
                  //     </select>
                  //   </div>
                  <label className="outline-none border-0 bg-transparent text-default-400 text-small">
                    USD
                  </label>
                }
                type="number"
              />
            ))}
          </PriceWrapper>
        )}
        {/* {tokens && (
          <p>
            Input: {calcPrice(tokens.length, "input")} <br /> Output:{" "}
            {calcPrice(tokens.length, "output")}
            <br />
            Avg: {calcPrice(tokens.length, "avg")}
          </p>
        )} */}
      </DataWrapper>
      <DataWrapper>
        <Tabs color={"primary"} style={{ fontWeight: 600 }}>
          <Tab key="TOKEN IDS" title="TOKEN IDS">
            <Textarea
              readOnly
              minRows={10}
              maxRows={10}
              value={tokens ? "[" + tokens.join(", ") + "]" : "No Data"}
            />
          </Tab>
          <Tab key="TEXT" title="TEXT">
            <Textarea
              readOnly
              minRows={10}
              maxRows={10}
              value={promptText ? promptText : "No Data"}
            />
          </Tab>
        </Tabs>
      </DataWrapper>
    </Container>
  );
}

export default PricingContainer;

const Container = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & p {
    font-size: 1rem;
    word-break: break-all;
  }
`;

const SubTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  & input {
    border-radius: ${({ theme }) => theme.radii.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  }
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox  */
  & input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding: 0.75rem 0;
`;

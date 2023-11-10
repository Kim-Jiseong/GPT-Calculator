import type { NextPage } from "next";
import * as S from "./style";
import {
  Autocomplete,
  AutocompleteItem,
  Chip,
  Textarea,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  Tiktoken,
  TiktokenModel,
  encoding_for_model,
  get_encoding,
} from "tiktoken";
import cl100k_base from "tiktoken/encoders/cl100k_base.json";
import _ from "lodash";
import { Model, Models } from "constants/models";
import PricingContainer from "components/PricingContainer";
import { useRecoilState } from "recoil";
import { promptTextAtom, selectedModelAtom } from "recoil/atoms";
import { useMediaQuery } from "react-responsive";

const Home: NextPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const [selectedModel, setSelectedModel] = useRecoilState(selectedModelAtom);

  const [promptText, setPromptText] = useRecoilState(promptTextAtom);

  const [tokenizerLoading, setTokenizerLoading] = useState(false);
  const [tokens, setTokens] = useState<any>();
  const getDebounce = _.debounce((data) => {
    setPromptText(data);
    if (selectedModel !== null) {
      tokenizeText(data);
    }
  }, 200);

  useEffect(() => {
    getDebounce(promptText);
  }, [selectedModel]);

  const tokenizeText = (inputText: string) => {
    // // const tokens = encoding.encode(promptText);
    // const encoding = new Tiktoken(
    //   cl100k_base.bpe_ranks,
    //   cl100k_base.special_tokens,
    //   cl100k_base.pat_str
    // );

    // // Encode the input text
    // const tokens = encoding.encode(inputText);

    // const encoding = get_encoding("cl100k_base");
    const encoding = encoding_for_model(selectedModel.base);
    const tokens = encoding.encode(inputText);
    // console.log(tokens.length);
    encoding.free();
    setTokens(tokens);
    setTokenizerLoading(false);
  };

  const handleChange = (e: any) => {
    if (!tokenizerLoading) {
      setTokenizerLoading(true);
    }
    getDebounce(e.target.value);
  };
  const handleSelectionChange = (selectedValue: string) => {
    if (selectedValue) {
      const obj = Models.find((model) => model.value === selectedValue);
      // console.log(obj);
      setSelectedModel(obj);
    }
    // return obj;
  };
  return (
    <S.Container $ismobile={isMobile}>
      <S.PromptContainer $ismobile={isMobile}>
        <Autocomplete
          label="Select Model"
          defaultSelectedKey="gpt-4"
          isRequired
          selectedKey={selectedModel.value}
          onSelectionChange={(option) => {
            handleSelectionChange(option as string);
          }}
        >
          {Models.map((model) => (
            <AutocompleteItem
              key={model.value}
              value={model.value}
              endContent={
                model?.recommended ? (
                  <Chip color="primary" variant="dot" size="sm">
                    Primary
                  </Chip>
                ) : null
              }
            >
              {model.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Textarea
          minRows={30}
          maxRows={30}
          label="Prompt"
          placeholder="Enter your Prompt"
          onChange={handleChange}
          spellCheck={false}
        />
      </S.PromptContainer>
      <S.PriceContainer $ismobile={isMobile}>
        <PricingContainer tokens={tokens} />
      </S.PriceContainer>
    </S.Container>
  );
};

export default Home;

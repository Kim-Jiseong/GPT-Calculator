import { TiktokenModel } from "tiktoken";

export type Model = {
  label: string;
  value: string;
  base: TiktokenModel;
  recommended?: boolean;
  price: {
    input: number;
    output: number;
  };
};

export const Models = [
  {
    label: "gpt-4-turbo-128k(1106-preview)",
    value: "gpt-4-turbo-128k(1106-preview)",
    base: "gpt-4-0613",
    recommended: true,
    price: { input: 0.01, output: 0.03 },
  },
  // {
  //   label: "gpt-4-turbo(1106-vision-preview)",
  //   value: "gpt-4-vision",
  //   base: "gpt-4",
  //   recommended: true,
  //   price: { input: 0.01, output: 0.03 },
  // },
  {
    label: "gpt-4",
    value: "gpt-4",
    base: "gpt-4",
    recommended: true,
    price: { input: 0.03, output: 0.06 },
  },
  {
    label: "gpt-4-32k",
    value: "gpt-4-32k",
    base: "gpt-4-32k",
    recommended: true,
    price: { input: 0.06, output: 0.12 },
  },
  {
    label: "gpt-3.5-turbo-1106",
    value: "gpt-3.5-turbo-1106",
    base: "gpt-3.5-turbo-0613",
    recommended: true,
    price: { input: 0.001, output: 0.002 },
  },
  {
    label: "gpt-3.5-turbo(fine-tuning)",
    value: "gpt-3.5-turbo(fine-tuning)",
    base: "gpt-3.5-turbo",
    recommended: true,
    price: { input: 0.008, output: 0.003 },
  },
  {
    label: "text-embedding-ada-002",
    value: "text-embedding-ada-002",
    base: "text-embedding-ada-002",
    recommended: true,
    price: { input: 0.0001, output: 0.0001 },
  },

  {
    label: "gpt-3.5-turbo-0613",
    value: "gpt-3.5-turbo-0613",
    base: "gpt-3.5-turbo-0613",
    price: { input: 0.0015, output: 0.002 },
  },
  {
    label: "gpt-3.5-turbo-16k-0613",
    value: "gpt-3.5-turbo-16k-0613",
    base: "gpt-3.5-turbo-16k-0613",
    price: { input: 0.003, output: 0.004 },
  },
  {
    label: "gpt-4-0314",
    value: "gpt-4-0314",
    base: "gpt-4-0314",
    price: { input: 0.03, output: 0.06 },
  },
  {
    label: "gpt-4-32k-0314",
    value: "gpt-4-32k-0314",
    base: "gpt-4-32k-0314",
    price: { input: 0.06, output: 0.12 },
  },
  {
    label: "gpt-3.5-turbo-0301",
    value: "gpt-3.5-turbo-0301",
    base: "gpt-3.5-turbo-0301",
    price: { input: 0.0015, output: 0.002 },
  },
  {
    label: "davinci-002",
    value: "davinci-002",
    base: "text-davinci-002",
    price: { input: 0.002, output: 0.002 },
  },
  {
    label: "davinci-002(fine-tuning)",
    value: "davinci-002(fine-tuning)",
    base: "text-davinci-002",
    price: { input: 0.012, output: 0.012 },
  },
  {
    label: "babbage-002",
    value: "babbage-002",
    base: "text-babbage-001",
    price: { input: 0.0004, output: 0.0004 },
  },
  {
    label: "babbage-002(fine-tuning)",
    value: "babbage-002(fine-tuning)",
    base: "text-babbage-001",
    price: { input: 0.0016, output: 0.0016 },
  },
  {
    label: "text-davinci-003",
    value: "text-davinci-003",
    base: "text-davinci-003",
    price: { input: 0.02, output: 0.02 },
  },
  {
    label: "text-davinci-002",
    value: "text-davinci-002",
    base: "text-davinci-002",
    price: { input: 0.02, output: 0.02 },
  },
  {
    label: "text-davinci-001",
    value: "text-davinci-001",
    base: "text-davinci-001",
    price: { input: 0.02, output: 0.02 },
  },
  {
    label: "text-curie-001",
    value: "text-curie-001",
    base: "text-curie-001",
    price: { input: 0.02, output: 0.02 },
  },
  {
    label: "text-babbage-001",
    value: "text-babbage-001",
    base: "text-babbage-001",
    price: { input: 0.0005, output: 0.0005 },
  },
  {
    label: "text-ada-001",
    value: "text-ada-001",
    base: "text-ada-001",
    price: { input: 0.0005, output: 0.0005 },
  },
  {
    label: "davinci",
    value: "davinci",
    base: "davinci",
    price: { input: 0.02, output: 0.02 },
  },
  {
    label: "curie",
    value: "curie",
    base: "curie",
    price: { input: 0.002, output: 0.002 },
  },
  {
    label: "babbage",
    value: "babbage",
    base: "babbage",
    price: { input: 0.0005, output: 0.0005 },
  },
  {
    label: "ada",
    value: "ada",
    base: "ada",
    price: { input: 0.0004, output: 0.0004 },
  },
  {
    label: "code-davinci-002 (free to researchers)",
    value: "code-davinci-002",
    base: "code-davinci-002",
    price: { input: 0, output: 0 },
  },
  {
    label: "text-similarity-ada-001",
    value: "text-similarity-ada-001",
    base: "text-similarity-ada-001",
    price: { input: 0.004, output: 0.004 },
  },
  {
    label: "text-similarity-davinci-001",
    value: "text-similarity-davinci-001",
    base: "text-similarity-davinci-001",
    price: { input: 0.2, output: 0.2 },
  },
  {
    label: "text-similarity-curie-001",
    value: "text-similarity-curie-001",
    base: "text-similarity-curie-001",
    price: { input: 0.02, output: 0.02 },
  },
  {
    label: "text-similarity-babbage-001",
    value: "text-similarity-babbage-001",
    base: "text-similarity-babbage-001",
    price: { input: 0.005, output: 0.005 },
  },
  {
    label: "text-search-davinci-doc-001",
    value: "text-search-davinci-doc-001",
    base: "text-search-davinci-doc-001",
    price: { input: 0.2, output: 0.2 },
  },
  {
    label: "text-search-curie-doc-001",
    value: "text-search-curie-doc-001",
    base: "text-search-curie-doc-001",
    price: { input: 0.02, output: 0.02 },
  },
  {
    label: "text-search-babbage-doc-001",
    value: "text-search-babbage-doc-001",
    base: "text-search-babbage-doc-001",
    price: { input: 0.005, output: 0.005 },
  },
  {
    label: "text-search-ada-doc-001",
    value: "text-search-ada-doc-001",
    base: "text-search-ada-doc-001",
    price: { input: 0.004, output: 0.004 },
  },
  {
    label: "code-search-babbage-code-001",
    value: "code-search-babbage-code-001",
    base: "code-search-babbage-code-001",
    price: { input: 0.005, output: 0.005 },
  },
  {
    label: "code-search-ada-code-001",
    value: "code-search-ada-code-001",
    base: "code-search-ada-code-001",
    price: { input: 0.004, output: 0.004 },
  },
];

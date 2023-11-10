import "../styles/globals.css";
import "../styles/fonts.css";
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import Providers from "components/Providers";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Footer from "components/common/Footer";
import Head from "next/head";
import Header from "components/common/Header";
// import { queryClient } from "@/pages/api/axios";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <RecoilRoot>
      <Head>
        <title>Ultimate Token and Price Calculator </title>
        <meta
          name="description"
          content="Experience precision with the Ultimate Token and Price Calculator, your go-to service for OpenAI model token and image pricing computations. Calculate prompt and photo costs easily and efficiently."
        />
        <meta
          name="keywords"
          content="OpenAI, Token Calculator, Price Calculator, AI Pricing, Image Cost, Prompt Cost, GPT Token Count, Image Pricing Service"
        />
        <meta name="author" content="PAX HUMANA" />
        <meta
          property="og:title"
          content="Ultimate Token and Price Calculator for OpenAI Models"
        />
        <meta
          property="og:description"
          content="Optimize your OpenAI usage with our accurate token and image price calculator. Determine costs for prompts and photos in a snap!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ultimategptcaculator.com" />
        <meta
          property="og:image"
          content="https://ultimategptcaculator.com/thumbnail.png"
        />
        <meta
          property="og:site_name"
          content="Ultimate Token and Price Calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Manage your OpenAI costs with the Ultimate Token and Price Calculator. Calculate tokens for prompts and pricing for photos with ease."
        />
        <meta
          name="twitter:title"
          content="Ultimate Token and Price Calculator for GPT"
        />
        <meta
          name="twitter:image"
          content="https://ultimategptcaculator.com/thumbnail.png"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:locale" content="ko_KR" /> */}
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Providers>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GB34CD6090"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GB34CD6090');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </Providers>
    </RecoilRoot>
  );
}

export default MyApp;

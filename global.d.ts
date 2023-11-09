export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_HOST: string;
      NEXT_PUBLIC_APP_ENV: "development" | "production";
    }
  }

  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

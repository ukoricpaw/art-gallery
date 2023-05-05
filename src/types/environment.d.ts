export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_API_TOKEN: string;
    }
  }
}

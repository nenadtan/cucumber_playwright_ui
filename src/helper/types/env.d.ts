export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "sandbox" | "dev" | "qa",
            BASEURL: string,
            USERNAME: string,
            PASSWORD: string
        }
    }
}

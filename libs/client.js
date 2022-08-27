import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "1ds9r2w97h",
    apiKey: process.env.API_KEY
});
import { resolve } from "path";

export const entry = "./scr/filterElements.js";
export const output = {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
};

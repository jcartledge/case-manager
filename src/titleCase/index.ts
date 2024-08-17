import { Brand } from "../common/types";

export type TitleCaseString = Brand<string, '#TitleCase'>
export { toTitleCase } from "./toTitleCase";

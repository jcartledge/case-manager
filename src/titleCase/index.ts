import { Brand } from "../common/types/brand";

export type TitleCaseString = Brand<string, '#TitleCase'>
export { toTitleCase } from "./toTitleCase";

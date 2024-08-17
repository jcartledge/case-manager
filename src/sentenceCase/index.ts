import { Brand } from "../common/types";

export type SentenceCaseString = Brand<string, '#SentenceCase'>
export { isSentenceCase } from "./isSentenceCase";
export { toSentenceCase } from "./toSentenceCase";

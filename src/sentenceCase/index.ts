import { Brand } from "../common/types/brand";

export type SentenceCaseString = Brand<string, '#SentenceCase'>
export { isSentenceCase } from "./isSentenceCase";
export { toSentenceCase } from "./toSentenceCase";

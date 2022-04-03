import {
  ParseElement
} from "./helpers";

export enum TagType {
  Paragraph,
  Header1,
  Header2,
  Header3,
  HorizontalRule,
  CheckBox
}

export interface IMarkdownDocument {
  Add: (...content: string[]) => void;
  Get(): string
}

export interface IVisitor {
  Visit(token: ParseElement, mardownDocument: IMarkdownDocument): void
}

export interface IVisitable {
  Accept(visitor: IVisitor, token: ParseElement, markdownDocument: IMarkdownDocument): void;
}


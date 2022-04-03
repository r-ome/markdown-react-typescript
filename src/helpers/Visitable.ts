import { IMarkdownDocument, IVisitable, IVisitor } from "../models";
import ParseElement from "./ParseElement";

export default class Visitable implements IVisitable  {
  Accept(visitor: IVisitor, token: ParseElement, markdownDocument: IMarkdownDocument) {
    visitor.Visit(token, markdownDocument);
  }
}
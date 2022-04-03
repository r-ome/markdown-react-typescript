import { IMarkdownDocument } from "../models"
import { Header1ChainHandler } from "./ChainHandlers";
import MarkdownDocument from "./MarkdownDocument"
import ChainOfResponsibilityFactory from "./ChainOfResponsibilityFactory";
import ParseElement from "./ParseElement";

class Markdown {
  ToHtml(text: string): string{
    let document: IMarkdownDocument = new MarkdownDocument;
    let header1: Header1ChainHandler = new ChainOfResponsibilityFactory().Build(document);
    let lines: string[] = text.split('\n');
    for (let index = 0; index < lines.length; index++) {
      let parseElement: ParseElement = new ParseElement();
      parseElement.CurrentLine = lines[index];
      header1.HandleRequest(parseElement);
    }

    return document.Get(); 
  }
}

export default Markdown;
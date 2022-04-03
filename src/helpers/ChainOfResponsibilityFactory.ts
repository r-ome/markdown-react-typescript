import { IMarkdownDocument } from "../models";
import {
  Header1ChainHandler,
  Header2ChainHandler,
  Header3ChainHandler,
  HorizontalRuleChainHandler,
} from "./ChainHandlers";
import ParagraphHandler from "./ParagraphHandler";
import ParseChainHandler from "./ParseChainHandler";

class ChainOfResponsibilityFactory {
  Build(document: IMarkdownDocument): ParseChainHandler {
    let header1: Header1ChainHandler = new Header1ChainHandler(document);
    let header2: Header2ChainHandler = new Header2ChainHandler(document);
    let header3: Header3ChainHandler = new Header3ChainHandler(document);
    let horizontalRule: Header1ChainHandler = new HorizontalRuleChainHandler(document);
    let paragraph: ParagraphHandler = new ParagraphHandler(document);

    header1.SetNext(header2);
    header2.SetNext(header3);
    header3.SetNext(horizontalRule);
    horizontalRule.SetNext(paragraph);

    return header1;
  }

}

export default ChainOfResponsibilityFactory;
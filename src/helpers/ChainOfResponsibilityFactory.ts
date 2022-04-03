import { IMarkdownDocument } from "../models";
import {
  Header1ChainHandler,
  Header2ChainHandler,
  Header3ChainHandler,
  HorizontalRuleChainHandler,
  CheckBoxChainHandler
} from "./ChainHandlers";
import ParagraphHandler from "./ParagraphHandler";
import ParseChainHandler from "./ParseChainHandler";

class ChainOfResponsibilityFactory {
  Build(document: IMarkdownDocument): ParseChainHandler {
    let header1: Header1ChainHandler = new Header1ChainHandler(document);
    let header2: Header2ChainHandler = new Header2ChainHandler(document);
    let header3: Header3ChainHandler = new Header3ChainHandler(document);
    let horizontalRule: HorizontalRuleChainHandler = new HorizontalRuleChainHandler(document);
    let paragraph: ParagraphHandler = new ParagraphHandler(document);
    let checkbox: CheckBoxChainHandler = new CheckBoxChainHandler(document);

    header1.SetNext(header2);
    header2.SetNext(header3);
    header3.SetNext(horizontalRule);
    horizontalRule.SetNext(checkbox);
    checkbox.SetNext(paragraph);

    return header1;
  }

}

export default ChainOfResponsibilityFactory;
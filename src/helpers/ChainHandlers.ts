import { IMarkdownDocument } from "../models";
import ParseChainHandler from "./ParseChainHandler";
import {
  Header1Visitor,
  Header2Visitor,
  Header3Visitor,
  HorizontalRuleVisitor,
  CheckBoxVisitor
} from "./Visitors";

export class Header1ChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "# ", new Header1Visitor());
  }
}

export class Header2ChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "## ", new Header2Visitor());
  }
}

export class Header3ChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "### ", new Header3Visitor());
  }
}

export class HorizontalRuleChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "--- ", new HorizontalRuleVisitor())
  }
}

export class CheckBoxChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "- [] ", new CheckBoxVisitor())
  }
}
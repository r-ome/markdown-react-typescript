import React, { useEffect } from "react";
import HtmlHandler from "./helpers/HtmlHandler";

const App: React.FC = () => {
  useEffect(() => {
    new HtmlHandler().TextChangeHandler('markdown', 'markdown-output');
  });

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-lg-6">
          <textarea className="form-control h-100" id="markdown"></textarea>
        </div>

        <div className="col-lg-6">
          <label className="h-100 w-100" id="markdown-output"></label>
        </div>
      </div>
    </div>
  )
}

export default App;
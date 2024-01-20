import React from "react";
import CopyTextComponent from "../quickstart/copyTextComponent";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Textarea = ({ codeContent }) => {
  return (
    <div>
      <pre className="max-w-full overflow-x-auto flex justify-between pl-4 max-h-auto p-4 mr-4 rounded-lg">
        <code className="language-javascript" style={{width:"740px"}} >
          <SyntaxHighlighter language="javascript" style={ xt256 } wrapLines={true}>
            {codeContent }
          </SyntaxHighlighter>
        </code>
        <CopyTextComponent />
      </pre>
    </div>
  );
};

export default Textarea;

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IProps {
  code: string;
}

const DevTutorialCodeBlock = ({ code }: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
};

export default DevTutorialCodeBlock;

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Result({ result, loading }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="result">
      <p>
        {result}

        <CopyToClipboard text={result} onCopy={() => setCopied(true)}>
          <button className={copied ? "copied" : ""}>Copy to clipboard</button>
        </CopyToClipboard>
      </p>
    </div>
  );
}

export default Result;

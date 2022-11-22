import { useState } from 'react';

function MyComponent() {
  const [score, setScore] = useState(0);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setScore(score + 1)
  }, score);
}

export { MyComponent };
//# sourceMappingURL=example-lib-react.js.map

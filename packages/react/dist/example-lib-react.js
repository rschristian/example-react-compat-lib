import React, { useState } from 'react';

function MyComponent({
  name
}) {
  const [score, setScore] = useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Hello, ", name, "!"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setScore(score + 1)
  }, score));
}

export { MyComponent };
//# sourceMappingURL=example-lib-react.js.map

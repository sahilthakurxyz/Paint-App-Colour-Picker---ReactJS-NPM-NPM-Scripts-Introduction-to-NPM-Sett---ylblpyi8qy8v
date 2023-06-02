import React, { useState } from "react";

function Selection({ applyColor }) {
  let [state, setState] = useState({ background: "" });
  return (
    <div className="fix-box" style={{ backgroundColor: state.background }}>
      <h2
        className="subheading"
        onClick={() => {
          setState({ background: applyColor.background });
        }}
      >
        Selection
      </h2>
    </div>
  );
}

export default Selection;

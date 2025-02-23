import React, { useState } from "react";

const PropsPage = ({ message }) => {
  const [customMessage, setCustomMessage] = useState(message);

  return (
    <div>
      <h1>Props Page</h1>
      <p>{customMessage}</p>

      <input
        type="text"
        className="form-control my-3"
        placeholder="Change the message"
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
      />
    </div>
  );
};

export default PropsPage;

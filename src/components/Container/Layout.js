import React from "react";

const Layout = ({ className, children }) => {
  return (
    <main
      className={`relative container flex flex-col max-w-3xl min-h-[100vh] m-auto ${className}`}
    >
      {children}
    </main>
  );
};

export { Layout };

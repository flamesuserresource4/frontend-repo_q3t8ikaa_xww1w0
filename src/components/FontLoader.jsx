import React from 'react';

const FontLoader = () => {
  const css = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  :root { --app-font: 'Poppins', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Inter, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; }
  body { font-family: var(--app-font); }`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default FontLoader;

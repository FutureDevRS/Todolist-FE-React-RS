import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      fontFamily:"Open Sans",
      colors: {
        space: [
          "#5f3dc4",
          "#364fc7",
          "#1864ab",
          "#15aabf",
          "#63e6be",
          "#ffec99"
        ],
      }
    }}
    
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);


import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'black',
          value: '#333333',
        }
      ],
    },
  },
};


export default preview;

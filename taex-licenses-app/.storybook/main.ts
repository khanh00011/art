import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/**.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  
  framework: {
    name: "@storybook/nextjs",
    options: {
    
    },
  },
  docs: {
    autodocs: "tag",
  },
  "previewHead": (head) => (`
    ${head}
    <style>
      html, body {
        background: #000;
      }
    </style>
  `),
};
export default config;

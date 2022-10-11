module.exports = {
  stories: [
    "../components/Introduction.stories.mdx",
    "../components/Install.stories.mdx",
    "../components/Components.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [{
    name: 'storybook-preset-less',
    options: {
      cssLoaderOptions: {
        modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]',
      },
      lessLoaderOptions: {
        lessOptions: {
          strictMath: false,
          noIeCompat: true,
          relativeUrls: false,
        },
      },
    }
  },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  // "framework": "@storybook/react17"
}
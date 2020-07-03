import { configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(withPaddings);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  dependencies: { withStoriesOnly: true, hideEmpty: true }
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.(mdx|[tj]sx?)$/), module);

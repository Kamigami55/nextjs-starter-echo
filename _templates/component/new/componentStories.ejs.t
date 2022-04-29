---
to: src/components/<%= type %>/<%= name %>/<%= name %>.stories.js
---
import <%= name %> from './<%= name %>'

export const Default = {
  args: {},
}

export default {
  component: <%= name %>,
}

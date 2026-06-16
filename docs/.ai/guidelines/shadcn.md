## Building UI

- When building UI, use `shadcn-vue` skill.
- Always try to use `shadcn-vue` component before creating own implementation.
- If the component you need is not provided by `shadcn-vue` compose a new component using similar patterns that `shadcn-vue` is using.
- When building a custom component, leverage the `reka-ui` installed package, which contains unstyled primitive component foundation for building custom UI components. Shadcn-vue is using this package as foundation.
- When working with `reka-ui` directly, search its [documentation](https://reka-ui.com/llms.txt) which is LLM friendly.
- Do not search Vue-specific documentation in inertia or laravel docs. The documentation contains instructions for using Vue with Laravel and Inertia, not documenting Vue as framework.
- *IMPORTANT: When writing Vue components, always put `template` on the top and `script` below `template` tag.*

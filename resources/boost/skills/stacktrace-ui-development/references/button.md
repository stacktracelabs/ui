# Button

Use `Button` for actions in the current interface. Use `ButtonLink` for Inertia navigation or an Inertia request that should look like a button. Compose `ButtonState` inside either component for pending and success feedback.

Install the component when it is missing:

```bash
npx shadcn-vue@latest add @stacktrace/button
```

```ts
import { Button, ButtonLink, ButtonState } from '@/Components/Button'
```

Use the actual alias from `components.json` when it differs.

## Button is intentionally simple

`Button` owns styling and element composition, not asynchronous state or icon placement. Put labels, icons, and `ButtonState` in its default slot. Bind `disabled` on the outer button when repeat activation must be prevented.

```vue
<Button type="submit">Save changes</Button>
```

## Choose variants by intent

Prefer the lowest emphasis that keeps the action discoverable. Avoid several visually dominant actions in one group.

| Variant | Use it for |
| --- | --- |
| `default` | The primary action in a page, form, dialog, or action group, such as Save, Create, or Continue. Prefer one per action group. |
| `secondary` | A supporting action that remains prominent but is less important than the primary action. |
| `destructive` | Deleting data, revoking access, or another difficult-to-reverse outcome. It is not a generic error/status color. |
| `outline` | Neutral alternatives such as Cancel, Back, or an optional action beside the primary button. |
| `ghost` | Low-priority or repeated actions in toolbars, table rows, menus, and compact controls where interactivity is already clear. |
| `link` | A button action that belongs visually in surrounding text. For actual navigation, use `ButtonLink variant="link"`. |

Ask for confirmation when accidental destructive activation would have a significant or irreversible consequence. Use the `Confirmation Dialog` component and name the consequence clearly.

## Sizes

- Use the default size for most forms and dialogs.
- Use `sm` for dense toolbars and table rows.
- Use `lg` for a prominent standalone call to action.
- Reserve `icon`, `icon-sm`, and `icon-lg` for icon-only controls.

Icon-only buttons require an accessible name:

```vue
<Button variant="outline" size="icon" aria-label="Open settings">
  <SettingsIcon />
</Button>
```

Use Button Group when multiple related buttons form one compact control. Do not manually join their borders or spacing. Save and Cancel are independent actions and normally remain separate.

## Icons

Add an icon when it reinforces the label or improves recognition. Do not add decorative icons to every button. Nested SVGs are sized by Button, so manual width and height classes are normally unnecessary.

```vue
<Button>
  <SaveIcon />
  Save changes
</Button>
```

The `data-icon="inline-start"` and `data-icon="inline-end"` attributes are optional directional styling hooks. Button spacing does not depend on them. Omit them when the application does not support right-to-left layouts or position-specific icon styling.

## Element composition

`Button` defaults to `as="button"`. Use `as` to choose another element. Use `as-child` to merge its behavior and styles onto the only child without adding a wrapper.

```vue
<Button as-child>
  <a href="/reports/export">Export report</a>
</Button>
```

The child must preserve correct semantics, focusability, and keyboard behavior. Prefer `ButtonLink` instead when the child would be an Inertia link. Read the composition reference before building a custom wrapper around this behavior.

## Inertia ButtonLink

`ButtonLink` is an Inertia `Link` with Button variants and sizes. It forwards Inertia props such as `href`, `method`, `data`, `preserve-scroll`, `preserve-state`, and `as`.

```vue
<ButtonLink href="/projects/new">Create project</ButtonLink>
```

Render non-GET actions as a button rather than an anchor:

```vue
<ButtonLink
  href="/projects/42/archive"
  method="post"
  as="button"
  variant="outline"
>
  Archive project
</ButtonLink>
```

Inertia adds `data-loading` to its Link during the active request. Do not reproduce this state in `ButtonLink`; a nested `ButtonState` observes it automatically:

```vue
<ButtonLink href="/settings" method="patch" as="button">
  <ButtonState>Save settings</ButtonState>
</ButtonLink>
```

`ButtonLink` cannot infer a recently-successful state because Inertia Link exposes only its active request state. Bind that state explicitly when the feature owns it.

## Processing and recently successful state

For a regular Button, bind the request state to ButtonState and disable the outer Button separately:

```vue
<Button type="submit" :disabled="form.processing">
  <ButtonState
    :processing="form.processing"
    :recently-successful="form.recentlySuccessful"
  >
    Save changes

    <template #success>Changes saved</template>
  </ButtonState>
</Button>
```

Use pending feedback when an action lasts long enough that someone may repeat it or wonder whether it started. Use recently-successful feedback for brief local confirmation such as saving one field. Prefer a toast or persistent message when the outcome must remain visible after attention moves elsewhere.

`ButtonState` defaults are:

- `processing: false`
- `recentlySuccessful: false`
- `processingLabel: "Processing"` for screen readers
- `recentlySuccessfulLabel: "Saved"`

Customize the visible success content with the `success` slot. Keep the idle label in the default slot.

## Accessibility and verification

- Use a native button for actions and a link for navigation.
- Give icon-only buttons an `aria-label`.
- Do not nest interactive elements.
- Ensure destructive actions communicate their result and use confirmation when warranted.
- Ensure pending buttons prevent duplicate submissions when required.
- Exercise keyboard focus, disabled state, Inertia loading, and form success behavior.

# Component catalog

Use this catalog to select an existing component before writing a custom one. Component names map to `@stacktrace/<kebab-case-name>` registry items. The hosted documentation base is `https://ui.stacktrace.sk/docs/components/`.

| Component | Use it for |
| --- | --- |
| Accordion | Vertically stacked headings that reveal sections of content. |
| Alert | A callout that draws attention to important information. |
| Alert Dialog | An interruptive modal that requires a response. |
| Aspect Ratio | Content constrained to a chosen aspect ratio. |
| Avatar | A user image with fallback content. |
| Badge | A compact status, category, or label. |
| Breadcrumb | The current resource's path through a hierarchy. |
| Button | Actions, Inertia button-links, and composed processing feedback. Read [Button](button.md). |
| Button Group | Related buttons joined with consistent borders and spacing. |
| Calendar | Selecting a single day from a calendar. |
| Card | Content with optional header, body, action, and footer regions. |
| Carousel | Swipeable or controlled content slides. |
| Chart | Data visualization using Unovis and design tokens. |
| Checkbox | An independently checked or unchecked option. |
| Collapsible | Expanding and collapsing one panel. |
| Combobox | Searching and selecting from a list of options. |
| Command | A composable command palette with filtering. |
| Confirmation Dialog | Confirming an application action, especially a consequential one. |
| Context Menu | Actions opened from a context-menu gesture. |
| Data Table | Backend-driven data with columns, actions, filters, search, sorting, and pagination. |
| Date Input | Typing a date or selecting it from a calendar. |
| Date Picker | Selecting a date from a calendar popover. |
| Date Range Picker | Selecting a range of dates. |
| Date Time Input | Entering a date and optionally a time. |
| Dialog | Focused modal content and actions. |
| Drawer | A touch-friendly panel sliding from a viewport edge. |
| Dropdown Menu | Actions or choices opened from a trigger. |
| Empty | A clear empty state for a collection or workflow. |
| Field | Accessible labels, controls, help text, and validation errors. |
| Filter | Application-ready boolean, date, number, search, and selection filters. |
| Form | StackTrace form helpers for labels, help text, errors, selects, and comboboxes. |
| Hover Card | Preview content shown on pointer hover or focus. |
| Input | Styled native text, email, password, file, and related inputs. |
| Input Group | Icons, text, or actions attached to an input or textarea. |
| Input OTP | A one-time-password input with keyboard and paste support. |
| Item | A structured row or card containing content and actions. |
| Kbd | Keyboard keys and shortcut combinations. |
| Label | An accessible label associated with a form control. |
| Logo | The StackTrace mark as a current-color SVG. |
| Marker | An inline status, system note, bordered row, or labeled separator. |
| Menubar | Persistent horizontal application commands. |
| Native Select | A styled native select when platform behavior is preferred. |
| Navigation Menu | Responsive navigation links and expandable content. |
| Number Field | Numeric input with accessible increment and decrement controls. |
| Pagination | Numbered, previous, next, first, and last page navigation. |
| Panel | Structured name-value information. |
| Pin Input | Segmented PIN, verification-code, or short-sequence input. |
| Popover | Rich non-modal content opened from a control. |
| Progress | Completion progress for a task or workflow. |
| Radio Group | One selection from a mutually exclusive set. |
| Range Calendar | Selecting a contiguous date range directly in a calendar. |
| Resizable | Adjustable application-layout panels. |
| Scroll Area | Native scrolling with consistently styled scrollbars. |
| Select | Choosing one value from an accessible triggered list. |
| Separator | Visual or semantic separation between content. |
| Sheet | Dialog content presented from a screen edge. |
| Sidebar | Composable responsive application navigation. |
| Skeleton | A placeholder while content is loading. |
| Slider | Selecting one or more values from a continuous range. |
| Sonner | Transient toast feedback. Pair with the PHP Toast API when feedback originates on the server. |
| Spinner | A loading or processing indicator. |
| Stepper | An ordered multi-step workflow. |
| Switch | An immediate on/off setting. |
| Table | Responsive semantic tabular markup and frontend sorting helpers. |
| Tabs | Related panels displayed one at a time. |
| Tags Input | Multiple short values represented as removable tags. |
| Textarea | Multiline text entry. |
| Toggle | A two-state pressed/unpressed button. |
| Toggle Group | Related toggles with single or multiple selection. |
| Tooltip | Short contextual information on focus or hover. |

## Choosing close alternatives

- Use **Alert Dialog** for an interruptive decision and **Confirmation Dialog** for the application's standardized action-confirmation flow.
- Use **Dialog** for focused modal work, **Sheet** for complementary edge content, and **Drawer** for a touch-oriented sliding panel.
- Use **Native Select** for native platform behavior, **Select** for a styled list, and **Combobox** when searching a larger set matters.
- Use **Table** for semantic client-rendered tables and **Data Table** when PHP owns columns, filters, actions, sorting, or pagination.
- Use **Checkbox** for independent choices, **Radio Group** for one choice among several, and **Switch** for an immediately applied setting.
- Use **Button Group** only when related buttons form one compact control; keep independent actions such as Save and Cancel separate.

For component-specific APIs and examples not bundled with this first skill version, read the matching hosted page at `https://ui.stacktrace.sk/docs/components/<registry-name>` and inspect the installed component's `index.ts` and Vue source before using props or emits.

# Calendar

A date field component that allows users to enter and edit date.

<ComponentSource
  source="components/calendar"
  primitive="https://www.reka-ui.com/docs/components/calendar"
  ui="https://www.shadcn-vue.com/docs/components/calendar.html"
/>

<ComponentPreview name="Calendar" />

## About

The `<Calendar />` component is built on top of the [RadixVue Calendar](https://www.reka-ui.com/docs/components/calendar.html) component, which uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package to handle dates.

If you're looking for a range calendar, check out the [Range Calendar](/components/range-calendar) component.

## Installation

```shell
php artisan ui:add calendar
```

:::tip
The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.
Check [Dates & Times in Radix Vue](https://www.radix-vue.com/guides/dates.html) for more information and installation instructions.
:::

## Datepicker

You can use the `<Calendar />` component to build a date picker. See the [Date Picker](/components/date-picker) page for more information.

## Examples

### Form

<ComponentPreview name="CalendarForm" />

## Advanced Customization

### Month & Year Selects

<ComponentPreview name="CalendarMonthYearSelects" />

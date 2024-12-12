# Vue3 MultiSelect Component

A customizable and accessible multiselect/dropdown component for Vue 3 built on top of vue-multiselect.

## Features

- **Single/Multiple Selection:** Supports both single and multiple selection modes
- **Select All:** Built-in select all functionality for multiple selection mode
- **Customizable:** Supports custom labels and tracking properties
- **Dark Mode:** Fully compatible with dark mode
- **Accessible:** Keyboard navigable and ARIA compliant
- **Responsive:** Mobile-friendly design with touch support

## Installation

```bash
npm install vue3-multiselect-component
# or
yarn add vue3-multiselect-component
```

## Configuration

```js
import MultiSelect from 'vue3-multiselect-component';
import 'vue3-multiselect-component/dist/style.css';

app.use(MultiSelect);
```

## Usage

```vue
<template>
  <MultiSelect />
</template>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array` | Required | Array of options to display in the dropdown |
| `modelValue` | `any` | Required | v-model binding value |
| `multiple` | `boolean` | `false` | Enable multiple selection mode |
| `label` | `string` | `'name'` | Property name to display as label |
| `trackBy` | `string` | `label` value or `'name'` | Property name to track unique values |

### Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `update:modelValue` | `(value: any)` | Emitted when selection changes |

### Slots

#### beforeList
Available when `multiple` is true. Contains the "Select All" checkbox.

```vue
<template #beforeList>
  <!-- Custom before list content -->
</template>
```

#### option
Customize the appearance of each option.

```vue
<template #option="{ option }">
  <!-- Custom option content -->
</template>
```

### Styling

The component includes built-in styling with:
- Light and dark mode support
- Focus states
- Hover effects
- Custom checkboxes
- Responsive design

You can customize the appearance by overriding the following CSS classes:
- `.multiselect`
- `.multiselect__tags`
- `.multiselect__single`
- `.multiselect__placeholder`
- `.multiselect__input`
- `.multiselect__content-wrapper`
- `.multiselect__option`

### Example with All Features

```vue
<template>
  <MultiSelect
    v-model="selected"
    :options="options"
    :multiple="true"
    label="displayName"
    track-by="id"
  />
</template>

<script setup>
const selected = ref([]);
const options = [
  { id: 1, displayName: 'Option 1' },
  { id: 2, displayName: 'Option 2' },
  { id: 3, displayName: 'Option 3' }
];
</script>
```

## Accessibility

The component implements the following accessibility features:
- Keyboard navigation
- ARIA labels
- Focus management
- Screen reader support

## Browser Support

Supports all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
```

This documentation provides a comprehensive overview of the component's features, installation, usage, and customization options. It includes examples and detailed explanations of all available props, events, and slots.

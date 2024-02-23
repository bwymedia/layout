# Parsing

Parsing on **Layout** is usually done by a property called `parse`, which directly alters the components styling.

Parsing language follows the following structure, while writing string.

```
key:value key:value
```

All numerical units `em`, `rem`, `px`, `vh`, `vw`, `%` and similar are supported, as these are interpreted by the technology being used. In case no units are being used, a value being numerical would default to `px`, if that specific CSS property supports it, such as `width` and `height` for instance.

### Usage Example

```jsx
<Box parse="height:100" />
/* Would default to 100px */
```

```jsx
<Box parse="height:100px" />
```

```jsx
<Box parse="height:100%" />
```

```jsx
<Box parse="height:100vh" />
```

# Native Attributes and Values

Writing the attribute directly, would automatically be accepted, you can use them without any limitations, and also write unsupported attributes by this library. For example.

```jsx
<Box parse="flex-grow:0" />
/* Currently unsupported by Layouts, but still would work. */
```

```jsx
<Box parse="flexGrow:0" />
/* Currently unsupported by Layouts, but still would work. */
```

# Supported Attributes and Values

| CSS Equivalent | JSX Equivalent | Possible Options | Simplified Property | Simplified Options |
| -------- | ------- | ------- | ------- | ------- |
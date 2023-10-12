# Properties

Properties on **Layout** components enable you to effortlessly and succinctly modify style parameters. An example is provided below:

```jsx
<Box width="100%" />
```

The table below presents a comprehensive list of properties that can be applied to **Layout** components:

## Box

| Property | Optional | Type | Description |
| ----- | ----- | ----- | ----- |
| parse | ✔️ | string | A parsing string allowing you to quickly set the style. |
| css | ✔️ | string | An equivelent of setting `className` property on web. |
| reference | ✔️ | React.Ref | An equivelent of passing the `ref` object. |
| press | ✔️ | () => void | An equivelent of `onClick` and `onPress` on native. |
| pure | ✔️ | boolean | Optionally control whether `CSS` will be disabled. Use this if you don't intend to import the CSS file. |
| children | ✔️ | JSX.Element, JSX.Element[] | ... |
| native | ✔️ | { [key: string]: unknown } | Manually set native component properties using this parameter. Useful if you intend to pass extra parameters. |
| element | ✔️ | string | Optionally use anything other than `div` |
| id | ✔️ | string | An equivelent of `id` parameter on web. |
| top | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| left | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| bottom | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| right | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| flex | ✔️ | number, string | An equivelent to `flex` property on CSS. |
| align | ✔️ | string | An equivelent to `align-items` property on CSS. |
| justify | ✔️ | string | An equivelent to `align-content` property on CSS. |
| direction | ✔️ | string | An equivelent to `flex-direction` property on CSS. |
| wrap | ✔️ | string | An equivelent to `flex-wrap` property on CSS. |
| color | ✔️ | string | An equivelent to `background-color` property on CSS. |
| radius | ✔️ | number, string | An equivelent to `border-radius` property on CSS. |
| shadow | ✔️ | string | An equivelent to `box-shadow` property on CSS. |
| height | ✔️ | number, string | An equivelent to `height` property on CSS. |
| width | ✔️ | number, string | An equivelent to `width` property on CSS. |
| opacity | ✔️ | number | An equivelent to `opacity` property on CSS. |
| padding | ✔️ | number, string | An equivelent to `padding` property on CSS. |
| margin | ✔️ | number, string | An equivelent to `margin` property on CSS. |
| position | ✔️ | string | An equivelent to `position` property on CSS. |
| overflow | ✔️ | string | An equivelent to `overflow` property on CSS. |
| display | ✔️ | string | An equivelent to `display` property on CSS. |
| border | ✔️ | string | An equivelent to `border` property on CSS. |
| layer | ✔️ | number | An equivelent to `z-index` property on CSS. |
| image | ✔️ | string | An equivelent to `background-image` property on CSS. |
| mode | ✔️ | "margin", "padding", "position" | Set the modes for `top`, `right`, `left` or `bottom` |
| style | ✔️ | { [key: string]: unknown } | Directly pass extra styles as an object. |

## Text

| Property | Optional | Type | Description |
| ----- | ----- | ----- | ----- |
| parse | ✔️ | string | A parsing string allowing you to quickly set the style. |
| css | ✔️ | string | An equivelent of setting `className` property on web. |
| reference | ✔️ | React.Ref | An equivelent of passing the `ref` object. |
| press | ✔️ | () => void | An equivelent of `onClick` and `onPress` on native. |
| pure | ✔️ | boolean | Optionally control whether `CSS` will be disabled. Use this if you don't intend to import the CSS file. |
| children | ✔️ | JSX.Element, JSX.Element[] | ... |
| native | ✔️ | { [key: string]: unknown } | Manually set native component properties using this parameter. Useful if you intend to pass extra parameters. |
| element | ✔️ | string | Optionally use anything other than `div` |
| id | ✔️ | string | An equivelent of `id` parameter on web. |
| to | ✔️ | string | An equivelent of `href` parameter on web. |
| target | ✔️ | string | An equivelent of `target` parameter on web. |
| top | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| left | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| bottom | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| right | ✔️ | number, string | Either set position, margin or padding value based on `mode` parameter. |
| flex | ✔️ | number, string | An equivelent to `flex` property on CSS. |
| align | ✔️ | string | An equivelent to `align-items` property on CSS. |
| justify | ✔️ | string | An equivelent to `align-content` property on CSS. |
| direction | ✔️ | string | An equivelent to `flex-direction` property on CSS. |
| space | ✔️ | string | An equivelent to `white-space` property on CSS. |
| family | ✔️ | string | An equivelent to `font-family` property on CSS. |
| color | ✔️ | string | An equivelent to `color` property on CSS. |
| height | ✔️ | number, string | An equivelent to `height` property on CSS. |
| width | ✔️ | number, string | An equivelent to `width` property on CSS. |
| opacity | ✔️ | number | An equivelent to `opacity` property on CSS. |
| padding | ✔️ | number, string | An equivelent to `padding` property on CSS. |
| margin | ✔️ | number, string | An equivelent to `margin` property on CSS. |
| position | ✔️ | string | An equivelent to `position` property on CSS. |
| overflow | ✔️ | string | An equivelent to `overflow` property on CSS. |
| display | ✔️ | string | An equivelent to `display` property on CSS. |
| layer | ✔️ | number | An equivelent to `z-index` property on CSS. |
| mode | ✔️ | "margin", "padding", "position" | Set the modes for `top`, `right`, `left` or `bottom` |
| style | ✔️ | { [key: string]: unknown } | Directly pass extra styles as an object. |
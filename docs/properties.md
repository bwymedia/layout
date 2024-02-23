# Properties

Properties on **Layout** components enable you to effortlessly and succinctly modify style parameters. An example is provided below:

```jsx
<Box width="100%" />
```

The table below presents a comprehensive list of properties that can be applied to **Layout** components:

## Box

| Property  | Optional | Type                            | Description                                                                                                   |
| --------- | -------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| parse     | ✔️       | string                          | A parsing string allowing you to quickly set the style.                                                       |
| css       | ✔️       | string                          | An equivalent of setting `className` property on web.                                                         |
| reference | ✔️       | React.Ref                       | An equivalent of passing the `ref` object.                                                                    |
| press     | ✔️       | () => void                      | An equivalent of `onClick` and `onPress` on native.                                                           |
| pure      | ✔️       | boolean                         | Optionally control whether `CSS` will be disabled. Use this if you don't intend to import the CSS file.       |
| children  | ✔️       | JSX.Element, JSX.Element[]      | ...                                                                                                           |
| native    | ✔️       | { [key: string]: unknown }      | Manually set native component properties using this parameter. Useful if you intend to pass extra parameters. |
| element   | ✔️       | string                          | Optionally use anything other than `div`                                                                      |
| id        | ✔️       | string                          | An equivalent of `id` parameter on web.                                                                       |
| top       | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| left      | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| bottom    | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| right     | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| flex      | ✔️       | number, string                  | An equivalent to `flex` property on CSS.                                                                      |
| align     | ✔️       | string                          | An equivalent to `align-items` property on CSS.                                                               |
| justify   | ✔️       | string                          | An equivalent to `align-content` property on CSS.                                                             |
| direction | ✔️       | string                          | An equivalent to `flex-direction` property on CSS.                                                            |
| wrap      | ✔️       | string                          | An equivalent to `flex-wrap` property on CSS.                                                                 |
| color     | ✔️       | string                          | An equivalent to `background-color` property on CSS.                                                          |
| radius    | ✔️       | number, string                  | An equivalent to `border-radius` property on CSS.                                                             |
| shadow    | ✔️       | string                          | An equivalent to `box-shadow` property on CSS.                                                                |
| height    | ✔️       | number, string                  | An equivalent to `height` property on CSS.                                                                    |
| width     | ✔️       | number, string                  | An equivalent to `width` property on CSS.                                                                     |
| opacity   | ✔️       | number                          | An equivalent to `opacity` property on CSS.                                                                   |
| padding   | ✔️       | number, string                  | An equivalent to `padding` property on CSS.                                                                   |
| margin    | ✔️       | number, string                  | An equivalent to `margin` property on CSS.                                                                    |
| position  | ✔️       | string                          | An equivalent to `position` property on CSS.                                                                  |
| overflow  | ✔️       | string                          | An equivalent to `overflow` property on CSS.                                                                  |
| display   | ✔️       | string                          | An equivalent to `display` property on CSS.                                                                   |
| border    | ✔️       | string                          | An equivalent to `border` property on CSS.                                                                    |
| layer     | ✔️       | number                          | An equivalent to `z-index` property on CSS.                                                                   |
| image     | ✔️       | string                          | An equivalent to `background-image` property on CSS.                                                          |
| mode      | ✔️       | "margin", "padding", "position" | Set the modes for `top`, `right`, `left` or `bottom`                                                          |
| style     | ✔️       | { [key: string]: unknown }      | Directly pass extra styles as an object.                                                                      |

## Text

| Property  | Optional | Type                            | Description                                                                                                   |
| --------- | -------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| parse     | ✔️       | string                          | A parsing string allowing you to quickly set the style.                                                       |
| css       | ✔️       | string                          | An equivalent of setting `className` property on web.                                                         |
| reference | ✔️       | React.Ref                       | An equivalent of passing the `ref` object.                                                                    |
| press     | ✔️       | () => void                      | An equivalent of `onClick` and `onPress` on native.                                                           |
| pure      | ✔️       | boolean                         | Optionally control whether `CSS` will be disabled. Use this if you don't intend to import the CSS file.       |
| children  | ✔️       | JSX.Element, JSX.Element[]      | ...                                                                                                           |
| native    | ✔️       | { [key: string]: unknown }      | Manually set native component properties using this parameter. Useful if you intend to pass extra parameters. |
| element   | ✔️       | string                          | Optionally use anything other than `div`                                                                      |
| id        | ✔️       | string                          | An equivalent of `id` parameter on web.                                                                       |
| to        | ✔️       | string                          | An equivalent of `href` parameter on web.                                                                     |
| target    | ✔️       | string                          | An equivalent of `target` parameter on web.                                                                   |
| top       | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| left      | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| bottom    | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| right     | ✔️       | number, string                  | Either set position, margin or padding value based on `mode` parameter.                                       |
| flex      | ✔️       | number, string                  | An equivalent to `flex` property on CSS.                                                                      |
| align     | ✔️       | string                          | An equivalent to `align-items` property on CSS.                                                               |
| justify   | ✔️       | string                          | An equivalent to `align-content` property on CSS.                                                             |
| direction | ✔️       | string                          | An equivalent to `flex-direction` property on CSS.                                                            |
| space     | ✔️       | string                          | An equivalent to `white-space` property on CSS.                                                               |
| family    | ✔️       | string                          | An equivalent to `font-family` property on CSS.                                                               |
| color     | ✔️       | string                          | An equivalent to `color` property on CSS.                                                                     |
| height    | ✔️       | number, string                  | An equivalent to `height` property on CSS.                                                                    |
| width     | ✔️       | number, string                  | An equivalent to `width` property on CSS.                                                                     |
| opacity   | ✔️       | number                          | An equivalent to `opacity` property on CSS.                                                                   |
| padding   | ✔️       | number, string                  | An equivalent to `padding` property on CSS.                                                                   |
| margin    | ✔️       | number, string                  | An equivalent to `margin` property on CSS.                                                                    |
| position  | ✔️       | string                          | An equivalent to `position` property on CSS.                                                                  |
| overflow  | ✔️       | string                          | An equivalent to `overflow` property on CSS.                                                                  |
| display   | ✔️       | string                          | An equivalent to `display` property on CSS.                                                                   |
| layer     | ✔️       | number                          | An equivalent to `z-index` property on CSS.                                                                   |
| mode      | ✔️       | "margin", "padding", "position" | Set the modes for `top`, `right`, `left` or `bottom`                                                          |
| style     | ✔️       | { [key: string]: unknown }      | Directly pass extra styles as an object.                                                                      |

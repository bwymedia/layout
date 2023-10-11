# Parsing

Parsing on **Layout** is usually done by a property called `parse`, which directly alters the components styling.

Parsing language follows the following structure, while writing string.

```
key:value key:value
```

All numerical units `em`, `rem`, `px`, `vh`, `vw`, `%` and similars are supported, as these are interpreted by the technology being used. In case no units are being used, a value being numerical would default to `px`, if that specific CSS property supports it, such as `width` and `height` for instance.

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

| CSS Equilevent | JSX Equilevent | Possible Options | Simplified Property | Simplified Options |
| -------- | ------- | ------- | ------- | ------- |
| align-items | alignItems | flex-start, flex-end, center, baseline, stretch | a | fs, fe, c, b, s |
| bottom | bottom | ... | b | ... |
| border-radius | borderRadius | ... | br | ... |
| background-color | backgroundColor | ... | c | ... |
| color | color | ... | tc | ... |
| display | display | flex, block, inline-block, inline | d | f, b, ib, i |
| flex | flex | ... | f | ... |
| flex-direction | flexDirection | row, row-reverse, column, column-reverse | fd | r, rr, c, cr |
| font-size | fontSize | ... | fs | ... |
| height | height | ... | h | ... |
| z-index | zIndex | ... | i | ... |
| justify-content | justifyContent | flex-start, flex-end, center, space-between, space-around | j | fs, fe, c, sb, sa |
| left | left | ... | l | ... |
| line-height | lineHeight | ... | lh | ... |
| margin | margin | ... | ma | ... |
| margin-bottom | marginBottom | ... | mb | ... |
| margin-left | marginLeft | ... | ml | ... |
| min-height | minHeight | ... | mnh | ... |
| min-width | minWidth | ... | mnw | ... |
| margin-right | marginRight | ... | mr | ... |
| margin-top | marginTop | ... | mt | ... |
| max-height | maxHeight | ... | mxh | ... |
| max-width | maxWidth | ... | mxw | ... |
| opacity | opacity | 0, 1 | o | ... |
| overflow | overflow | visible, hidden, scroll, auto | oa | v, h, s, a |
| overflow-x | overflowX | visible, hidden, scroll, auto | ox | v, h, s, a |
| overflow-y | overflowY | visible, hidden, scroll, auto | oy | v, h, s, a |
| position | position | absolute, relative, fixed, static | p | a, r, f, s |
| padding | padding | ... | pa | ... |
| padding-bottom | paddingBottom | ... | pb | ... |
| padding-left | paddingLeft | ... | pl | ... |
| padding-right | paddingRight | ... | pr | ... |
| padding-top | paddingTop | ... | pt | ... |
| right | right | ... | r | ... |
| top | top | ... | t | ... |
| text-align | textAlign | left, center, right | ta | l, c, r |
| width | width | ... | w | ... |
| white-space | whiteSpace | normal, nowrap, pre, pre-wrap, pre-line | ws | n, nw, p, pw, pl |
| flex-wrap | flexWrap | nowrap, wrap, wrap-reverse | fw | n, w, wr |

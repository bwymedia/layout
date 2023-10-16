<a href="https://github.com/bwymedia/layout"><img alt="layout" src="https://raw.githubusercontent.com/bwymedia/layout/master/docs/assets/header.svg"/></a>
<br />

<div align="center"><strong>Simple layout for React & React Native.</strong></div>
<div align="center">Lightweight, customizable and super fast.</div>
<br />
<div align="center">
<a href="https://broadwaymedia.com/">Website</a>
<span> · </span>
<a href="https://github.com/bwymedia/layout">Documentation</a>
<span> · </span>
<a href="https://www.instagram.com/broadwaymedia/">Instagram</a>
</div>
<br />
<div align="center">
  <sub>Made by <a href="https://broadwaymedia.com/">Broadway Media</a>‍</sub>
</div>
<br />

# Installing Visual Studio Code Extension

**Layout** includes Visual Code Extension to allow you to quickly write parsing markup and helps the autocompletion for javascript and typescript files.

```bash
npm run scripts:install:code:extension
```

# Getting started

```bash
# via yarn
yarn add @broadwaymedia/layout

# via npm
npm install --save @broadwaymedia/layout
```

# Usage

**Layout** serves as a versatile component that mimics the behavior of both HTML `<div>` elements in web development and React Native's `<View>`. It empowers developers to write code in a minimalistic notation, streamlining the development process and ensuring cross-platform compatibility.

<a href="https://github.com/bwymedia/layout/blob/master/docs/properties.md">Full Guide on Properties</a>

```jsx
import { Box } from "@broadwaymedia/layout";

ReactDOM.render(
  <Box
    width="100%"
    height="100%"
    display="flex"
    align="center"
    justify="center"
  >
    <Box
      padding={20}
      width={200}
      border="1px solid #DDDDDD"
      display="inline-flex"
      direction="column"
    >
      <b>John Doe</b>
      <small>@username</small>
    </Box>
  </Box>,
  document.getElementById("root")
);
```

# Advanced Usage

**Layout** offers robust parsing capabilities, empowering you to swiftly craft common style definitions with a minimalistic syntax. It also affords the flexibility to create extensive style configurations. Below is an example illustrating how to express the CSS equivalent of `align-items: center` using this parsing tool.

### Leveraging Direct Properties and Values

```jsx
<Box parse="align-items:center" />
```

### Streamlining with Minimalistic Notation

```jsx
<Box parse="a:center" />
```

### Ultra-Simplified Approach

```jsx
<Box parse="a:c" />
```

This approach not only enhances developer productivity but also eliminates concerns about cross-platform compatibility.

<a href="https://github.com/bwymedia/layout/blob/master/docs/parsing.md">Full Guide on Parsing</a>

```jsx
import { Box } from "@broadwaymedia/layout";

ReactDOM.render(
  <Box parse="w:100% h:100% d:f a:c j:c">
    <Box parse="pa:20 br:10 d:if fd:c w:200" border="1px solid #DDDDDD">
      <b>John Doe</b>
      <small>@username</small>
    </Box>
  </Box>,
  document.getElementById("root")
);
```

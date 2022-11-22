# useScreenshotableDiv

## Usage

`useScreenshotableDiv` returns:

- `ScreenshotableDiv` a div that can render children
- A function which can be called to download an image in a specified `supportedFormat`

```js
const [ScreenshotableDiv, takeScreenshot] = useScreenshotableDiv();
```

Now callers can leverage like so:

```js
(
  <>
    <button onClick={() => takeScreenshot("PNG")}>TAKE SCREENSHOT</button>
    <ScreenshotableDiv>
      <p>Say cheese</p>
    </ScreenshotableDiv>
  </>
)``;
```

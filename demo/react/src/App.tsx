import { Box } from "../../../lib/components/Box";
import "../../../css/layout.css";
import { useState } from "react";

function App() {
  const [code, _code] = useState("d:block c:#1E242D pa:20");

  const items: string[] = code?.split(" ") || [];

  return (
    <>
      <Box css="pa:96">
        <h1>Layout Sandbox</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          eros viverra, tincidunt urna cursus, mollis tellus. Donec imperdiet
          ornare nisi sed luctus. Donec dictum ex pretium purus fringilla
          elementum. In eget consectetur nisl, nec mollis nisl. Nunc sed rutrum
          dui. Suspendisse sit amet justo auctor, lacinia erat at, tincidunt
          tortor. Aliquam neque odio, varius ut urna a, ornare posuere leo.
          Phasellus vel semper orci, et pulvinar sem.
        </p>
        <Box parse="ml:-24 mr:-24" css="d:flex">
          <Box css="mr:24 ml:24" parse="f:1">
            <h2>Goal</h2>
            <Box parse="d:flex pa:10 br:8" color="#011627">
              <Box parse="w:15 ta:right d:flex fd:column color:#ADAACC mr:10">
                <small>1</small>
                <small>2</small>
                <small>3</small>
                <small>4</small>
                <small>5</small>
                <small>6</small>
                <small>7</small>
                <small>8</small>
                <small>9</small>
                <small>10</small>
                <small>11</small>
                <small>12</small>
                <small>13</small>
              </Box>
              <Box parse="f:1 d:flex fd:column">
                <small>
                  <div>
                    <span className="purple">color</span>{" "}
                    <span className="grey">:</span>{" "}
                    <span className="yellow">#1E242D</span>
                  </div>
                  <div>
                    <span className="purple">display</span>{" "}
                    <span className="grey">:</span>{" "}
                    <span className="yellow">flex</span>
                  </div>
                  <div>
                    <span className="purple">align-items</span>{" "}
                    <span className="grey">:</span>{" "}
                    <span className="yellow">center</span>
                  </div>
                  <div>
                    <span className="purple">justify-content</span>{" "}
                    <span className="grey">:</span>{" "}
                    <span className="yellow">center</span>
                  </div>
                  <div>
                    <span className="purple">height</span>{" "}
                    <span className="grey">:</span>{" "}
                    <span className="yellow">100%</span>
                  </div>
                </small>
              </Box>
            </Box>
          </Box>
          <Box css="mr:24 ml:24" parse="f:1">
            <h2>Sandbox</h2>
            <Box parse="d:flex pa:10 br:8" color="#011627">
              <Box parse="w:15 ta:right d:flex fd:column color:#ADAACC mr:10">
                <small>1</small>
                <small>2</small>
                <small>3</small>
                <small>4</small>
                <small>5</small>
                <small>6</small>
                <small>7</small>
                <small>8</small>
                <small>9</small>
                <small>10</small>
                <small>11</small>
                <small>12</small>
                <small>13</small>
              </Box>
              <Box parse="f:1 d:flex fd:column">
                <small>
                  <div>
                    <span className="purple">import</span>{" "}
                    <span className="yellow">{`{ Box }`}</span>{" "}
                    <span className="purple">from</span>{" "}
                    <span className="yellow">"@broadwaymedia/layout"</span>
                  </div>
                  <div>
                    <span className="invisible">space</span>
                  </div>
                  <div>
                    <span className="blue">{`<`}</span>
                    <span className="red">Screen</span>
                    <span className="blue">{`>`}</span>
                  </div>
                  <div>
                    <span className="tab">tab</span>
                    <span className="blue">{`<`}</span>
                    <span className="red">Box</span>{" "}
                    <span className="green">parse</span>
                    <span className="grey">=</span>
                    <span className="yellow">
                      "
                      <span
                        contentEditable={true}
                        onInput={(e) =>
                          _code(e.currentTarget.textContent as string)
                        }
                      >
                        d:block c:#1E242D pa:20
                      </span>
                      "
                    </span>
                    <span className="blue">{`>`}</span>
                  </div>
                  <div>
                    <span className="tab">tab</span>
                    <span className="tab">tab</span>
                    <span className="blue">{`</`}</span>
                    <span className="red">Element</span>
                    <span className="blue">{`>`}</span>
                  </div>
                  <div>
                    <span className="tab">tab</span>
                    <span className="blue">{`</`}</span>
                    <span className="red">Box</span>
                    <span className="blue">{`>`}</span>
                  </div>
                  <div>
                    <span className="blue">{`</`}</span>
                    <span className="red">Screen</span>
                    <span className="blue">{`>`}</span>
                  </div>
                </small>
              </Box>
            </Box>
          </Box>

          <Box css="mr:24 ml:24" parse="f:1">
            <h2>Result</h2>

            <Box parse="c:#0E1115 h:228 oa:hidden br:8">
              <Box parse={code} radius={4}>
                <Box>
                  Content
                </Box>
              </Box>
            </Box>

            <h4>Tests</h4>
            <Box parse="d:flex fw:wrap ml:-12 mr:-12">
              <span
                className={
                  items?.includes("c:#1E242D") ||
                  items?.includes("background-color:#1E242D")
                    ? "test green"
                    : "test grey"
                }
              >
                Color
              </span>
              <span
                className={
                  items?.includes("d:flex") ||
                  items?.includes("d:f") ||
                  items?.includes("display:flex")
                    ? "test green"
                    : "test grey"
                }
              >
                Display
              </span>
              <span
                className={
                  items?.includes("a:center") ||
                  items?.includes("a:c") ||
                  items?.includes("align-items:center")
                    ? "test green"
                    : "test grey"
                }
              >
                Align Items
              </span>
              <span
                className={
                  items?.includes("j:center") ||
                  items?.includes("j:c") ||
                  items?.includes("justify-content:center")
                    ? "test green"
                    : "test grey"
                }
              >
                Justify Content
              </span>
              <span
                className={
                  items?.includes("h:100%") || items?.includes("height:100%")
                    ? "test green"
                    : "test grey"
                }
              >
                Height
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;

// Text_Color_Letters — module Framer compilé, bundlé par Obsidian Export

// http-url:https://framerusercontent.com/modules/Wc0lBNgttGa3fH6xuXHs/CjML5xOKnxJhbcHn4E1F/Reveal_Text.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "unframer";
import { motion, useScroll, useTransform } from "unframer";
import { useRef, useEffect } from "react";
var EachCharacter = ({ char, start, end, progress, duration, easing, index, transitionStartIndex }) => {
  const colorProgress = useTransform(progress, [start, end], ["#808080", "#eeeeee"]);
  const initialColor = index < transitionStartIndex ? "#eeeeee" : "#808080";
  return /* @__PURE__ */ _jsx(motion.span, { style: { color: index < transitionStartIndex ? initialColor : colorProgress }, transition: { duration, ease: easing }, children: char });
};
var EachWord = ({ word, progress, starting, ending, duration, easing, transitionStartIndex, currentCharacterIndex }) => {
  const characters = word.split("");
  const wordLength = word.length;
  const amount = ending - starting;
  const step = amount / wordLength;
  return /* @__PURE__ */ _jsxs(motion.span, { children: [characters.map((char, idx) => {
    const charStart = starting + step * idx;
    const charEnd = starting + step * (idx + 1);
    return /* @__PURE__ */ _jsx(EachCharacter, { char, start: charStart, end: charEnd, progress, duration, easing, index: currentCharacterIndex + idx, transitionStartIndex }, idx);
  }), "\xA0"] });
};
function Text_Color_Letters(props) {
  const { text, duration, easing, fontSize, lineHeight, letterSpacing, textAlign, transitionStartIndex, fontFamily } = props;
  const words = text.split(" ");
  const totalWords = words.length;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "start 0.15"] });
  useEffect(() => {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(`
                @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap');
            `));
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  let currentCharacterIndex = 0;
  return /* @__PURE__ */ _jsx("p", { ref, style: { fontFamily: fontFamily?.fontFamily || "Urbanist", fontSize: `${fontSize}px`, fontWeight: fontFamily?.fontWeight || 400, color: "#FFFFFF", display: "flex", flexWrap: "wrap", lineHeight: `${lineHeight}px`, letterSpacing: `${letterSpacing}px`, justifyContent: textAlign, margin: 0 }, children: words.map((word, idx) => {
    const starting = idx / totalWords;
    const ending = (idx + 1) / totalWords;
    const wordLength = word.length;
    const startIdx = currentCharacterIndex;
    currentCharacterIndex += wordLength + 1;
    return /* @__PURE__ */ _jsx(EachWord, { word, progress: scrollYProgress, starting, ending, duration, easing, transitionStartIndex, currentCharacterIndex: startIdx }, idx);
  }) });
}
addPropertyControls(Text_Color_Letters, { text: { title: "Text", type: ControlType.String, defaultValue: "Hello Text", displayTextArea: true }, fontFamily: { title: "Font Family", type: ControlType.Font }, fontSize: { title: "Font Size", type: ControlType.Number, defaultValue: 48, min: 10, max: 100 }, lineHeight: { title: "Line Height", type: ControlType.Number, defaultValue: 60, min: 10, max: 100 }, letterSpacing: { title: "Letter Spacing", type: ControlType.Number, defaultValue: -3, min: -10, max: 10 }, textAlign: { title: "Text Align", type: ControlType.Enum, options: ["left", "center", "right"], optionTitles: ["Left", "Center", "Right"], defaultValue: "left" }, duration: { title: "Duration", type: ControlType.Number, defaultValue: 0.3, min: 0.1, max: 3, step: 0.1 }, easing: { title: "Easing", type: ControlType.Enum, options: ["easeInOut", "easeIn", "easeOut", "linear"], optionTitles: ["Ease In Out", "Ease In", "Ease Out", "Linear"], defaultValue: "easeInOut" }, transitionStartIndex: { title: "Transition Start Index", type: ControlType.Number, defaultValue: 22, min: 0, max: 1e3 } });
export {
  Text_Color_Letters as default
};

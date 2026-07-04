// Team Cards — module Framer compilé, bundlé par Obsidian Export

// http-url:https://framerusercontent.com/modules/7SWPZ9nm2yu7UKEFOr9B/a9i46ZxNtQUOJ79n1NJT/Ism9jraCN.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx2, forwardLoader, getFonts, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "unframer";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "unframer";
import * as React2 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/yCImoe7N6FDrwtjU8MPe/SlideShow.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resize } from "@motionone/dom";
import { addPropertyControls, ControlType, RenderTarget } from "unframer";
import { animate, LayoutGroup, mix, motion, frame, useInView, useMotionValue, useTransform, wrap, usePageInView } from "unframer";
import { Children, cloneElement, forwardRef, memo, startTransition, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
function awaitRefCallback(element, controller) {
  let refCallbackResolve;
  let current = element.current;
  Object.defineProperty(element, "current", { get() {
    return current;
  }, set(node) {
    current = node;
    if (node === null) {
      controller.abort();
      return;
    }
    refCallbackResolve?.(node);
  }, configurable: true });
  if (current) return current;
  const refCallbackPromise = new Promise((resolve, reject) => {
    refCallbackResolve = resolve;
    controller.signal.addEventListener("abort", reject);
  }).catch(() => {
  });
  return refCallbackPromise;
}
var OPACITY_0 = 1e-3;
function Slideshow(props) {
  const { slots = [], startFrom, direction, effectsOptions, autoPlayControl, dragControl, alignment, gap, padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft, itemAmount, fadeOptions, intervalControl, transitionControl, arrowOptions, borderRadius, progressOptions, style } = props;
  const { effectsOpacity, effectsScale, effectsRotate, effectsPerspective, effectsHover, playOffscreen } = effectsOptions;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha } = fadeOptions;
  const { showMouseControls, arrowSize, arrowRadius, arrowFill, leftArrow, rightArrow, arrowShouldSpace = true, arrowShouldFadeIn = false, arrowPosition, arrowPadding, arrowGap, arrowPaddingTop, arrowPaddingRight, arrowPaddingBottom, arrowPaddingLeft } = arrowOptions;
  const { showProgressDots, dotSize, dotsInset, dotsRadius, dotsPadding, dotsGap, dotsFill, dotsBackground, dotsActiveOpacity, dotsOpacity, dotsBlur } = progressOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const filteredSlots = slots.filter(Boolean);
  const amountChildren = Children.count(filteredSlots);
  const hasChildren = amountChildren > 0;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs("section", { style: placeholderStyles, children: [/* @__PURE__ */ _jsx("div", { style: emojiStyles, children: "\u2B50\uFE0F" }), /* @__PURE__ */ _jsx("p", { style: titleStyles, children: "Connect to Content" }), /* @__PURE__ */ _jsx("p", { style: subtitleStyles, children: "Add layers or components to make infinite auto-playing slideshows." })] });
  }
  const parentRef = useRef(null);
  const childrenRef = useMemo(() => {
    return [{ current: null }, { current: null }];
  }, [filteredSlots]);
  const timeoutRef = useRef(void 0);
  const [size, setSize] = useState({ parent: null, children: null, item: null, itemWidth: null, itemHeight: null, viewportLength: null });
  const writingDirection = useWritingDirection();
  const resolvedDirection = getSlideshowResolvedDirection(direction, writingDirection);
  const isHorizontal = resolvedDirection === "left" || resolvedDirection === "right";
  const isInverted = resolvedDirection === "right" || resolvedDirection === "bottom";
  const rtlDirectionModifier = isHorizontal && writingDirection === "rtl" ? -1 : 1;
  const [isHovering, setIsHovering] = useState(false);
  const [shouldPlayOnHover, setShouldPlayOnHover] = useState(autoPlayControl);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  let dupedChildren = [];
  let duplicateBy = 4;
  if (isCanvas) {
    duplicateBy = 1;
  }
  const measure = useCallback(() => {
    if (!parentRef.current) return;
    const isRTL = isHorizontal && childrenRef[0].current && childrenRef[1].current && childrenRef[1].current.offsetLeft < childrenRef[0].current.offsetLeft;
    const firstChild = isRTL ? childrenRef[1].current : childrenRef[0].current;
    const lastChild = isRTL ? childrenRef[0].current : childrenRef[1].current;
    const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
    const start = firstChild ? isHorizontal ? firstChild.offsetLeft : firstChild.offsetTop : 0;
    const end = lastChild ? isHorizontal ? lastChild.offsetLeft + lastChild.offsetWidth : lastChild.offsetTop + lastChild.offsetHeight : 0;
    const childrenLength = end - start + gap;
    const itemSize = firstChild ? isHorizontal ? firstChild.offsetWidth : firstChild.offsetHeight : 0;
    const itemWidth = firstChild ? firstChild.offsetWidth : 0;
    const itemHeight = firstChild ? firstChild.offsetHeight : 0;
    const viewportLength = isHorizontal ? Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0, parentRef.current.offsetWidth) : Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0, parentRef.current.offsetHeight);
    setSize({ parent: parentLength, children: childrenLength, item: itemSize, itemWidth, itemHeight, viewportLength });
  }, []);
  const scheduleMeasure = useCallback(async () => {
    const controller = new AbortController();
    const [firstChild, lastChild] = childrenRef;
    if (!isCanvas && (!firstChild.current || !lastChild.current)) try {
      await Promise.all([awaitRefCallback(firstChild, controller), amountChildren > 1 ? awaitRefCallback(lastChild, controller) : true]);
    } catch {
      controller.abort();
    }
    frame.read(measure, false, true);
  }, [measure]);
  useLayoutEffect(() => {
    scheduleMeasure();
  }, [itemAmount]);
  const initialResize = useRef(true);
  useEffect(() => {
    return resize(parentRef.current, ({ contentSize }) => {
      if (!initialResize.current && (contentSize.width || contentSize.height)) {
        scheduleMeasure();
        startTransition(() => setIsResizing(true));
      }
      initialResize.current = false;
    });
  }, []);
  useEffect(() => {
    if (isResizing) {
      const timer = setTimeout(() => startTransition(() => setIsResizing(false)), 500);
      return () => clearTimeout(timer);
    }
  }, [isResizing]);
  const totalItems = filteredSlots?.length;
  const childrenSize = isCanvas ? 0 : size?.children;
  const itemWithGap = size?.item + gap;
  const itemOffset = startFrom * itemWithGap;
  const [currentItem, setCurrentItem] = useState(startFrom + totalItems);
  const [isDragging, setIsDragging] = useState(false);
  if (isCanvas) {
    if (currentItem !== startFrom) {
      setCurrentItem(startFrom);
    }
  }
  const visibilityRef = useRef(null);
  const isInView = useInView(visibilityRef);
  const isVisible = usePageInView() && isInView;
  const factor = isInverted ? 1 : -1;
  const xOrY = useMotionValue(childrenSize);
  const canvasPosition = isHorizontal ? -startFrom * (size?.itemWidth + gap) : -startFrom * (size?.itemHeight + gap);
  const newPosition = () => factor * currentItem * itemWithGap;
  const wrappedValue = !isCanvas ? useTransform(xOrY, (value) => {
    const wrapped = wrap(-childrenSize * rtlDirectionModifier, -childrenSize * rtlDirectionModifier * 2, value * rtlDirectionModifier);
    return isNaN(wrapped) ? 0 : wrapped;
  }) : 0;
  const wrappedIndex = wrap(0, totalItems, currentItem);
  const wrappedIndexInverted = wrap(0, -totalItems, currentItem);
  useLayoutEffect(() => {
    if (size?.children === null) return;
    if (!initialResize.current && isResizing) {
      xOrY.set(newPosition());
    }
  }, [size, childrenSize, factor, itemOffset, currentItem, itemWithGap, isResizing]);
  const switchPages = () => {
    if (isCanvas || !hasChildren || !size.parent || isDragging) return;
    if (xOrY.get() !== newPosition()) {
      animate(xOrY, newPosition(), transitionControl);
    }
    if (autoPlayControl && shouldPlayOnHover && (playOffscreen || isVisible)) {
      timeoutRef.current = setTimeout(() => {
        startTransition(() => setCurrentItem((item) => item + 1 * rtlDirectionModifier));
        switchPages();
      }, intervalControl * 1e3);
    }
  };
  const setDelta = (delta, transition = false) => {
    if (!isInverted) {
      if (transition) startTransition(() => setCurrentItem((item) => item + delta));
      else setCurrentItem((item) => item + delta);
    } else {
      if (transition) startTransition(() => setCurrentItem((item) => item - delta));
      else setCurrentItem((item) => item - delta);
    }
  };
  const setPage = (index) => {
    const currentItemWrapped = wrap(0, totalItems, currentItem);
    const currentItemWrappedInvert = wrap(0, -totalItems, currentItem);
    const goto = index - currentItemWrapped;
    const gotoInverted = index - Math.abs(currentItemWrappedInvert);
    if (!isInverted) {
      startTransition(() => setCurrentItem((item) => item + goto));
    } else {
      startTransition(() => setCurrentItem((item) => item - gotoInverted));
    }
  };
  const handleDragStart = () => {
    startTransition(() => setIsDragging(true));
  };
  const handleDragEnd = (event, { offset, velocity }) => {
    startTransition(() => setIsDragging(false));
    const offsetXorY = isHorizontal ? offset.x : offset.y;
    const velocityThreshold = 200;
    const velocityXorY = isHorizontal ? velocity.x : velocity.y;
    const isHalfOfNext = offsetXorY < -size.item / 2;
    const isHalfOfPrev = offsetXorY > size.item / 2;
    const normalizedOffset = Math.abs(offsetXorY);
    const itemDelta = Math.round(normalizedOffset / size.item);
    const itemDeltaFromOne = itemDelta === 0 ? 1 : itemDelta;
    if (velocityXorY > velocityThreshold) {
      setDelta(-itemDeltaFromOne * rtlDirectionModifier, true);
    } else if (velocityXorY < -velocityThreshold) {
      setDelta(itemDeltaFromOne * rtlDirectionModifier, true);
    } else {
      if (isHalfOfNext) {
        setDelta(itemDelta * rtlDirectionModifier, true);
      }
      if (isHalfOfPrev) {
        setDelta(-itemDelta * rtlDirectionModifier, true);
      }
    }
  };
  useEffect(() => {
    if (!isVisible || isResizing || amountChildren <= 1) return;
    switchPages();
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [dupedChildren, isVisible, isResizing]);
  let childCounter = 0;
  const columnOrRowValue = `calc(${100 / itemAmount}% - ${gap}px + ${gap / itemAmount}px)`;
  for (let index = 0; index < duplicateBy; index++) {
    dupedChildren = dupedChildren.concat(Children.map(filteredSlots, (child, childIndex) => {
      let ref;
      if (index === 0) {
        if (childIndex === 0) {
          ref = childrenRef[0];
        } else if (childIndex === filteredSlots.length - 1) {
          ref = childrenRef[1];
        }
      }
      return /* @__PURE__ */ _jsx(Slide, { ref, slideKey: index + childIndex + "lg", index, width: isHorizontal ? itemAmount > 1 ? columnOrRowValue : "100%" : "100%", height: !isHorizontal ? itemAmount > 1 ? columnOrRowValue : "100%" : "100%", size, child, numChildren: filteredSlots?.length, wrappedValue, childCounter: childCounter++, gap, isCanvas, isHorizontal, effectsOpacity, effectsScale, effectsRotate, directionModifier: rtlDirectionModifier, children: index + childIndex }, index + childIndex + "lg");
    }));
  }
  const fadeDirection = isHorizontal ? "to right" : "to bottom";
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask = `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  const dots = [];
  const dotsBlurStyle = {};
  if (showProgressDots) {
    for (let i = 0; i < filteredSlots?.length; i++) {
      dots.push(/* @__PURE__ */ _jsx(Dot, { dotStyle: { ...dotStyle, width: dotSize, height: dotSize, backgroundColor: dotsFill }, buttonStyle: baseButtonStyles, selectedOpacity: dotsActiveOpacity, opacity: dotsOpacity, onClick: () => setPage(i), wrappedIndex, wrappedIndexInverted, total: totalItems, index: i, gap: dotsGap, padding: dotsPadding, isHorizontal, isInverted }, i));
    }
    if (dotsBlur > 0) {
      dotsBlurStyle.backdropFilter = dotsBlurStyle.WebkitBackdropFilter = `blur(${dotsBlur}px)`;
    }
  }
  const dragProps = dragControl ? { drag: isHorizontal ? "x" : "y", onDragStart: handleDragStart, onDragEnd: handleDragEnd, dragDirectionLock: true, values: { x: writingDirection === "rtl" ? -xOrY : xOrY, y: xOrY }, dragMomentum: false } : {};
  const arrowHasTop = arrowPosition === "top-left" || arrowPosition === "top-mid" || arrowPosition === "top-right";
  const arrowHasBottom = arrowPosition === "bottom-left" || arrowPosition === "bottom-mid" || arrowPosition === "bottom-right";
  const arrowHasLeft = arrowPosition === "top-left" || arrowPosition === "bottom-left";
  const arrowHasRight = arrowPosition === "top-right" || arrowPosition === "bottom-right";
  const arrowHasMid = arrowPosition === "top-mid" || arrowPosition === "bottom-mid" || arrowPosition === "auto";
  const leftArrowSrc = leftArrow || "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left";
  const rightArrowSrc = rightArrow || "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right";
  return /* @__PURE__ */ _jsxs("section", { style: { ...containerStyle, padding: paddingValue, WebkitMaskImage: fadeContent ? fadeMask : void 0, maskImage: fadeContent ? fadeMask : void 0, opacity: size?.item !== null ? 1 : OPACITY_0, userSelect: "none" }, onMouseEnter: () => {
    setIsHovering(true);
    if (!effectsHover) setShouldPlayOnHover(false);
  }, onMouseLeave: () => {
    setIsHovering(false);
    if (!effectsHover) setShouldPlayOnHover(true);
  }, onMouseDown: (event) => {
    event.preventDefault();
    startTransition(() => setIsMouseDown(true));
  }, onMouseUp: () => startTransition(() => setIsMouseDown(false)), ref: visibilityRef, children: [/* @__PURE__ */ _jsx("div", { style: { width: "100%", height: "100%", margin: 0, padding: "inherit", position: "absolute", inset: 0, overflow: overflow ? "visible" : "hidden", borderRadius, userSelect: "none", perspective: isCanvas ? "none" : effectsPerspective }, children: /* @__PURE__ */ _jsx(motion.ul, { ref: parentRef, ...dragProps, style: { ...containerStyle, gap, placeItems: alignment, x: isHorizontal ? isCanvas ? canvasPosition : wrappedValue : 0, y: !isHorizontal ? isCanvas ? canvasPosition : wrappedValue : 0, flexDirection: isHorizontal ? "row" : "column", transformStyle: effectsRotate !== 0 && !isCanvas ? "preserve-3d" : void 0, cursor: dragControl ? isMouseDown ? "grabbing" : "grab" : "auto", userSelect: "none", ...style }, children: dupedChildren }) }), /* @__PURE__ */ _jsxs("fieldset", { style: { ...controlsStyles }, "aria-label": "Slideshow pagination controls", className: "framer--slideshow-controls", children: [/* @__PURE__ */ _jsxs(motion.div, { style: { position: "absolute", display: "flex", flexDirection: isHorizontal ? "row" : "column", justifyContent: arrowShouldSpace ? "space-between" : "center", gap: arrowShouldSpace ? "unset" : arrowGap, opacity: arrowShouldFadeIn ? OPACITY_0 : 1, alignItems: "center", inset: arrowPadding, top: arrowShouldSpace ? arrowPadding : arrowHasTop ? arrowPaddingTop : "unset", left: arrowShouldSpace ? arrowPadding : arrowHasLeft ? arrowPaddingLeft : arrowHasMid ? 0 : "unset", right: arrowShouldSpace ? arrowPadding : arrowHasRight ? arrowPaddingRight : arrowHasMid ? 0 : "unset", bottom: arrowShouldSpace ? arrowPadding : arrowHasBottom ? arrowPaddingBottom : "unset" }, animate: arrowShouldFadeIn && { opacity: isHovering ? 1 : OPACITY_0 }, transition: transitionControl, children: [/* @__PURE__ */ _jsx(motion.button, { type: "button", style: { ...baseButtonStyles, backgroundColor: arrowFill, width: arrowSize, height: arrowSize, borderRadius: arrowRadius, rotate: !isHorizontal ? 90 : 0, display: showMouseControls ? "block" : "none", pointerEvents: "auto" }, onClick: () => setDelta(-1, true), "aria-label": "Previous", whileTap: { scale: 0.9 }, transition: { duration: 0.15 }, children: /* @__PURE__ */ _jsx("img", { decoding: "async", width: arrowSize, height: arrowSize, src: isHorizontal && writingDirection === "rtl" ? rightArrowSrc : leftArrowSrc, alt: "Back Arrow" }) }), /* @__PURE__ */ _jsx(motion.button, { type: "button", style: { ...baseButtonStyles, backgroundColor: arrowFill, width: arrowSize, height: arrowSize, borderRadius: arrowRadius, rotate: !isHorizontal ? 90 : 0, display: showMouseControls ? "block" : "none", pointerEvents: "auto" }, onClick: () => setDelta(1, true), "aria-label": "Next", whileTap: { scale: 0.9 }, transition: { duration: 0.15 }, children: /* @__PURE__ */ _jsx("img", { decoding: "async", width: arrowSize, height: arrowSize, src: isHorizontal && writingDirection === "rtl" ? leftArrowSrc : rightArrowSrc, alt: "Next Arrow" }) })] }), dots.length > 1 ? /* @__PURE__ */ _jsx("div", { style: { ...dotsContainerStyle, left: isHorizontal ? "50%" : dotsInset, top: !isHorizontal ? "50%" : "unset", transform: isHorizontal ? "translateX(-50%)" : "translateY(-50%)", flexDirection: isHorizontal ? "row" : "column", bottom: isHorizontal ? dotsInset : "unset", borderRadius: dotsRadius, backgroundColor: dotsBackground, userSelect: "none", ...dotsBlurStyle }, children: dots }) : null] })] });
}
Slideshow.defaultProps = { direction: "left", dragControl: false, startFrom: 0, itemAmount: 1, infinity: true, gap: 10, padding: 10, autoPlayControl: true, effectsOptions: { effectsOpacity: 1, effectsScale: 1, effectsRotate: 0, effectsPerspective: 1200, effectsHover: true, playOffscreen: false }, transitionControl: { type: "spring", stiffness: 200, damping: 40 }, fadeOptions: { fadeContent: false, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 }, arrowOptions: { showMouseControls: true, arrowShouldFadeIn: false, arrowShouldSpace: true, arrowFill: "rgba(0,0,0,0.2)", arrowSize: 40 }, progressOptions: { showProgressDots: true } };
addPropertyControls(Slideshow, { slots: { type: ControlType.Array, title: "Content", control: { type: ControlType.ComponentInstance } }, direction: { type: ControlType.Enum, title: "Direction", options: ["left", "right", "top", "bottom"], optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"], optionTitles: ["Left", "Right", "Top", "Bottom"], displaySegmentedControl: true, defaultValue: Slideshow.defaultProps.direction }, autoPlayControl: { type: ControlType.Boolean, title: "Auto Play", defaultValue: true }, intervalControl: { type: ControlType.Number, title: "Interval", defaultValue: 1.5, min: 0.5, max: 10, step: 0.1, displayStepper: true, unit: "s", hidden: (props) => !props.autoPlayControl }, dragControl: { type: ControlType.Boolean, title: "Draggable", defaultValue: false }, startFrom: { type: ControlType.Number, title: "Current", min: 0, max: 10, displayStepper: true, defaultValue: Slideshow.defaultProps.startFrom }, effectsOptions: { type: ControlType.Object, title: "Effects", controls: { effectsOpacity: { type: ControlType.Number, title: "Opacity", defaultValue: Slideshow.defaultProps.effectsOptions.effectsOpacity, min: 0, max: 1, step: 0.01, displayStepper: true }, effectsScale: { type: ControlType.Number, title: "Scale", defaultValue: Slideshow.defaultProps.effectsOptions.effectsScale, min: 0, max: 1, step: 0.01, displayStepper: true }, effectsPerspective: { type: ControlType.Number, title: "Perspective", defaultValue: Slideshow.defaultProps.effectsOptions.effectsPerspective, min: 200, max: 2e3, step: 1 }, effectsRotate: { type: ControlType.Number, title: "Rotate", defaultValue: Slideshow.defaultProps.effectsOptions.effectsRotate, min: -180, max: 180, step: 1 }, effectsHover: { type: ControlType.Boolean, title: "On Hover", enabledTitle: "Play", disabledTitle: "Pause", defaultValue: Slideshow.defaultProps.effectsOptions.effectsHover }, playOffscreen: { type: ControlType.Boolean, title: "Offscreen", enabledTitle: "Play", disabledTitle: "Pause", defaultValue: Slideshow.defaultProps.effectsOptions.playOffscreen } } }, alignment: { type: ControlType.Enum, title: "Align", options: ["flex-start", "center", "flex-end"], optionIcons: { direction: { right: ["align-top", "align-middle", "align-bottom"], left: ["align-top", "align-middle", "align-bottom"], top: ["align-left", "align-center", "align-right"], bottom: ["align-left", "align-center", "align-right"] } }, defaultValue: "center", displaySegmentedControl: true }, itemAmount: { type: ControlType.Number, title: "Items", min: 1, max: 10, displayStepper: true, defaultValue: Slideshow.defaultProps.itemAmount }, gap: { type: ControlType.Number, title: "Gap", min: 0 }, padding: { title: "Padding", type: ControlType.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], defaultValue: 0, valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0 }, borderRadius: { type: ControlType.Number, title: "Radius", min: 0, max: 500, displayStepper: true, defaultValue: 0 }, transitionControl: { type: ControlType.Transition, defaultValue: Slideshow.defaultProps.transitionControl, title: "Transition" }, fadeOptions: { type: ControlType.Object, title: "Clipping", controls: { fadeContent: { type: ControlType.Boolean, title: "Fade", defaultValue: false }, overflow: { type: ControlType.Boolean, title: "Overflow", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: false, hidden(props) {
  return props.fadeContent === true;
} }, fadeWidth: { type: ControlType.Number, title: "Width", defaultValue: 25, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeInset: { type: ControlType.Number, title: "Inset", defaultValue: 0, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeAlpha: { type: ControlType.Number, title: "Opacity", defaultValue: 0, min: 0, max: 1, step: 0.05, hidden(props) {
  return props.fadeContent === false;
} } } }, arrowOptions: { type: ControlType.Object, title: "Arrows", controls: { showMouseControls: { type: ControlType.Boolean, title: "Show", defaultValue: Slideshow.defaultProps.arrowOptions.showMouseControls }, arrowFill: { type: ControlType.Color, title: "Fill", hidden: (props) => !props.showMouseControls, defaultValue: Slideshow.defaultProps.arrowOptions.arrowFill }, leftArrow: { type: ControlType.Image, title: "Previous", hidden: (props) => !props.showMouseControls }, rightArrow: { type: ControlType.Image, title: "Next", hidden: (props) => !props.showMouseControls }, arrowSize: { type: ControlType.Number, title: "Size", min: 0, max: 200, displayStepper: true, defaultValue: Slideshow.defaultProps.arrowOptions.arrowSize, hidden: (props) => !props.showMouseControls }, arrowRadius: { type: ControlType.Number, title: "Radius", min: 0, max: 500, defaultValue: 40, hidden: (props) => !props.showMouseControls }, arrowShouldFadeIn: { type: ControlType.Boolean, title: "Fade In", defaultValue: false, hidden: (props) => !props.showMouseControls }, arrowShouldSpace: { type: ControlType.Boolean, title: "Distance", enabledTitle: "Space", disabledTitle: "Group", defaultValue: Slideshow.defaultProps.arrowOptions.arrowShouldSpace, hidden: (props) => !props.showMouseControls }, arrowPosition: { type: ControlType.Enum, title: "Position", options: ["auto", "top-left", "top-mid", "top-right", "bottom-left", "bottom-mid", "bottom-right"], optionTitles: ["Center", "Top Left", "Top Middle", "Top Right", "Bottom Left", "Bottom Middle", "Bottom Right"], hidden: (props) => !props.showMouseControls || props.arrowShouldSpace }, arrowPadding: { type: ControlType.Number, title: "Inset", min: -100, max: 100, defaultValue: 20, displayStepper: true, hidden: (props) => !props.showMouseControls || !props.arrowShouldSpace }, arrowPaddingTop: { type: ControlType.Number, title: "Top", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "bottom-mid" || props.arrowPosition === "bottom-left" || props.arrowPosition === "bottom-right" }, arrowPaddingBottom: { type: ControlType.Number, title: "Bottom", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "top-mid" || props.arrowPosition === "top-left" || props.arrowPosition === "top-right" }, arrowPaddingRight: { type: ControlType.Number, title: "Right", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "top-left" || props.arrowPosition === "top-mid" || props.arrowPosition === "bottom-left" || props.arrowPosition === "bottom-mid" }, arrowPaddingLeft: { type: ControlType.Number, title: "Left", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "top-right" || props.arrowPosition === "top-mid" || props.arrowPosition === "bottom-right" || props.arrowPosition === "bottom-mid" }, arrowGap: { type: ControlType.Number, title: "Gap", min: 0, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace } } }, progressOptions: { type: ControlType.Object, title: "Dots", controls: { showProgressDots: { type: ControlType.Boolean, title: "Show", defaultValue: false }, dotSize: { type: ControlType.Number, title: "Size", min: 1, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsInset: { type: ControlType.Number, title: "Inset", min: -100, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsGap: { type: ControlType.Number, title: "Gap", min: 0, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsPadding: { type: ControlType.Number, title: "Padding", min: 0, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsFill: { type: ControlType.Color, title: "Fill", defaultValue: "#fff", hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsBackground: { type: ControlType.Color, title: "Backdrop", defaultValue: "rgba(0,0,0,0.2)", hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsRadius: { type: ControlType.Number, title: "Radius", min: 0, max: 200, defaultValue: 50, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsOpacity: { type: ControlType.Number, title: "Opacity", min: 0, max: 1, defaultValue: 0.5, step: 0.1, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsActiveOpacity: { type: ControlType.Number, title: "Current", min: 0, max: 1, defaultValue: 1, step: 0.1, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsBlur: { type: ControlType.Number, title: "Blur", min: 0, max: 50, defaultValue: 0, step: 1, hidden: (props) => !props.showProgressDots || props.showScrollbar } } } });
var containerStyle = { display: "flex", flexDirection: "row", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: 0, padding: 0, listStyleType: "none", textIndent: "none" };
var placeholderStyles = { display: "flex", width: "100%", height: "100%", placeContent: "center", placeItems: "center", flexDirection: "column", color: "#96F", background: "rgba(136, 85, 255, 0.1)", fontSize: 11, overflow: "hidden", padding: "20px 20px 30px 20px" };
var emojiStyles = { fontSize: 32, marginBottom: 10 };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: "center" };
var baseButtonStyles = { border: "none", display: "flex", placeContent: "center", placeItems: "center", overflow: "hidden", background: "transparent", cursor: "pointer", margin: 0, padding: 0 };
var controlsStyles = { display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute", pointerEvents: "none", userSelect: "none", top: 0, left: 0, right: 0, bottom: 0, border: 0, padding: 0, margin: 0 };
var clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var Slide = /* @__PURE__ */ memo(/* @__PURE__ */ forwardRef(function Component(props, ref) {
  const {
    slideKey,
    width,
    height,
    child,
    size,
    gap,
    wrappedValue,
    numChildren,
    childCounter,
    isCanvas,
    effects,
    effectsOpacity,
    effectsScale,
    effectsRotate,
    isHorizontal,
    isLast,
    index,
    /** 1 or -1 depending on if horizontal and rtl writing direction */
    directionModifier
  } = props;
  const fallbackRef = useRef();
  const childOffset = (size?.item + gap) * childCounter;
  const scrollRange = [-size?.item, 0, size?.parent - size?.item + gap, size?.parent].map((val) => val - childOffset * directionModifier);
  const rotateY = !isCanvas && useTransform(wrappedValue, scrollRange, [-effectsRotate, 0, 0, effectsRotate]);
  const rotateX = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsRotate, 0, 0, -effectsRotate]);
  const opacity = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsOpacity, 1, 1, effectsOpacity]);
  const scale = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsScale, 1, 1, effectsScale]);
  const originXorY = !isCanvas && useTransform(wrappedValue, scrollRange, [1, 1, 0, 0]);
  const isVisible = !isCanvas && useTransform(wrappedValue, (latest) => latest >= scrollRange[1] && latest <= scrollRange[2]);
  useEffect(() => {
    if (!isVisible) return;
    function manageVisibility(visible) {
      const node = ref?.current ?? fallbackRef.current;
      if (!node) return;
      if (visible) {
        node.querySelectorAll("button,a").forEach((el) => {
          const orig = el.dataset.origTabIndex;
          if (orig) el.tabIndex = orig;
          else el.removeAttribute("tabIndex");
        });
      } else {
        node.querySelectorAll("button,a").forEach((el) => {
          const orig = el.getAttribute("tabIndex");
          if (orig) el.dataset.origTabIndex = orig;
          el.tabIndex = -1;
        });
      }
      node.setAttribute("aria-hidden", !visible);
    }
    manageVisibility(isVisible);
    return isVisible.on("change", (visible) => {
      manageVisibility(visible);
    });
  }, []);
  const visibility = isCanvas ? "visible" : useTransform(wrappedValue, [scrollRange[0] - size.viewportLength, mix(scrollRange[1], scrollRange[2], 0.5), scrollRange[3] + size.viewportLength], ["hidden", "visible", "hidden"]);
  const key = slideKey + "child";
  return /* @__PURE__ */ _jsx(LayoutGroup, { inherit: "id", id: key, children: /* @__PURE__ */ _jsx("li", { style: { display: "contents" }, children: /* @__PURE__ */ cloneElement(child, { ref: ref ?? fallbackRef, key, style: { ...child.props?.style, flexShrink: 0, userSelect: "none", width, height, opacity, scale, originX: isHorizontal ? originXorY : 0.5, originY: !isHorizontal ? originXorY : 0.5, rotateY: isHorizontal ? rotateY : 0, rotateX: !isHorizontal ? rotateX : 0, visibility }, layoutId: child.props.layoutId ? child.props.layoutId + "-original-" + index : void 0 }) }) });
}));
var Dot = /* @__PURE__ */ memo(function Dot2({ selectedOpacity, opacity, total, index, wrappedIndex, wrappedIndexInverted, dotStyle: dotStyle2, buttonStyle, gap, padding, isHorizontal, isInverted, ...props }) {
  let isSelected = wrappedIndex === index;
  if (isInverted) {
    isSelected = Math.abs(wrappedIndexInverted) === index;
  }
  const inlinePadding = gap / 2;
  const top = !isHorizontal && index > 0 ? inlinePadding : padding;
  const bottom = !isHorizontal && index !== total - 1 ? inlinePadding : padding;
  const right = isHorizontal && index !== total - 1 ? inlinePadding : padding;
  const left = isHorizontal && index > 0 ? inlinePadding : padding;
  return /* @__PURE__ */ _jsx("button", { "aria-label": `Scroll to page ${index + 1}`, type: "button", ...props, style: { ...buttonStyle, padding: `${top}px ${right}px ${bottom}px ${left}px` }, children: /* @__PURE__ */ _jsx(motion.div, { style: { ...dotStyle2 }, initial: false, animate: { opacity: isSelected ? selectedOpacity : opacity }, transition: { duration: 0.3 } }) });
});
var dotsContainerStyle = { display: "flex", placeContent: "center", placeItems: "center", overflow: "hidden", position: "absolute", pointerEvents: "auto" };
var dotStyle = { borderRadius: "50%", background: "white", cursor: "pointer", border: "none", placeContent: "center", placeItems: "center", padding: 0 };
function useWritingDirection() {
  const [writingDirection, setWritingDirection] = useState("ltr");
  useEffect(() => {
    if (window?.document?.documentElement?.dir === "rtl") {
      setWritingDirection("rtl");
    }
  }, []);
  return writingDirection;
}
function getSlideshowResolvedDirection(direction, writingDirection) {
  if (writingDirection !== "rtl") return direction;
  if (direction === "left") return "right";
  if (direction === "right") return "left";
  return direction;
}

// http-url:https://framerusercontent.com/modules/ka4UogsmjDVLuWIsDr9k/VqwQF8uyhTFjAG4Nw394/qqYMeoL2u.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/gdltJtNo0HZ6XlgyEY41/ELfiVbMWn775yxN5Muvl/lazJfqWVL.js
import { fontStore } from "unframer";
fontStore.loadFonts(["Inter", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var fonts = [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css = [`.framer-lnHND .framer-styles-preset-1ki52bb:not(.rich-text-wrapper), .framer-lnHND .framer-styles-preset-1ki52bb.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5875c38d-3796-46d6-9c68-d46df8f12824, #eeeeee); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-lnHND";

// http-url:https://framerusercontent.com/modules/xD0z5g30F9we7a7Lg1uh/c8PGKvaEPl6N9j3AWDZ0/v8rJBLt2d.js
import { fontStore as fontStore2 } from "unframer";
fontStore2.loadFonts(["Inter-Medium", "Inter-Bold", "Inter-BoldItalic", "Inter-MediumItalic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2", weight: "500" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2", weight: "500" }] }];
var css2 = [`.framer-7BGsJ .framer-styles-preset-qyn7t2:not(.rich-text-wrapper), .framer-7BGsJ .framer-styles-preset-qyn7t2.rich-text-wrapper h5 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.32px; --framer-line-height: 36px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5875c38d-3796-46d6-9c68-d46df8f12824, #eeeeee); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className2 = "framer-7BGsJ";

// http-url:https://framerusercontent.com/modules/ka4UogsmjDVLuWIsDr9k/VqwQF8uyhTFjAG4Nw394/qqYMeoL2u.js
var serializationHash = "framer-pqQl6";
var variantClassNames = { InLELqwdN: "framer-v-1jeqelz" };
var transition1 = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2.create(React.Fragment);
var getProps = ({ height, id, image, name1, role, title, width, ...props }) => {
  return { ...props, c71U2GHqQ: image ?? props.c71U2GHqQ ?? { alt: "", pixelHeight: 1106, pixelWidth: 928, src: "https://framerusercontent.com/images/uSHHVp64IbFCGv1iRvQ4mi47kU.png?scale-down-to=1024&width=928&height=1106", srcSet: "https://framerusercontent.com/images/uSHHVp64IbFCGv1iRvQ4mi47kU.png?scale-down-to=1024&width=928&height=1106 859w,https://framerusercontent.com/images/uSHHVp64IbFCGv1iRvQ4mi47kU.png?width=928&height=1106 928w" }, Rnd6Yf26a: title ?? props.Rnd6Yf26a ?? "Leadership", UM5NsZB5G: role ?? props.UM5NsZB5G ?? "Founder & Product Lead", W1dfTxxKd: name1 ?? props.W1dfTxxKd ?? "Avery James" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className3, layoutId, variant, c71U2GHqQ, Rnd6Yf26a, W1dfTxxKd, UM5NsZB5G, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "InLELqwdN", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className, className2];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs2(motion2.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1jeqelz", className3, classNames), "data-framer-name": "Primary", layoutDependency, layoutId: "InLELqwdN", ref: refBinding, style: { background: "linear-gradient(180deg, var(--token-86205562-b2e2-4bb6-bac8-5965f658c963, rgb(38, 38, 38)) 0%, var(--token-b8aaa64c-3d5b-49f7-a5c3-e8ed51a49f2b, rgb(14, 14, 14)) 100%)", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, ...style }, children: [/* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-12gkhk2", "data-framer-name": "Container", layoutDependency, layoutId: "mbjTzb1A8", style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, boxShadow: "0px 36px 52px 0px rgba(0, 0, 0, 0.55)" }, children: [/* @__PURE__ */ _jsx2(motion2.div, { className: "framer-18cywu5", "data-framer-name": "BG", layoutDependency, layoutId: "JFCicC39v", style: { backgroundColor: "var(--token-661e0f36-c05e-4b15-8189-478f85cc27ee, rgb(0, 0, 0))", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24 } }), /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-10wuyq5", "data-framer-name": "Border", layoutDependency, layoutId: "rXSRKOlUz", style: { background: "linear-gradient(142deg, var(--token-4f5928ed-7a85-4972-9313-c1add4518c9e, rgba(255, 255, 255, 0.1)) 79%, var(--token-9adfb14d-59dc-4341-b0a7-4a7658ec9dca, rgba(255, 255, 255, 0.3)) 100%)", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24 } }), /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1uylep", "data-framer-name": "Blur", layoutDependency, layoutId: "fc4XLD58y", style: { backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)" } }), /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-1b1m1m3", "data-framer-name": "Content", layoutDependency, layoutId: "ZcF9TMuuE", children: [/* @__PURE__ */ _jsx2(motion2.div, { className: "framer-y6i5aw", "data-framer-name": "Tag", layoutDependency, layoutId: "ZnuRhoQdx", style: { backdropFilter: "blur(22px)", backgroundColor: "var(--token-6862a796-0871-4f7c-afd5-d42a10cd4017, rgba(255, 255, 255, 0.07))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, WebkitBackdropFilter: "blur(22px)" }, children: /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-1ki52bb", "data-styles-preset": "lazJfqWVL", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5875c38d-3796-46d6-9c68-d46df8f12824, rgb(238, 238, 238)))" }, children: "Leadership" }) }), className: "framer-tgaj8g", fonts: ["Inter"], layoutDependency, layoutId: "IAto4jwtM", style: { "--extracted-r6o4lv": "var(--token-5875c38d-3796-46d6-9c68-d46df8f12824, rgb(238, 238, 238))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: Rnd6Yf26a, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-fxbqee", "data-framer-name": "Spacer", layoutDependency, layoutId: "KF6GcTYll" }), /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-18mhdf6", "data-framer-name": "Name", layoutDependency, layoutId: "dWkhjNrkT", children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.h5, { className: "framer-styles-preset-qyn7t2", "data-styles-preset": "v8rJBLt2d", style: { "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-5875c38d-3796-46d6-9c68-d46df8f12824, rgb(238, 238, 238)))" }, children: "Avery James" }) }), className: "framer-1vbqnmz", fonts: ["Inter"], layoutDependency, layoutId: "s49IWNZgn", style: { "--extracted-1lwpl3i": "var(--token-5875c38d-3796-46d6-9c68-d46df8f12824, rgb(238, 238, 238))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: W1dfTxxKd, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-1ki52bb", "data-styles-preset": "lazJfqWVL", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a02d5aea-0500-495d-9deb-a4d649ae4f0c, rgb(231, 231, 231)))" }, children: "Founder & Product Lead" }) }), className: "framer-71an01", fonts: ["Inter"], layoutDependency, layoutId: "kFhU60SqJ", style: { "--extracted-r6o4lv": "var(--token-a02d5aea-0500-495d-9deb-a4d649ae4f0c, rgb(231, 231, 231))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: UM5NsZB5G, verticalAlignment: "top", withExternalLayout: true })] })] })] }), /* @__PURE__ */ _jsx2(Image, { background: { alt: "", fit: "fit", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0), pixelHeight: 1106, pixelWidth: 928, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(c71U2GHqQ), ...{ positionX: "center", positionY: "center" } }, className: "framer-1paetcs", "data-framer-name": "Image", layoutDependency, layoutId: "UVWAx0xc0" })] }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-pqQl6.framer-1f7p10n, .framer-pqQl6 .framer-1f7p10n { display: block; }", ".framer-pqQl6.framer-1jeqelz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 580px; justify-content: flex-start; overflow: hidden; padding: 36px; position: relative; width: 464px; will-change: var(--framer-will-change-override, transform); }", ".framer-pqQl6 .framer-12gkhk2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 40px 24px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-pqQl6 .framer-18cywu5 { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-pqQl6 .framer-10wuyq5 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }", ".framer-pqQl6 .framer-1uylep { bottom: 0px; flex: none; height: 139px; left: 0px; overflow: hidden; position: absolute; right: 0px; z-index: 5; }", ".framer-pqQl6 .framer-1b1m1m3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 5; }", ".framer-pqQl6 .framer-y6i5aw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 24px 10px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-pqQl6 .framer-tgaj8g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-pqQl6 .framer-fxbqee { flex: none; height: 332px; overflow: visible; position: relative; width: 100%; }", ".framer-pqQl6 .framer-18mhdf6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-pqQl6 .framer-1vbqnmz, .framer-pqQl6 .framer-71an01 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-pqQl6 .framer-1paetcs { bottom: 0px; flex: none; gap: 0px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }", ...css, ...css2];
var FramerqqYMeoL2u = withCSS(Component2, css3, "framer-pqQl6");
var qqYMeoL2u_default = FramerqqYMeoL2u;
FramerqqYMeoL2u.displayName = "Team Card";
FramerqqYMeoL2u.defaultProps = { height: 580, width: 464 };
addPropertyControls2(FramerqqYMeoL2u, { c71U2GHqQ: { __defaultAssetReference: "data:framer/asset-reference,uSHHVp64IbFCGv1iRvQ4mi47kU.png?originalFilename=mann3.png&preferredSize=auto", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,uSHHVp64IbFCGv1iRvQ4mi47kU.png?originalFilename=mann3.png&preferredSize=auto" }, title: "Image", type: ControlType2.ResponsiveImage }, Rnd6Yf26a: { defaultValue: "Leadership", displayTextArea: false, title: "Title", type: ControlType2.String }, W1dfTxxKd: { defaultValue: "Avery James", displayTextArea: false, title: "Name", type: ControlType2.String }, UM5NsZB5G: { defaultValue: "Founder & Product Lead", displayTextArea: false, title: "Role", type: ControlType2.String } });
addFonts(FramerqqYMeoL2u, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/7SWPZ9nm2yu7UKEFOr9B/a9i46ZxNtQUOJ79n1NJT/Ism9jraCN.js
var TeamCardFonts = getFonts(qqYMeoL2u_default);
var SlideshowFonts = getFonts(Slideshow);
var cycleOrder = ["Tkcr77J1d", "mKnb_Z91b"];
var serializationHash2 = "framer-OjlgL";
var variantClassNames2 = { mKnb_Z91b: "framer-v-7l821v", Tkcr77J1d: "framer-v-vihdxq" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transition2 = { delay: 0, duration: 0.18, ease: [0.22, 1, 0.36, 1], type: "tween" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.02, skewX: 0, skewY: 0, transition: transition2, y: -1 };
var animation1 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.99, skewX: 0, skewY: 0, transition: transition2 };
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return { ...image, alt };
};
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Primary: "Tkcr77J1d", Secondary: "mKnb_Z91b" };
var Variants2 = motion3.create(React2.Fragment);
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "Tkcr77J1d" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder, defaultVariant: "Tkcr77J1d", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx3(motion3.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-vihdxq", className3, classNames), "data-framer-name": "Primary", layoutDependency, layoutId: "Tkcr77J1d", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ mKnb_Z91b: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-19pwd5a-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "zId6W6Y33-container", nodeId: "zId6W6Y33", rendersWithMotion: true, scopeId: "Ism9jraCN", children: /* @__PURE__ */ _jsx3(Slideshow, { alignment: "center", arrowOptions: { arrowFill: "rgba(0, 0, 0, 0)", arrowGap: 50, arrowPadding: -100, arrowPaddingBottom: 0, arrowPaddingLeft: 0, arrowPaddingRight: 0, arrowPaddingTop: 200, arrowPosition: "bottom-mid", arrowRadius: 0, arrowShouldFadeIn: false, arrowShouldSpace: false, arrowSize: 40, showMouseControls: false }, autoPlayControl: false, borderRadius: 0, direction: "left", dragControl: true, effectsOptions: { effectsHover: true, effectsOpacity: 0.4, effectsPerspective: 1200, effectsRotate: 0, effectsScale: 0.85, playOffscreen: false }, fadeOptions: { fadeAlpha: 0, fadeContent: false, fadeInset: 0, fadeWidth: 25, overflow: true }, gap: 24, height: "100%", id: "zId6W6Y33", intervalControl: 1.5, itemAmount: 3, layoutId: "zId6W6Y33", padding: 0, paddingBottom: 0, paddingLeft: 0, paddingPerSide: false, paddingRight: 0, paddingTop: 0, progressOptions: { dotsActiveOpacity: 1, dotsBackground: "rgba(0, 0, 0, 0)", dotsBlur: 0, dotsFill: "var(--token-d9273714-583b-4d3e-a16b-1d3eb051c60d, rgb(255, 255, 255))", dotsGap: 14, dotsInset: -30, dotSize: 7, dotsOpacity: 0.5, dotsPadding: 0, dotsRadius: 50, showProgressDots: false }, slots: [/* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 580, width: "464px", children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-12nc4d6-container", "data-framer-name": "Team Card1", inComponentSlot: true, layoutDependency, layoutId: "rNA9t8HuQ-container", name: "Team Card1", nodeId: "rNA9t8HuQ", rendersWithMotion: true, scopeId: "Ism9jraCN", whileHover: animation, whileTap: animation1, children: /* @__PURE__ */ _jsx3(qqYMeoL2u_default, { height: "100%", id: "rNA9t8HuQ", layoutId: "rNA9t8HuQ", name: "Team Card1", Rnd6Yf26a: "Leadership", style: { width: "100%" }, UM5NsZB5G: "Founder & Product Lead", W1dfTxxKd: "Avery James", width: "100%" }) }) }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 580, width: "464px", children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-ohhwlr-container", "data-framer-name": "Team Card2", inComponentSlot: true, layoutDependency, layoutId: "iU1LhJDIb-container", name: "Team Card2", nodeId: "iU1LhJDIb", rendersWithMotion: true, scopeId: "Ism9jraCN", whileHover: animation, whileTap: animation1, children: /* @__PURE__ */ _jsx3(qqYMeoL2u_default, { c71U2GHqQ: addImageAlt({ pixelHeight: 872, pixelWidth: 732, src: "https://framerusercontent.com/images/xVgSCCsvizEBKn9olbCsvPejLbQ.png?width=732&height=872", srcSet: "https://framerusercontent.com/images/xVgSCCsvizEBKn9olbCsvPejLbQ.png?width=732&height=872 732w" }, "member image"), height: "100%", id: "iU1LhJDIb", layoutId: "iU1LhJDIb", name: "Team Card2", Rnd6Yf26a: "Marketing Team", style: { width: "100%" }, UM5NsZB5G: "Growth & Marketing Lead", W1dfTxxKd: "Ryan Adams", width: "100%" }) }) }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 580, width: "464px", children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-17nofov-container", "data-framer-name": "Team Card3", inComponentSlot: true, layoutDependency, layoutId: "ZPV07o3bC-container", name: "Team Card3", nodeId: "ZPV07o3bC", rendersWithMotion: true, scopeId: "Ism9jraCN", whileHover: animation, whileTap: animation1, children: /* @__PURE__ */ _jsx3(qqYMeoL2u_default, { c71U2GHqQ: addImageAlt({ pixelHeight: 872, pixelWidth: 732, src: "https://framerusercontent.com/images/dH3E745rPwqwvIEDowEWp3cpmC4.png?width=732&height=872", srcSet: "https://framerusercontent.com/images/dH3E745rPwqwvIEDowEWp3cpmC4.png?width=732&height=872 732w" }, "member image"), height: "100%", id: "ZPV07o3bC", layoutId: "ZPV07o3bC", name: "Team Card3", Rnd6Yf26a: "Development Team", style: { width: "100%" }, UM5NsZB5G: "Lead Frontend Developer", W1dfTxxKd: "Ethan Chen", width: "100%" }) }) }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 580, width: "464px", children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-apin60-container", "data-framer-name": "Team Card4", inComponentSlot: true, layoutDependency, layoutId: "vBBUAyNY8-container", name: "Team Card4", nodeId: "vBBUAyNY8", rendersWithMotion: true, scopeId: "Ism9jraCN", whileHover: animation, whileTap: animation1, children: /* @__PURE__ */ _jsx3(qqYMeoL2u_default, { c71U2GHqQ: addImageAlt({ pixelHeight: 872, pixelWidth: 732, src: "https://framerusercontent.com/images/kMmJL8Lh388UlTu330n0AScPrbE.png?width=732&height=872", srcSet: "https://framerusercontent.com/images/kMmJL8Lh388UlTu330n0AScPrbE.png?width=732&height=872 732w" }, "member image"), height: "100%", id: "vBBUAyNY8", layoutId: "vBBUAyNY8", name: "Team Card4", Rnd6Yf26a: "Design Team", style: { width: "100%" }, UM5NsZB5G: "Design Director", W1dfTxxKd: "Riley Thompson", width: "100%" }) }) }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 580, width: "464px", children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-zkdw0i-container", "data-framer-name": "Team Card5", inComponentSlot: true, layoutDependency, layoutId: "c1eAWL6R9-container", name: "Team Card5", nodeId: "c1eAWL6R9", rendersWithMotion: true, scopeId: "Ism9jraCN", whileHover: animation, whileTap: animation1, children: /* @__PURE__ */ _jsx3(qqYMeoL2u_default, { c71U2GHqQ: addImageAlt({ pixelHeight: 872, pixelWidth: 732, src: "https://framerusercontent.com/images/5oeaWFgXfxXfxP3JKNg5Xk6E.png?width=732&height=872", srcSet: "https://framerusercontent.com/images/5oeaWFgXfxXfxP3JKNg5Xk6E.png?width=732&height=872 732w" }, "member image"), height: "100%", id: "c1eAWL6R9", layoutId: "c1eAWL6R9", name: "Team Card5", Rnd6Yf26a: "Development Team", style: { width: "100%" }, UM5NsZB5G: "Full Stack Engineer", W1dfTxxKd: "Jordan Miles", width: "100%" }) }) })], startFrom: 0, style: { height: "100%", width: "100%" }, transitionControl: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" }, width: "100%", ...addPropertyOverrides({ mKnb_Z91b: { itemAmount: 1 } }, baseVariant, gestureVariant) }) }) }) }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-OjlgL.framer-14c5caw, .framer-OjlgL .framer-14c5caw { display: block; }", ".framer-OjlgL.framer-vihdxq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }", ".framer-OjlgL .framer-19pwd5a-container { flex: 1 0 0px; height: 580px; position: relative; width: 1px; }", ".framer-OjlgL .framer-12nc4d6-container, .framer-OjlgL .framer-ohhwlr-container, .framer-OjlgL .framer-17nofov-container, .framer-OjlgL .framer-apin60-container, .framer-OjlgL .framer-zkdw0i-container { cursor: pointer; height: auto; position: relative; width: 464px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-OjlgL.framer-v-7l821v.framer-vihdxq { width: 810px; }"];
var FramerIsm9jraCN = withCSS2(Component3, css4, "framer-OjlgL");
var Ism9jraCN_default = FramerIsm9jraCN;
FramerIsm9jraCN.displayName = "Team Cards";
FramerIsm9jraCN.defaultProps = { height: 580, width: 1440 };
addPropertyControls3(FramerIsm9jraCN, { variant: { options: ["Tkcr77J1d", "mKnb_Z91b"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType3.Enum } });
addFonts2(FramerIsm9jraCN, [{ explicitInter: true, fonts: [] }, ...TeamCardFonts, ...SlideshowFonts], { supportsExplicitInterCodegen: true });
FramerIsm9jraCN.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(qqYMeoL2u_default, {}, context)]);
} };
export {
  Ism9jraCN_default as default
};

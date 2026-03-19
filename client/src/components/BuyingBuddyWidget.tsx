/**
 * BuyingBuddyWidget — React-safe imperative wrapper for Buying Buddy bb-widget custom elements.
 *
 * Buying Buddy's bb-widget is a custom element. React can handle unknown custom-element
 * attributes inconsistently. The recommended reliable approach is to create the element
 * imperatively via document.createElement, set attributes with setAttribute before DOM
 * attachment, and clean up on unmount.
 *
 * Usage:
 *   <BuyingBuddyWidget type="SearchForm" />
 *   <BuyingBuddyWidget type="ListingResults" />
 *   <BuyingBuddyWidget type="SearchDetails" />
 *   <BuyingBuddyWidget type="Disclaimer" />
 *   <BuyingBuddyWidget type="QuickSearch" filter="..." />
 *
 * The global Buying Buddy plugin script must already be loaded in the site <head>.
 * Do NOT load the plugin script inside this component.
 */
import { useEffect, useRef } from "react";

interface BuyingBuddyWidgetProps {
  /** The Buying Buddy widget type, e.g. "SearchForm", "ListingResults", "SearchDetails", "Disclaimer" */
  type: string;
  /** Optional data-filter attribute for widgets that support filtering */
  filter?: string;
  /** Optional additional inline styles for the container div */
  style?: React.CSSProperties;
  /** Optional className for the container div */
  className?: string;
  /**
   * Optional inline style string set directly on the bb-widget element (not the container div).
   * Use this for Buying Buddy CSS variable overrides, e.g.:
   * "--bbw-body-text-color:#F5F0EB;--bbw-disclaimer-bg-color-rgba:255,255,255,0"
   */
  widgetStyle?: string;
}

export default function BuyingBuddyWidget({
  type,
  filter,
  style,
  className,
  widgetStyle,
}: BuyingBuddyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previously rendered widget
    container.innerHTML = "";

    // Create the bb-widget element imperatively and set attributes before append
    const widget = document.createElement("bb-widget");
    widget.setAttribute("data-type", type);
    if (filter) {
      widget.setAttribute("data-filter", filter);
    }
    if (widgetStyle) {
      widget.setAttribute("style", widgetStyle);
    }

    // Append after attributes are set — this is the reliable pattern for custom elements
    container.appendChild(widget);

    return () => {
      // Clean up on unmount or prop change
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [type, filter, widgetStyle]);

  return (
    <div
      ref={containerRef}
      suppressHydrationWarning
      style={style}
      className={className}
    />
  );
}

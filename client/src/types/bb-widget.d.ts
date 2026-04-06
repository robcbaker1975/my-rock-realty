/**
 * Global JSX type declaration for Buying Buddy's bb-widget custom element.
 * Suppresses TS2339 errors when raw <bb-widget> tags are used in TSX files.
 * The BuyingBuddyWidget wrapper component is preferred for new usage.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bb-widget': any;
    }
  }
}

export {};

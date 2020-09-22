export declare type RedirectEvent = {
    url: string;
};
export declare type WebBrowserWindowFeatures = Record<string, number | boolean | string>;
export declare type WebBrowserOpenOptions = {
    /**
     * Color of the toolbar in either #AARRGGBB or #RRGGBB format.
     */
    toolbarColor?: string;
    browserPackage?: string;
    /**
     * Whether the toolbar should be hiding when a user scrolls the website.
     */
    enableBarCollapsing?: boolean;
    /** Android only */
    /**
     * Color of the secondary toolbar in either #AARRGGBB or #RRGGBB format.
     */
    secondaryToolbarColor?: string;
    /**
     * Whether the browser should show the title of website on the toolbar.
     */
    showTitle?: boolean;
    enableDefaultShareMenuItem?: boolean;
    /**
     * Whether browsed website should be shown as separate entry in Android recents/multitasking view.
     * Default: `false`
     */
    showInRecents?: boolean;
    /**
     * Customize window transition animation (enter/exit animation).
     * Default: unspecified (OS-default behavior)
     * - 'slide': browser and app window slides right-to-left, and back to left-to-right
     * - 'slide_vertical': browser window slides bottom-to-top, and back to top-to-bottom
     * - 'fade': browser fades in and app fades out, and back to reverse
     */
    windowTransitionStyle?: 'slide' | 'slide_vertical' | 'fade';
    /** iOS only */
    controlsColor?: string;
    dismissButtonStyle?: 'done' | 'close' | 'cancel';
    readerMode?: boolean;
    /**
     * **Web:** name to assign to the popup window.
     */
    windowName?: string;
    /**
     * **Web:** features to use with `window.open()`
     */
    windowFeatures?: string | WebBrowserWindowFeatures;
};
export declare type WebBrowserAuthSessionResult = WebBrowserRedirectResult | WebBrowserResult;
export declare type WebBrowserCustomTabsResults = {
    defaultBrowserPackage?: string;
    preferredBrowserPackage?: string;
    browserPackages: string[];
    servicePackages: string[];
};
export declare const WebBrowserResultType: {
    /**
     * iOS only
     */
    readonly CANCEL: "cancel";
    /**
     * iOS only
     */
    readonly DISMISS: "dismiss";
    /**
     * Android only
     */
    readonly OPENED: "opened";
    readonly LOCKED: "locked";
};
export declare type WebBrowserResultType = typeof WebBrowserResultType[keyof typeof WebBrowserResultType];
export declare type WebBrowserResult = {
    type: WebBrowserResultType;
};
export declare type WebBrowserRedirectResult = {
    type: 'success';
    url: string;
};
export declare type ServiceActionResult = {
    servicePackage?: string;
};
export declare type WebBrowserMayInitWithUrlResult = ServiceActionResult;
export declare type WebBrowserWarmUpResult = ServiceActionResult;
export declare type WebBrowserCoolDownResult = ServiceActionResult;

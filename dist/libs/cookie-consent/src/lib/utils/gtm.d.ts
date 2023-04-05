declare global {
    interface Window {
        dataLayer: object[];
    }
}
declare function gtag(): void;
declare function pageView(url: string): void;
declare function customEvent(event: string, data: object): void;
export declare const gtm: {
    pageView: typeof pageView;
    gtag: typeof gtag;
    customEvent: typeof customEvent;
};
export {};

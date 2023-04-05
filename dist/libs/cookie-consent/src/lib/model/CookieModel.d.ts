export declare type CookieType = 'analytics' | 'ad' | 'personalization';
export declare type StorageType = 'adStorage' | 'analyticsStorage' | 'personalizationStorage' | 'securityStorage' | 'functionalityStorage';
export declare type StorageInterface = {
    [storage in StorageType]?: 'denied' | 'granted';
};
export interface CookiesInterface {
    GCCookieConsent?: GCCookieConsentInterface;
}
export interface GCCookieConsentInterface {
    accepted?: boolean;
    storage?: StorageInterface;
}

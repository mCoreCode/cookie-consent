import { CookieType } from '../model/CookieModel';
export interface CookieConsentInterface {
    localization: 'cs' | 'en' | 'de';
    triggerId: string;
    usedCookiesType: CookieType[];
    link?: string;
}

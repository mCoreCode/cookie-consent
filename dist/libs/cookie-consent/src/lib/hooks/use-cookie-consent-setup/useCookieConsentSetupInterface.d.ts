import { CookieType } from '../../model/CookieModel';
export interface useCookieConsentSetupInterface {
    usedCookiesType: CookieType[];
    localization?: string;
    link?: string;
}

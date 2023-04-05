import { CookieType } from '../../model/CookieModel';
export interface ConsentWrapperInterface {
    usedCookiesType: CookieType[];
    link?: string;
}

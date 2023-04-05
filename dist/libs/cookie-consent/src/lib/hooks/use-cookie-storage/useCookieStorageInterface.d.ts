import { CookieType, StorageType } from '../../model/CookieModel';
export declare type useCookieStorageInterface = {
    usedCookiesType: CookieType[];
};
export interface CookiesList {
    label: string;
    name: StorageType;
    text: string;
}

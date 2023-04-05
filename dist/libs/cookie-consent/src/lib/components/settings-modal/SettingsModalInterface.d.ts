import { CookieType } from '../../model/CookieModel';
export declare type SettingsModalInterface = {
    show: boolean;
    onClose: VoidFunction;
    usedCookiesType: CookieType[];
    link?: string;
};

import { CookieType } from '../../model/CookieModel';
export declare type InfoPanelInterface = {
    setSettingsModal: (value: boolean) => void;
    usedCookiesType: CookieType[];
    link?: string;
};

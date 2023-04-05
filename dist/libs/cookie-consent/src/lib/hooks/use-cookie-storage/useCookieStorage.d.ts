import { StorageInterface } from '../../model/CookieModel';
import { CookiesList, useCookieStorageInterface } from './useCookieStorageInterface';
export declare const useCookieStorage: (props: useCookieStorageInterface) => {
    handleSubmit: () => void;
    isGranted: (cookie: keyof StorageInterface) => boolean;
    handleClick: (value: {
        name: keyof StorageInterface;
        checked: boolean;
    }) => void;
    cookiesList: CookiesList[];
    allowAllHandler: () => void;
    allowNecessaryHandler: () => void;
};
export default useCookieStorage;

import { WebPlugin } from '@capacitor/core';
import { DarkModePlugin } from './definitions';
export declare class DarkModeWeb extends WebPlugin implements DarkModePlugin {
    darkMode: {
        isDarkModeOn: boolean;
    };
    constructor();
    isDarkModeOn(): Promise<any>;
    registerDarkModeChangeListener(): void;
}
declare const DarkMode: DarkModeWeb;
export { DarkMode };

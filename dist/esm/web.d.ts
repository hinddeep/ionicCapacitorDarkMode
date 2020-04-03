import { WebPlugin } from '@capacitor/core';
import { DarkModePlugin } from './definitions';
export declare class DarkModeWeb extends WebPlugin implements DarkModePlugin {
    constructor();
    checkMode(): void;
}
declare const DarkMode: DarkModeWeb;
export { DarkMode };

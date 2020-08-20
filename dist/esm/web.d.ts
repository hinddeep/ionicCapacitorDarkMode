import { WebPlugin } from '@capacitor/core';
import { DarkModePlugin } from './definitions';
export declare class DarkModeWeb extends WebPlugin implements DarkModePlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const DarkMode: DarkModeWeb;
export { DarkMode };

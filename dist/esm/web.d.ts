import { WebPlugin } from '@capacitor/core';
import { ScreenOrientationPlugin } from './definitions';
export declare class ScreenOrientationWeb extends WebPlugin implements ScreenOrientationPlugin {
    orientation: ScreenOrientation;
    constructor();
    getScreenOrientation(): Promise<any>;
    lockScreenOrientation(options: {
        orientation: string;
    }): void;
    unlockScreenOrientation(): void;
    rotateTo(): void;
    registerOrientationChangeListener(): void;
}
declare const ScreenOrientation: ScreenOrientationWeb;
export { ScreenOrientation };

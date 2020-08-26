import { PluginListenerHandle } from "@capacitor/core";

declare module '@capacitor/core' {
  interface PluginRegistry {
    ScreenOrientation: ScreenOrientationPlugin;
  }
}

export interface ScreenOrientationPlugin {
  getScreenOrientation(): Promise<any>;
  lockScreenOrientation(options: { orientation: string }): void;
  unlockScreenOrientation(): void;
  rotateTo(options: { orientation: string }): void;
  addListener(
    eventName: 'orientation_changed',
    listenerFunc: (state: any) => void,
  ): PluginListenerHandle;
  registerOrientationChangeListener():void;
}

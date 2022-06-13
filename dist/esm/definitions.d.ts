import { PluginListenerHandle } from "@capacitor/core";
export interface DarkModePlugin {
    isDarkModeOn(): Promise<any>;
    addListener(eventName: 'darkModeStateChanged', listenerFunc: (state: any) => void): PluginListenerHandle;
    registerDarkModeChangeListener(): void;
}

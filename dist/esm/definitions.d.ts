import { PluginListenerHandle } from "@capacitor/core";
declare module "@capacitor/core" {
    interface PluginRegistry {
        DarkMode: DarkModePlugin;
    }
}
export interface DarkModePlugin {
    addListener(eventName: 'darkModeStateChanged', listenerFunc: (state: any) => void): PluginListenerHandle;
}

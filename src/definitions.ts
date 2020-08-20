declare module '@capacitor/core' {
  interface PluginRegistry {
    DarkMode: DarkModePlugin;
  }
}

export interface DarkModePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

import { WebPlugin } from '@capacitor/core';
import { DarkModePlugin } from './definitions';

export class DarkModeWeb extends WebPlugin implements DarkModePlugin {
  constructor() {
    super({
      name: 'DarkMode',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const DarkMode = new DarkModeWeb();

export { DarkMode };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DarkMode);

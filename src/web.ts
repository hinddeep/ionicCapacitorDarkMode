import { WebPlugin } from '@capacitor/core';
import { DarkModePlugin } from './definitions';

export class DarkModeWeb extends WebPlugin implements DarkModePlugin {
  darkMode = {"isDarkModeOn":false}

  constructor() {
    super({
      name: 'DarkMode',
      platforms: ['web','android','ios'],
    });
  }

  isDarkModeOn(): Promise<any> {
    var darkMode = {"isDarkModeOn":false}
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
      darkMode.isDarkModeOn = true
    }
    return  Promise.resolve(darkMode);
  }

  registerDarkModeChangeListener():void
  {
    var darkMode = {"isDarkModeOn":false}
      window.matchMedia("(prefers-color-scheme: dark)").addListener((status) => {
        if(status.matches)
        {
          darkMode = {"isDarkModeOn":true}
        }
        else
        {
          darkMode = {"isDarkModeOn":false}
        }
        this.notifyListeners("darkModeStateChanged",darkMode)
    });
  }
}

const DarkMode = new DarkModeWeb();

export { DarkMode };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DarkMode);

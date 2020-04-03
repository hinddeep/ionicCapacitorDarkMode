import { WebPlugin } from '@capacitor/core';
import { DarkModePlugin } from './definitions';

export class DarkModeWeb extends WebPlugin implements DarkModePlugin {
  constructor() {
    super({
      name: 'DarkMode',
      platforms: ['web']
    });
    this.checkMode() 
  }

  checkMode()
  {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all')
    {
      // console.log('Dark mode is supported');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');    
      if(prefersDark.matches)
      {
        let darkmode = {"isDarkModeOn":true}
        this.notifyListeners("darkModeStateChanged", darkmode)        
      }
      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addListener((e) => {   
        if(e.matches)
        {
          let darkmode = {"isDarkModeOn":true}
          this.notifyListeners("darkModeStateChanged", darkmode)  
        }
        else
        {
          let darkmode = {"isDarkModeOn":false}
          this.notifyListeners("darkModeStateChanged", darkmode)         
        }
      });
    }
    else
    {
      let darkmode = {"isDarkModeOn":false, "supported":false}
      this.notifyListeners("darkModeStateChanged", darkmode)    
    }
  } 
}

const DarkMode = new DarkModeWeb();

export { DarkMode };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DarkMode);

import { WebPlugin } from '@capacitor/core';
import { ScreenOrientationPlugin } from './definitions';

export class ScreenOrientationWeb extends WebPlugin implements ScreenOrientationPlugin {
  orientation = window.screen.orientation;

  constructor() {
    super({
      name: 'ScreenOrientation',
      platforms: ['web','android','ios'],
    });
  }

  getScreenOrientation(): Promise<any>
  {
    var my_orientation = {"orientation":"PORTRAIT_PRIMARY"}
    let orient = (screen.orientation  || {}).type 

    switch (orient) {
      case "landscape-primary":
        my_orientation.orientation = "landscape-primary"
        break;
      case "landscape-secondary":
        my_orientation.orientation = "landscape-secondary"
        break;
      case "portrait-secondary":
        my_orientation.orientation = "portrait-secondary"
        break;
      case "portrait-primary":
        my_orientation.orientation = "portrait-primary"
        break;
    
      default:
        break;
    }
    return Promise.resolve(orientation)
  }

  lockScreenOrientation(options: { orientation: string }): void
  {
    console.log(options)
    switch (options.orientation) {
      case "LANDSCAPE_PRIMARY":
        this.orientation.lock("landscape-primary")
        break;
      case "PORTRAIT_PRIMARY":
        this.orientation.lock("portrait-primary")
        break;
      case "LANDSCAPE_SECONDARY":
        this.orientation.lock("landscape-secondary")
        break;
      case "LANDSCAPE_PRIMARY":
        this.orientation.lock("landscape-primary")
        break;
    
      default:
        break;
    }

  }

  unlockScreenOrientation(): void
  {
    this.orientation.unlock()
  }

  rotateTo(): void
  {
    console.log("Not Supported on web...")
  }

  registerOrientationChangeListener():void
  {
    screen.orientation.addEventListener('change', () => {
        this.getScreenOrientation().then((my_orientation) => {
          this.notifyListeners("orientation_changed",my_orientation)
        })
      });
  }
}

const ScreenOrientation = new ScreenOrientationWeb();

export { ScreenOrientation };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ScreenOrientation);

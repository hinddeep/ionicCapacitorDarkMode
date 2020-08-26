var capacitorPlugin = (function (exports, core) {
    'use strict';

    class ScreenOrientationWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'ScreenOrientation',
                platforms: ['web', 'android', 'ios'],
            });
            this.orientation = window.screen.orientation;
        }
        getScreenOrientation() {
            let orient = (screen.orientation || {}).type;
            return Promise.resolve(orientation);
        }
        lockScreenOrientation(options) {
            console.log(options);
            switch (options.orientation) {
                case "LANDSCAPE_PRIMARY":
                    this.orientation.lock("landscape-primary");
                    break;
                case "PORTRAIT_PRIMARY":
                    this.orientation.lock("portrait-primary");
                    break;
                case "LANDSCAPE_SECONDARY":
                    this.orientation.lock("landscape-secondary");
                    break;
                case "LANDSCAPE_PRIMARY":
                    this.orientation.lock("landscape-primary");
                    break;
            }
        }
        unlockScreenOrientation() {
            this.orientation.unlock();
        }
        rotateTo() {
            console.log("Not Supported on web...");
        }
        registerOrientationChangeListener() {
            screen.orientation.addEventListener('change', () => {
                this.getScreenOrientation().then((my_orientation) => {
                    this.notifyListeners("orientation_changed", my_orientation);
                });
            });
        }
    }
    const ScreenOrientation = new ScreenOrientationWeb();
    core.registerWebPlugin(ScreenOrientation);

    exports.ScreenOrientation = ScreenOrientation;
    exports.ScreenOrientationWeb = ScreenOrientationWeb;

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map

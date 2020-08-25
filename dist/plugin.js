var capacitorPlugin = (function (exports, core) {
    'use strict';

    class DarkModeWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'DarkMode',
                platforms: ['web', 'android', 'ios'],
            });
            this.darkMode = { "isDarkModeOn": false };
        }
        isDarkModeOn() {
            var darkMode = { "isDarkModeOn": false };
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                darkMode.isDarkModeOn = true;
            }
            return Promise.resolve(darkMode);
        }
        registerDarkModeChangeListener() {
            var darkMode = { "isDarkModeOn": false };
            window.matchMedia("(prefers-color-scheme: dark)").addListener((status) => {
                if (status.matches) {
                    darkMode = { "isDarkModeOn": true };
                }
                else {
                    darkMode = { "isDarkModeOn": false };
                }
                this.notifyListeners("darkModeStateChanged", darkMode);
            });
        }
    }
    const DarkMode = new DarkModeWeb();
    core.registerWebPlugin(DarkMode);

    exports.DarkMode = DarkMode;
    exports.DarkModeWeb = DarkModeWeb;

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map

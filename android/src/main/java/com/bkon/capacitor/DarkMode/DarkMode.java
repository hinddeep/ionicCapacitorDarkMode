package com.bkon.capacitor.DarkMode;

import android.content.Context;
import android.content.res.Configuration;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;

@NativePlugin()
public class DarkMode extends Plugin {

    private boolean isDarkModeOn = false;
    private static final String EVENT_DARK_MODE_CHANGE = "darkModeStateChanged";

    @Override
    protected void handleOnRestart() {
        super.handleOnRestart();
        checkMode();
    }

    @Override
    protected void handleOnResume() {
        super.handleOnResume();
        checkMode();
    }

    public void checkMode()
    {
        Context ctx = getContext();
        JSObject data;

        int nightModeFlags = ctx.getResources().getConfiguration().uiMode &
                Configuration.UI_MODE_NIGHT_MASK;
        switch (nightModeFlags) {
            case Configuration.UI_MODE_NIGHT_YES:
                isDarkModeOn = true;
                data = new JSObject();
                data.put("isDarkModeOn", isDarkModeOn);
                notifyListeners(this.EVENT_DARK_MODE_CHANGE, data, true);
                break;

            case Configuration.UI_MODE_NIGHT_NO:
                isDarkModeOn = false;
                data = new JSObject();
                data.put("isDarkModeOn", isDarkModeOn);
                notifyListeners(this.EVENT_DARK_MODE_CHANGE, data, true);
                break;

            case Configuration.UI_MODE_NIGHT_UNDEFINED:
                isDarkModeOn = false;
                data = new JSObject();
                data.put("isDarkModeOn", isDarkModeOn);
                notifyListeners(this.EVENT_DARK_MODE_CHANGE, data, true);
                break;
        }
    }
}

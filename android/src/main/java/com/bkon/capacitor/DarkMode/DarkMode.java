package com.bkon.capacitor.DarkMode;

import android.content.Context;
import android.content.res.Configuration;
import android.util.Log;

import com.bkon.capacitor.DarkMode.capacitordarkmode.R;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import org.json.JSONException;

@NativePlugin()
public class DarkMode extends Plugin {

    private boolean isDarkModeOn = false;
    private static final String EVENT_DARK_MODE_CHANGE = "darkModeStateChanged";

    @Override
    protected void handleOnRestart() {
        super.handleOnRestart();
        Log.i("capacitor","restarted");
        notifyWeb();
    }

    @Override
    protected void handleOnResume() {
        super.handleOnResume();
        Log.i("capacitor","resumed");
        notifyWeb();
    }

    public void notifyWeb() {
        JSObject data = checkMode();
        try {
            if (data.getBoolean("isDarkModeOn")) {
                getBridge().getActivity().getWindow()
                        .setNavigationBarColor(getBridge().getActivity().getResources().getColor(R.color.black));
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        Log.i("capacitor",data.getString("isDarkModeOn"));
        notifyListeners(this.EVENT_DARK_MODE_CHANGE, data, true);
    }

    @PluginMethod()
    public void isDarkModeOn(PluginCall call) {
        JSObject data = checkMode();
        call.success(data);
    }

    public JSObject checkMode() {
        Context ctx = getContext();
        JSObject data = new JSObject();

        int nightModeFlags = ctx.getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
        switch (nightModeFlags) {
            case Configuration.UI_MODE_NIGHT_YES:
                isDarkModeOn = true;
                data.put("isDarkModeOn", isDarkModeOn);
                break;

            case Configuration.UI_MODE_NIGHT_NO:
                isDarkModeOn = false;
                data = new JSObject();
                data.put("isDarkModeOn", isDarkModeOn);
                break;

            case Configuration.UI_MODE_NIGHT_UNDEFINED:
                isDarkModeOn = false;
                data = new JSObject();
                data.put("isDarkModeOn", isDarkModeOn);
                break;
        }
        return data;
    }
}

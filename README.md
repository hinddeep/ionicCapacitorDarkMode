# Ionic Capacitor Dark Mode

Platforms Supported: Android, iOS, Electron and Web/PWA

This plugin can be used to monitor the changes made to system's dark mode. 

# Installation
  npm install capacitor-dark-mode

# Android Configuration:
  Open MainActivity.java and add the following code inside this.init()
  add(DarkModePlugin.class); 
Adding the above mentioned line will add the following import statement:
  import com.bkon.capacitor.DarkMode.DarkModePlugin;
If you encounter errors, please add both the lines manually to MainActivity.java

# Import the Plugin in your app
  Open app.component.ts file and import the plugin as follows:
  import { Plugins, registerWebPlugin } from '@capacitor/core';
  import { DarkModePlugin  } from 'dark-mode';
  
# Register the Plugin (required only for Web/PWA/Electron
  Add the following code inside AppComponent's constructor:
  registerWebPlugin(DarkModePlugin)

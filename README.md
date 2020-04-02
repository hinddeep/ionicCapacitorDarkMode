# Ionic Capacitor Dark Mode

Platforms Supported: Android, iOS, Electron and Web/PWA

This plugin can be used to monitor the changes made to system's dark mode. 

# Installation <br/>
  <i> npm install capacitor-dark-mode </i>

# Android Configuration: <br/>
  Open MainActivity.java and add the following code inside this.init() <br/>
  <i> add(DarkModePlugin.class); </i> <br/>
Adding the above mentioned line will add the following import statement: <br/>
  <i> import com.bkon.capacitor.DarkMode.DarkModePlugin; </i> <br/>
If you encounter errors, please add both the lines manually to MainActivity.java <br/>

# Import the Plugin in your app <br/>
  Open app.component.ts file and import the plugin as follows: <br/>
 <i> import { Plugins, registerWebPlugin } from '@capacitor/core'; </i> <br/>
 <i> import { DarkMode } from 'capacitor-dark-mode' </i> <br/>
  
# Register the Plugin (required only for Web/PWA/Electron <br/>
  Add the following code inside AppComponent's constructor: <br/>
 <i>  registerWebPlugin(DarkMode) </i> <br/>

# Listen for changes to Dark Mode:
  <i>  Plugins.DarkMode.addListener("darkModeStateChanged", (state: any) => { <br/>
         if(state.isDarkModeOn) <br/>
         { <br/>
                // Dark mode is on. Apply dark theme to your app <br/>
         } <br/>
         else <br/>
         { <br/>
              // Dark mode is off. Apply light theme to your app <br/>
         } <br/>
         if(state.supported == false) <br/>
         { <br/>
            // Dark mode is not supported by the platform <br/>          
         } <br/>     
      });

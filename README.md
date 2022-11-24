# Ionic Capacitor Dark Mode

For detailed tutorial on how to enable dark mode using this plugin visit:
https://medium.com/@hinddeep.purohit007/supporting-dark-mode-in-ionic-capacitor-8e57fe9dbd47

Platforms Supported: Android, iOS, Electron and Web/PWA

This plugin can be used to monitor the changes made to system's dark mode.

# Installation <br/>

<i> npm install capacitor-dark-mode </i>

# Android Configuration: <br/>

1. Open AndroidManifest.xml and find the activity tag. <br/>
2. Inspect android:configChanges="..." <br/>
3. If you find uiMode, please remove it. If it isn't present you can move on safely without doing anything.

Open MainActivity.java and add the following code inside this.init() <br/>
<i> registerPlugin(DarkMode.class); </i> <br/>
Adding the above mentioned line will add the following import statement: <br/>
<i> import com.bkon.capacitor.DarkMode.DarkMode; </i> <br/>
If you encounter errors, please add both the lines manually to MainActivity.java <br/>

# iOS Configuration: <br/>

In the native ios project you will find two modules namely, 'App' and 'Pods' <br/>

1. Select Pods <br/>
2. Expand 'Development Pods' <br/>
3. Expand 'Capacitor' and open 'CAPBridgeViewController.swift' <br/>
4. Scroll to the very end of the class and paste the following method <br/>
```
   public override func traitCollectionDidChange(\_ previousTraitCollection: UITraitCollection?) {
      if #available(iOS 13.0, \*) {
         if self.traitCollection.userInterfaceStyle.rawValue != previousTraitCollection?.userInterfaceStyle.rawValue
         {
            var darkmode = ["isDarkModeOn":false]
            if self.traitCollection.userInterfaceStyle.rawValue == 2
            {
               darkmode = ["isDarkModeOn":true]
            }
            else
            {
               darkmode = ["isDarkModeOn":false]
            }
               NotificationCenter.default.post(name: NSNotification.Name(rawValue: "CAPDarkModeDidChange"), object: self, userInfo: darkmode )
            }
            else
            { 
               // No Change
            }
      } else {
         // Fallback on earlier versions.
      }
   }
```

# Web Configuration <br/>
```
import { Plugins } from '@capacitor/core';
const { DarkMode } = Plugins;
import 'capacitor-dark-mode';
```

<b> SPECIAL NOTE: </b> Remove the import " import 'capacitor-dark-mode' " when building the app for Android and iOS. THe native plugin will not be invoked if you forget to remove the import statement before building for Android and iOS Platform. 

If you wish to listen to system wide dark mode chamges on the web/PWA, add the following line to enable the listener:
```
 if(!(platform.is("android") || platform.is("ios")))
 {
   DarkMode.registerDarkModeChangeListener()
 }
```
# Listen for changes to Dark Mode:
The event listener might run outside the zone of angular so we might have to trigger change detection ourselves. That is why changedetectorref.detectChanges() has been used. <br/>
```
DarkMode.addListener("darkModeStateChanged", (state: any) => 
   if(state.isDarkModeOn) 
   { 
      // Dark mode is on. Apply dark theme to your app
      changedetectorref.detectChanges()
   }
   else
   {
      // Dark mode is off. Apply light theme to your app
      changedetectorref.detectChanges()
   }
   if(state.supported == false)
   {
      // Dark mode is not supported by the platform 
      changedetectorref.detectChanges()
    }
});
```

# Check if dark mode is enabled or not:
```
let darkmode = await DarkMode.isDarkModeOn();
console.log(darkmode.isDarkModeOn);
```

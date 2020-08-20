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
<i> add(DarkMode.class); </i> <br/>
Adding the above mentioned line will add the following import statement: <br/>
<i> import com.bkon.capacitor.DarkMode.DarkMode; </i> <br/>
If you encounter errors, please add both the lines manually to MainActivity.java <br/>

# Import the Plugin in your app <br/>

Open app.component.ts file and import the plugin as follows: <br/>
<i> import { Plugins } from '@capacitor/core'; </i> <br/>
<i> const { DarkMode } = Plugins; </i> <br/>

# Listen for changes to Dark Mode:

<i> DarkMode.addListener("darkModeStateChanged", (state: any) => { <br/>
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
 }); <br/>

# Check if dark mode is enabled or not:

let darkmode = await DarkMode.isDarkModeOn(); <br/>
console.log(darkmode.isDarkModeOn); <br/>

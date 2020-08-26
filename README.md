# Ionic Capacitor Screen Orientation

For detailed tutorial on how to use this plugin visit:
https://medium.com/@hinddeep.purohit007/handling-screen-orientation-changes-in-capacitor-apps-19fe339578a6

Demo Application: https://github.com/hinddeep/Demo-Ionic-Screen_Orientation

Platforms Supported: Android, iOS

The Capacitor plugin I’ve developed can be used to detect the current of orientation of the screen, lock the screen in a particular orientation (disable auto-rotate) or unlock screen rotation (enable auto-rotate) and to listen for orientation changes.

# Installation <br/>

<i> npm install capacitor-screen-orientation </i>

# Android Configuration: <br/>

Open MainActivity.java and add the following code inside this.init() <br/>
<i> add(ScreenOrientation.class); </i> <br/>
Adding the above mentioned line will add the following import statement: <br/>
<i> import com.bkon.capacitor.screenorientation.ScreenOrientation; </i> <br/>
If you encounter errors, please add both the lines manually to MainActivity.java <br/><br/>

If you want to listen for the orientation change event on Android: <br/>

1. Open “AndroidManifest.xml” for your app <br/>
2. Find the Activity tag <br/>
3. Go to android:configChanges=”...” <br/>
4. Remove ‘orientation |’ from configChanges <br/> <br/>

Supported Orientations: <br/>

1. LANDSCAPE: left of right is decided by the device’s sensor <br/>
2. LANDSCAPE_PRIMARY: explicitly specified by developer <br/>
3. LANDSCAPE_SECONDARY: explicitly specified by developer <br/>
4. PORTRAIT: up or upside down is decided by the device’s sensor <br/>
5. PORTRAIT_PRIMARY: explicitly specified by the user <br/>
6. PORTRAIT_SECONDARY: explicitly specified by the user <br/>
7. CURRENT: current orientation of the device <br/>

<b>SPECIAL NOTE: Ionic has implicitly disabled PORTRAIT_SECONDARY. </b><br/>

# iOS Configuration: <br/>

If you want to lock the screen to the specified orientation on iOS: <br/>

1. Open AppDelegate.swift for your app <br/>
2. Add the following code: <br/>

var orientationLock = UIInterfaceOrientationMask.all <br/><br/>

func application(\_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask { <br/>
return self.orientationLock <br/>
} <br/>

@objc func setOrientationLock(_ notification: Notification) <br/>
    { <br/>
        if let data = notification.userInfo as? [String: Int] <br/>
        { <br/>
            for  (_, mask) in data <br/>
            { <br/>
                switch mask <br/>
                { <br/>
                    case 1: self.orientationLock = UIInterfaceOrientationMask.portrait <br/>
                        break; <br/>
                    case 2: self.orientationLock = UIInterfaceOrientationMask.portraitUpsideDown <br/>
                        break; <br/>
                    case 3: self.orientationLock = UIInterfaceOrientationMask.landscapeRight <br/>
                        break; <br/>
                    case 4: self.orientationLock = UIInterfaceOrientationMask.landscapeLeft <br/>
                        break; <br/>
                    case 5: self.orientationLock = UIInterfaceOrientationMask.landscape <br/>
                        break; <br/>
                default: self.orientationLock = UIInterfaceOrientationMask.all <br/>
                } <br/>
            } <br/>
        } <br/>
    } <br/>

3. Locate: "func application(\_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {" <br/>
4. Add the following code inside the function: <br/>
   NotificationCenter.default.addObserver(self, selector: #selector(self.setOrientationLock), name: NSNotification.Name(rawValue: "CAPOrientationLocked"), object: nil) <br/>


Supported Orientations: <br/>

1. all: all orientations <br/>
2. allButUpsideDown: all orientations other than upside down <br/>
3. landscape: left of right is decided by the device’s sensor <br/>
4. landscapeLeft: explicitly specified by the user <br/>
5. landscapeRight: explicitly specified by the user <br/>
6. portrait: up or upside down is decided by the device’s sensor <br/>
7. portraitUpsideDown: explicitly specified by the user <br/>

<b> SPECIAL NOTE: Ionic has implicitly disabled portraitUpsideDown. </b> <br/>

# Import the Plugin in your Web app <br/>

Open app.component.ts file and import the plugin as follows: <br/>
<i> import { Plugins } from "@capacitor/core";</i> <br/>
<i> const { ScreenOrientation } = Plugins;</i> <br/>
<i> import 'capacitor-screen-orientation' </i> <br/>

<b> SPECIAL NOTE: Remove import 'capacitor-screen-orientation' when compiling app for Android. </b> <br/>

# Handle screen orientation:

1. Create a function to get the current screen orientation: <br/>
   async getOrientation() { <br/>
   let obj = await ScreenOrientation.getScreenOrientation(); <br/>
   this.screen_orientation = obj.orientation; <br/>
   } <br/>

2. Create a function to lock the screen in a particular orientation:
   async lockOrientation() { <br/>
   await ScreenOrientation.lockScreenOrientation({ <br/>
   orientation: this.screen_orientation_lock, <br/>
   }); <br/>
   } <br/>

Supported values for screen_orientation_lock variable: <br/>

1. LANDSCAPE_PRIMARY (Android and iOS) <br/>
2. PORTRAIT_PRIMARY (Android and iOS) <br/>
3. LANDSCAPE_SECONDARY (Android and iOS) <br/>
4. PORTRAIT_SECONDARY (Android and iOS) <br/>
5. LANDSCAPE (Android only) <br/>
6. PORTRAIT (Android only) <br/>
7. CURRENT (Android only) <br/>

3) Create a function to unlock screen rotation: <br/>
   async UnlockOrientation() { <br/>
   await ScreenOrientation.unlockScreenOrientation({}); <br/>
   } <br/>

4) Create a function that handles subscription to the orientation change event: <br/>
   subscribeToOrientationChanges() { <br/>
   ScreenOrientation.addListener("orientation_changed", (data) => { <br/>
   this.screen_orientation_event = data.orientation; <br/>
   }); <br/>
   } <br/>

# Rotate to a specific orientation (without locking the orientation): 
NOTE: NOT supported on Android <br/>
async rotate() { <br/>
    await ScreenOrientation.rotateTo({ <br/>
      orientation: this.rotateTo, <br/>
    }); <br/>
  } <br/>

import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(DarkMode)
public class DarkMode: CAPPlugin {
    
    @available(iOS 12.0, *)
    @objc func isDarkModeOn(_ call: CAPPluginCall) {
        var isDarkModeOn = false
        DispatchQueue.main.async {
            if self.bridge.bridgeDelegate.bridgedViewController?.traitCollection.userInterfaceStyle.rawValue == 2
            {
                isDarkModeOn = true
            }
            call.success([
                "isDarkModeOn": isDarkModeOn
            ])
        }
    }
}

import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(DarkMode)
public class DarkMode: CAPPlugin {

    override public func load() {
        NotificationCenter.default.addObserver(self, selector: #selector(self.darkModeChanged), name: NSNotification.Name(rawValue: "CAPDarkModeDidChange"), object: nil)
         
      }
    
    @objc func darkModeChanged(_ notification: Notification)
    {
        if let data = notification.userInfo as? [String: Bool]
        {
            notifyListeners("darkModeStateChanged", data: data, retainUntilConsumed: true)
//            for (darkmode, status) in data
//            {
//                print("\(darkmode) : \(status)")
//            }
        }
    }
    
    @available(iOS 13.0, *)
    @objc func isDarkModeOn(_ call: CAPPluginCall) {
        var isDarkModeOn = false
        DispatchQueue.main.async {
            if self.bridge?.viewController?.traitCollection.userInterfaceStyle.rawValue == 2
            {
                isDarkModeOn = true
            }
            call.success([
                "isDarkModeOn": isDarkModeOn
            ])
        }
    }
}

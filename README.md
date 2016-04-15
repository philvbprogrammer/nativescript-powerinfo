# NativeScript Battery & Power Plugin
Battery & Power plugin for NativeScript

## Installation
```sh
tns plugin add nativescript-powerinfo
```

## Usage
JavaScript:
```js
var power = require("nativescript-powerinfo");

//Start Power Updates
power.startPowerUpdates(function(Info) {
    console.log("battery charge: " + Info.percentage + "%");
});

//Stop Power Updates
stopPowerUpdates();
```

TypeScript:
```js
let power = require("nativescript-powerinfo");

//Start Power Updates
power.startPowerUpdates(function(Info) {
    console.log("battery charge: " + Info.percentage + "%");
});

//Stop Power Updates
stopPowerUpdates();
```



## Info Structure
Results from callback:

- Info.health returns:
 - integer containing the current health constant relating to the following.
 - android.os.BatteryManager.BATTERY_HEALTH_COLD	
 - android.os.BatteryManager.BATTERY_HEALTH_DEAD
 - android.os.BatteryManager.BATTERY_HEALTH_GOOD
 - android.os.BatteryManager.BATTERY_HEALTH_OVERHEAT
 - android.os.BatteryManager.BATTERY_HEALTH_OVER_VOLTAGE	
 - android.os.BatteryManager.BATTERY_HEALTH_UNKNOWN
 - android.os.BatteryManager.BATTERY_HEALTH_UNSPECIFIED_FAILURE 
- Info.icon_small returns:
 - Integer containing the resource ID of a small status bar icon indicating the current battery state.
- Info.present returns:
 - boolean indicating whether a battery is present.
- Info.plugged returns:
 - integer indicating whether the device is plugged in to a power source; 0 means it is on battery, other constants are different types of power sources.
 - android.os.BatteryManager.BATTERY_PLUGGED_AC
 - android.os.BatteryManager.BATTERY_PLUGGED_USB
 - android.os.BatteryManager.BATTERY_PLUGGED_WIRELESS
- Info.percent returns:
 - integer containing percentage of battery left.
- Info.level returns:
 - integer containing the current battery level, from 0 to Info.scale.
- Info.scale returns:
 - integer containing the maximum battery level.
- Info.status returns:
 - integer containing the current status constant.
 - android.os.BatteryManager.BATTERY_STATUS_CHARGING
 - android.os.BatteryManager.BATTERY_STATUS_DISCHARGING
 - android.os.BatteryManager.BATTERY_STATUS_FULL
 - android.os.BatteryManager.BATTERY_STATUS_NOT_CHARGING
 - android.os.BatteryManager.BATTERY_STATUS_UNKNOWN
- Info.technology returns:
 - String describing the technology of the current battery.
- Info.temperature returns:
 - integer containing the current battery temperature.
- Info.voltage returns:
 - integer containing the current battery voltage level.

[Android SDK Reference](http://developer.android.com/reference/android/os/BatteryManager.html)
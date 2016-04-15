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
```
- Info.health - 
- Info.icon_small
- Info.present
- Info.plugged
- Info.percent
- Info.level
- Info.scale
- Info.status
- Info.technology
- Info.temperature
- Info.voltage

[SDK Reference](http://developer.android.com/reference/android/os/BatteryManager.html)
```
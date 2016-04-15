# NativeScript Battery & Power Plugin
Battery & Power plugin for NativeScript

## Installation
```
tns plugin add nativescript-powerinfo
```

## Usage
```
var power = require("nativescript-powerinfo");

power.startPowerUpdates(function(Info) {
    console.log("battery charge: " + Info.percentage + "%");
});
```

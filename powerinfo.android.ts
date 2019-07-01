import * as app from "tns-core-modules/application";

declare let android: any;
export interface PowerData {
    health: number;
    icon_small: number;
    present: boolean;
    plugged: number;
    percent: number;
    level: number;
    scale: number;
    status: number;
    technology: string;
    temperature: number;
    voltage: number;
}

let powerListener;

export function startPowerUpdates(callback: (PowerData) => void) {
    if (powerListener) {
        throw new Error("Already listening for power updates.")
    }
    if (!callback) {
        throw new Error("No callback defined for power updates.")
    }

    powerListener = app.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, function onReceiveCallback(context, intent) {
        callback({
            plugged: intent.getIntExtra(android.os.BatteryManager.EXTRA_PLUGGED, -1),
            percent: intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1) / intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1) * 100,
            level: intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1),
            scale: intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1),
            health: intent.getIntExtra(android.os.BatteryManager.EXTRA_HEALTH, 0),
            icon_small: intent.getIntExtra(android.os.BatteryManager.EXTRA_ICON_SMALL, 0),
            present: intent.getExtras().getBoolean(android.os.BatteryManager.EXTRA_PRESENT),
            status: intent.getIntExtra(android.os.BatteryManager.EXTRA_STATUS, 0),
            technology: intent.getExtras().getString(android.os.BatteryManager.EXTRA_TECHNOLOGY),
            temperature: intent.getIntExtra(android.os.BatteryManager.EXTRA_TEMPERATURE, 0),
            voltage: intent.getIntExtra(android.os.BatteryManager.EXTRA_VOLTAGE, 0)
        })
    });
}

export function stopPowerUpdates() {
    if (powerListener) {
        app.android.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
        powerListener = undefined;
    }
}

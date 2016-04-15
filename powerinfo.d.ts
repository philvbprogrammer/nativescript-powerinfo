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

export function startPowerUpdates(callback: (PowerData) => void);
export function stopPowerUpdates();

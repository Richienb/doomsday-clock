import Promise from "bluebird"

declare interface DoomsdayData {
    /**
     * The amount of minutes left.
    */
    minutes: number

    /**
     * The statement that the minutes were sourced from.
     */
    source: string

    /**
     * The amount of time left as represented as `HH:mm:ss A`.
    */
    time: string
}

/**
 * Get the time until midnight according to the Doomsday Clock.
 * @param callback An optional callback to use instead of a Promise.
 * @example
 * ```
 * const doomsdayClock = require("doomsday-clock");
 *
 * doomsdayClock().then(({ minutes }) => {
 *     console.log(`There are ${minutes} minutes 'till midnight!`);
 * });
 * ```
*/
declare function doomsdayClock(): Promise<DoomsdayData>;
declare function doomsdayClock(callback: (data: DoomsdayData) => any): void;

export = doomsdayClock;

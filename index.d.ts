declare namespace doomsdayClock {
	interface DoomsdayData {
		/**
		 * The amount of minutes left.
		*/
		seconds: number

		/**
		 * The statement that the minutes were sourced from.
		 */
		source: string

		/**
		 * The amount of time left as represented as `HH:mm:ss A`.
		*/
		time: string
	}
}

/**
 * Get the time until midnight according to the Doomsday Clock.
 * @example
 * ```
 * const doomsdayClock = require("doomsday-clock");
 *
 * (async () => {
 * 	const { seconds } = await doomsdayClock();
 *	console.log(`There are ${seconds} seconds 'till midnight!`);
 * })();
 * ```
*/
declare function doomsdayClock(): Promise<doomsdayClock.DoomsdayData>

export = doomsdayClock

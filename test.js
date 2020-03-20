const test = require("ava")
const doomsdayClock = require(".")

test("main", async (t) => {
	const data = await doomsdayClock()
	t.is(typeof data.seconds, "number")
	t.is(typeof data.source, "string")
	t.is(typeof data.time, "string")
})

import test from "ava"
import doomsdayClock from "."

test("main", async (t) => {
    const data = await doomsdayClock()
    t.is(typeof data.minutes, "number")
    t.is(typeof data.source, "string")
    t.is(typeof data.time, "string")
})

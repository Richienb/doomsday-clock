"use strict"

const got = require("got")
const { load: $ } = require("cheerio")
const { sentenceCase } = require("sentence-case")
const dayjs = require("dayjs")
dayjs.extend(require("dayjs/plugin/customParseFormat"))

module.exports = async () => {
	const { body } = await got("https://thebulletin.org/doomsday-clock/past-statements/")

	const raw = $(body)(".uabb-infobox-title").first().text()

	const { groups: parsed } = raw.match(/IT IS(?: STILL)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|SECONDS) TO MIDNIGHT/)
	const seconds = parsed.type === "SECONDS" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

	return {
		seconds,
		source: sentenceCase(raw),
		time: dayjs("0 AM", "HH A").subtract(seconds, "second").format("HH:mm:ss A"),
	}
}

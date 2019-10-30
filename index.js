"use strict"

const got = require("got")
const { load: $ } = require("cheerio")
const { fromPromise } = require("universalify")
const _ = require("lodash")
const toBluebird = require("to-bluebird")
const dayjs = require("dayjs")
dayjs.extend(require("dayjs/plugin/customParseFormat"))

module.exports = fromPromise(() => toBluebird(got("https://thebulletin.org/doomsday-clock/past-statements/").then(({ body }) => {
    const raw = $(body)(".uabb-infobox-title").first().text()
    const parsed = raw.match(/IT IS(?: STILL)? (?<mins>\d+)(?: AND A (?<half>HALF))? MINUTES TO MIDNIGHT/)
    const mins = _.toNumber(parsed.groups.mins) + (parsed.groups.half ? 0.5 : 0)
    return {
        minutes: mins,
        source: _.upperFirst(_.lowerCase(raw)),
        time: dayjs("0 AM", "HH A").subtract(mins, "minute").format("HH:mm:ss A"),
    }
})))

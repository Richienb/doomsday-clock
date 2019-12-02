"use strict"

const ky = require("ky-universal")
const { load: $ } = require("cheerio")
const { fromPromise } = require("universalify")
const _ = require("lodash")
const dayjs = require("dayjs")
const NamedRegExp = require("named-regexp-groups")
dayjs.extend(require("dayjs/plugin/customParseFormat"))

module.exports = fromPromise(() => ky("https://thebulletin.org/doomsday-clock/past-statements/")
    .then((res) => res.text())
    .then((body) => {
        const raw = $(body)(".uabb-infobox-title").first().text()
        const { groups: parsed } = raw.match(new NamedRegExp("IT IS(?: STILL)? (?<mins>\\d+)(?: AND A (?<half>HALF))? MINUTES TO MIDNIGHT"))
        const mins = _.toNumber(parsed.mins) + (parsed.half ? 0.5 : 0)
        return {
            minutes: mins,
            source: _.upperFirst(_.lowerCase(raw)),
            time: dayjs("0 AM", "HH A").subtract(mins, "minute").format("HH:mm:ss A"),
        }
    }))

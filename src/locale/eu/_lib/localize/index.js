import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['K.a.', 'K.o.'],
  abbreviated: ['K.a.', 'K.o.'],
  wide: ['Kristo aurreko', 'Kristo ondorengo']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1Hh', '2Hh', '3Hh', '4Hh'],
  wide: ['1. hiruhilekoa', '2. hiruhilekoa', '3. hiruhilekoa', '4. hiruhilekoa']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['U', 'O', 'M', 'A', 'M', 'E', 'U', 'A', 'I', 'U', 'A', 'A'],
  abbreviated: ['urt.', 'ots.', 'mar.', 'api.', 'mai.', 'eka.', 'uzt.', 'abu.', 'ira.', 'urr.', 'aza.', 'abe.'],
  wide: ['Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uzatila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua']
}

var dayValues = {
  narrow: ['I', 'A', 'A', 'A', 'O', 'O', 'L'],
  short: ['ig.', 'al.', 'ar.', 'az.', 'og.', 'or.', 'lr.'],
  abbreviated: ['ig.', 'al.', 'ar.', 'az.', 'og.', 'or.', 'lr.'],
  wide: ['igandea', 'astelehena', 'asteartea', 'asteazkena', 'osteguna', 'osirala', 'larunbata']
}

var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'gauerdia',
    noon: 'goizaldea',
    morning: 'goiza',
    afternoon: 'eguerdia',
    evening: 'arratsaldea',
    night: 'gaua'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gauerdia',
    noon: 'goizaldea',
    morning: 'goiza',
    afternoon: 'eguerdia',
    evening: 'arratsaldea',
    night: 'gaua'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gauerdia',
    noon: 'goizaldea',
    morning: 'goiza',
    afternoon: 'eguerdia',
    evening: 'arratsaldea',
    night: 'gaua'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'gauerdiko',
    noon: 'goizaldeko',
    morning: 'goizeko',
    afternoon: 'eguerdiko',
    evening: 'iluntzeko',
    night: 'gaueko'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gauerdiko',
    noon: 'goizaldeko',
    morning: 'goizeko',
    afternoon: 'arratsaldeko',
    evening: 'arratsaleko',
    night: 'gaueko'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gauerdiko',
    noon: 'goizaldeko',
    morning: 'goizeko',
    afternoon: 'eguerdiko',
    evening: 'arratsaleko',
    night: 'gaueko'
  }
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)
  return number + '.'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaulFormattingWidth: 'wide'
  })
}

export default localize

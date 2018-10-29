var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'segundo bat baino gutxiago',
    other: '{{count}} segundo baino gutxiago'
  },

  xSeconds: {
    one: 'segundo bat',
    other: '{{count}} segundo'
  },

  halfAMinute: 'minutu erdia',

  lessThanXMinutes: {
    one: 'minutu bat baino gutxiago',
    other: '{{count}} minutu baino gutxiago'
  },

  xMinutes: {
    one: 'minutu bat',
    other: '{{count}} minutu'
  },

  aboutXHours: {
    one: 'ordubete inguru',
    other: '{{count}} ordu inguru'
  },

  xHours: {
    one: 'ordubete',
    other: '{{count}} ordu'
  },

  xDays: {
    one: 'egun bat',
    other: '{{count}} egun'
  },

  aboutXMonths: {
    one: 'hilabete bat inguru',
    other: '{{count}} hilabete inguru'
  },

  xMonths: {
    one: 'hilabete bat',
    other: '{{count}} hilabete'
  },

  aboutXYears: {
    one: 'urtebete inguru',
    other: '{{count}} urte inguru'
  },

  xYears: {
    one: 'urtebete',
    other: '{{count}} urte'
  },

  overXYears: {
    one: 'urtebete baino gehiago',
    other: '{{count}} urte baino gehiago'
  },

  almostXYears: {
    one: 'ia urtebete',
    other: 'ia {{count}} urte'
  }
}

export default function formatDistance (token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result + ' barru'
    } else {
      return 'duela ' + result
    }
  }

  return result
}

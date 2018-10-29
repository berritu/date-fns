import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'
import match from './_lib/match/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Basque locale (Spain).
 * @language Basque (Euskara)
 * @iso-639-2 eus
 * @author Andoni Sánchez [@sanchezandoni]{@link https://github.com/sanchezandoni}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/berritu}
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Astelehena */,
    firstWeekContainsDate: 1
  }
}

export default locale

/*
 * Bibliografia:
 * - http://www.euskaltzaindia.eus/dok/arauak/Araua_0037.pdf
 * - http://euskaljakintza.com/kontsultategia/laburdurak/
 */
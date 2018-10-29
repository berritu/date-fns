var formatRelativeLocale = {
  lastWeek: "'aurreko' eeee ',' p'-etan'",
  yesterday: "'atzo' p'-etan'",
  today: "'gaur' p'-etan'",
  tomorrow: "'bihar' p'-etan'",
  nextWeek: "eeee ',' p'-etan'",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}

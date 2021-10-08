import { parseISO, format } from 'date-fns'

export default function Date({ dateString, type }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString} className={type}>{format(date, 'yyyy.MM.dd')}</time>
}
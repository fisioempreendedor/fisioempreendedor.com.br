import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { ptBR } from 'date-fns/locale'

export default function distanceToNow(dateTime: number | Date) {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
    locale: ptBR
  })
}
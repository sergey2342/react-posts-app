import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { ru as ruLocale } from 'date-fns/locale'

const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    timeAgo = formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })
  }

  return (
    <span>{timeAgo}</span>
  )
}

export default TimeAgo

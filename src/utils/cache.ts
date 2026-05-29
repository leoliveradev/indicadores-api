import NodeCache from 'node-cache'

export const cache = new NodeCache({
  stdTTL: 60,
  checkperiod: 120
})

export const generateCacheKey = (
  table: string,
  query: any
) => {
  return `${table}:${JSON.stringify(query)}`
}
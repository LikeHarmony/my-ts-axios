import { isObject } from './utils'

function normalizeHeaderName(headers: any, normalizeName: string): void {
  if (!headers) return 
  Object.keys(headers).forEach(name => {
    debugger
    if (
      name !== normalizeName &&
      name.toUpperCase() === normalizeName.toUpperCase()
    ) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any) {
  normalizeHeaderName(headers, 'Content-Type')
  if (isObject(data)) {
    if (headers && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json;charset=utf-8"
    }
  }
  return headers
}
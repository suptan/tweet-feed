import { map } from 'lodash'

const objectToQueryString = (obj: any) =>
  map(obj, (value: string, key: string) => `${key}=${encodeURIComponent(value)}`).join('&')

export {
  objectToQueryString,
}

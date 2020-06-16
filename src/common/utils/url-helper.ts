import { map } from 'lodash'

const objectToQueryString = (obj: any) =>
  map(obj, (value: string, key: string) => `${key}=${value}`).join('&')

export {
  objectToQueryString,
}

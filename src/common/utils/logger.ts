import getConfig from 'next/config';

const { publicRuntimeConfig: { NODE_ENV } } = getConfig();

/**
 * TODO, sent log data to cloud service or API
 */

 const info = (msg: string): void => {
  console.log(msg); // tslint:disable-line
}

const debug = (msg: string, obj: any): void => {
  if (NODE_ENV === 'production') return;
  console.log(msg, JSON.stringify(obj)); // tslint:disable-line
}

const warning = (msg: string, obj: any): void => {
  console.log(msg, JSON.stringify(obj)); // tslint:disable-line
}

const error = (msg: string, obj: any): void => {
  console.log(msg, JSON.stringify(obj)); // tslint:disable-line
}

const handleProfileRender = (
  id: string, phase: string, actualTime: number,
  baseTime: number, startTime: number, commitTime: number
): void => {
  if (NODE_ENV !== 'test') {
    // tslint:disable-next-line
    console.log(id, phase, actualTime, baseTime, startTime, commitTime);
  }
}

export default {
  info,
  debug,
  warning,
  error,
  handleProfileRender,
}

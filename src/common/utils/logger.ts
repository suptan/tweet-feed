// TODO, sent log data to cloud service or API
const info = (msg: string): void => {
  console.log(msg); // tslint:disable-line
}

const debug = (msg: string, obj: any): void => {
  console.log(msg, JSON.stringify(obj)); // tslint:disable-line
}

const warning = (msg: string, obj: any): void => {
  console.log(msg, JSON.stringify(obj)); // tslint:disable-line
}

const error = (msg: string, obj: any): void => {
    console.log(msg, JSON.stringify(obj)); // tslint:disable-line
}

export default {
  info,
  debug,
  warning,
  error,
}

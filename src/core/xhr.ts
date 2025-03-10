import { AxiosRequestConfig } from "../types";

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  // xhrReq.open(method, url, async, user, password);
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
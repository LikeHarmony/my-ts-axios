import { AxiosRequestConfig } from './types'
import xhr from './core/xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from "./helpers/data";
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
  config.headers = transformHeaders(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}
function transformRequestData(config: AxiosRequestConfig): any {
  const {data} = config
  return transformRequest(data)
}
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data)
}
export default axios
import { AxiosRequestConfig } from './types'
import xhr from './core/xhr'
import { buildURL } from './helpers/url'
import {transformRequest} from "./helpers/data";


function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function transformRequestData(config: AxiosRequestConfig): any {
  const {data} = config
  return transformRequest(data)
}
function transformUrl(config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}
export default axios
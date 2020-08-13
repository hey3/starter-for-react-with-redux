import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

type AxiosResponse<T> = {
  data?: T
  error?: AxiosError
  isSuccess: boolean
}

export class ApiClient {
  axiosInstance: AxiosInstance
  constructor(baseURL = '') {
    this.axiosInstance = axios.create({ baseURL })

    this.axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        return config
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      }
    )
  }
  async get<T = Record<string, unknown>>(
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.get(path, { params })
      return ApiClient.createSuccessPromise<T>(result.data)
    } catch (e) {
      return ApiClient.createFailurePromise<T>(e)
    }
  }
  async post<T = Record<string, unknown>>(
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.post<T>(path, params)
      return ApiClient.createSuccessPromise<T>(result.data)
    } catch (e) {
      return ApiClient.createFailurePromise<T>(e)
    }
  }
  async put<T = Record<string, unknown>>(
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.put<T>(path, params)
      return ApiClient.createSuccessPromise<T>(result.data)
    } catch (e) {
      return ApiClient.createFailurePromise<T>(e)
    }
  }
  async delete<T = Record<string, unknown>>(path: string): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.delete(path)
      return ApiClient.createSuccessPromise<T>(result.data)
    } catch (e) {
      return ApiClient.createFailurePromise<T>(e)
    }
  }
  async patch<T = Record<string, unknown>>(
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.patch<T>(path, params)
      return ApiClient.createSuccessPromise<T>(result.data)
    } catch (e) {
      return ApiClient.createFailurePromise<T>(e)
    }
  }
  private static createSuccessPromise<T>(data: T): Promise<AxiosResponse<T>> {
    return Promise.resolve<AxiosResponse<T>>({ data, isSuccess: true })
  }
  private static createFailurePromise<T>(error: AxiosError): Promise<AxiosResponse<T>> {
    return Promise.resolve<AxiosResponse<T>>({ error, isSuccess: false })
  }
}

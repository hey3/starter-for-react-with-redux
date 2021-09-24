import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

type AxiosSuccessResponse<T> = {
  data: T
  status: number
  isSuccess: true
}

type AxiosFailureResponse = {
  error: AxiosError
  status: number
  isSuccess: false
}

export type AxiosResponse<T> = AxiosSuccessResponse<T> | AxiosFailureResponse

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
      return ApiClient.createSuccessPromise<T>(result.data, result.status)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return ApiClient.createFailurePromise(e, e.response?.status ?? 500)
      }
      throw new Error('Internal Server Error')
    }
  }
  async post<T = Record<string, unknown>>(
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.post<T>(path, params)
      return ApiClient.createSuccessPromise<T>(result.data, result.status)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return ApiClient.createFailurePromise(e, e.response?.status ?? 500)
      }
      throw new Error('Internal Server Error')
    }
  }
  async put<T = Record<string, unknown>>(
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.put<T>(path, params)
      return ApiClient.createSuccessPromise<T>(result.data, result.status)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return ApiClient.createFailurePromise(e, e.response?.status ?? 500)
      }
      throw new Error('Internal Server Error')
    }
  }
  async delete<T = Record<string, unknown>>(path: string): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.delete(path)
      return ApiClient.createSuccessPromise<T>(result.data, result.status)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return ApiClient.createFailurePromise(e, e.response?.status ?? 500)
      }
      throw new Error('Internal Server Error')
    }
  }
  async patch<T = Record<string, unknown>>(
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const result = await this.axiosInstance.patch<T>(path, params)
      return ApiClient.createSuccessPromise<T>(result.data, result.status)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return ApiClient.createFailurePromise(e, e.response?.status ?? 500)
      }
      throw new Error('Internal Server Error')
    }
  }
  private static createSuccessPromise<T>(
    data: T,
    status: number
  ): Promise<AxiosSuccessResponse<T>> {
    return Promise.resolve<AxiosSuccessResponse<T>>({ data, status, isSuccess: true })
  }
  private static createFailurePromise(
    error: AxiosError,
    status: number
  ): Promise<AxiosFailureResponse> {
    return Promise.resolve<AxiosFailureResponse>({ error, status, isSuccess: false })
  }
}

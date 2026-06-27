interface ApiClass<T> {
  new (...args: any): T
}

export const useApiWrapper = <T>(Api: ApiClass<T>): T => {
  return new Api({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
  })
}

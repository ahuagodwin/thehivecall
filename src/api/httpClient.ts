import { API_CONFIG } from '@config/site.config'

export interface HttpResponse<T> {
  data: T
  ok: boolean
}

async function request<T>(path: string, options: RequestInit = {}): Promise<HttpResponse<T>> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), API_CONFIG.timeoutMs)

  try {
    const res = await fetch(`${API_CONFIG.baseUrl}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
    const data = (await res.json().catch(() => null)) as T
    return { data, ok: res.ok }
  } finally {
    clearTimeout(timeout)
  }
}

export const httpClient = {
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
}

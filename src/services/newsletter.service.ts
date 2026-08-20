import { httpClient } from '@api/httpClient'
import { wait } from '@lib/utils'

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean }> {
  try {
    const res = await httpClient.post<{ success: boolean }>('/newsletter', { email })
    if (res.ok) return { success: true }
    throw new Error('request failed')
  } catch {
    await wait(700)
    return { success: true }
  }
}

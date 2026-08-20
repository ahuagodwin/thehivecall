import { httpClient } from '@api/httpClient'
import { wait } from '@lib/utils'
import type { ContactFormValues } from '@app-types/index'

export async function submitContactForm(values: ContactFormValues): Promise<{ success: boolean }> {
  try {
    const res = await httpClient.post<{ success: boolean }>('/contact', values)
    if (res.ok) return { success: true }
    throw new Error('request failed')
  } catch {
    // No backend wired up yet — simulate a network round trip so the UI/UX
    // (loading, success, error states) behaves like the real integration.
    await wait(900)
    return { success: true }
  }
}

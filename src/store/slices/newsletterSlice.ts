import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { subscribeToNewsletter } from '@services/newsletter.service'
import type { SubmissionStatus } from '@app-types/index'

interface NewsletterState {
  status: SubmissionStatus
  error: string | null
}

const initialState: NewsletterState = {
  status: 'idle',
  error: null,
}

export const sendNewsletterSignup = createAsyncThunk(
  'newsletter/send',
  async (email: string) => {
    return subscribeToNewsletter(email)
  }
)

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    resetNewsletterStatus(state) {
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendNewsletterSignup.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(sendNewsletterSignup.fulfilled, (state) => {
        state.status = 'success'
      })
      .addCase(sendNewsletterSignup.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message ?? 'Something went wrong'
      })
  },
})

export const { resetNewsletterStatus } = newsletterSlice.actions
export default newsletterSlice.reducer

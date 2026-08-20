import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { submitContactForm } from '@services/contact.service'
import type { ContactFormValues, SubmissionStatus } from '@app-types/index'

interface ContactState {
  status: SubmissionStatus
  error: string | null
}

const initialState: ContactState = {
  status: 'idle',
  error: null,
}

export const sendContactForm = createAsyncThunk(
  'contact/send',
  async (values: ContactFormValues) => {
    return submitContactForm(values)
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactStatus(state) {
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.status = 'success'
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message ?? 'Something went wrong'
      })
  },
})

export const { resetContactStatus } = contactSlice.actions
export default contactSlice.reducer

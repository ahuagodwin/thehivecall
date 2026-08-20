import { create } from 'zustand'
import { TESTIMONIALS } from '@data/home.data'

interface UIState {
  isMobileMenuOpen: boolean
  openDropdownId: string | null
  activeTestimonial: number
  isHeaderScrolled: boolean
  activeHeroTab: number

  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  setOpenDropdown: (id: string | null) => void
  setActiveTestimonial: (index: number) => void
  nextTestimonial: () => void
  prevTestimonial: () => void
  setHeaderScrolled: (scrolled: boolean) => void
  setActiveHeroTab: (index: number) => void
}

export const useUIStore = create<UIState>((set, get) => ({
  isMobileMenuOpen: false,
  openDropdownId: null,
  activeTestimonial: 0,
  isHeaderScrolled: false,
  activeHeroTab: 0,

  toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  setOpenDropdown: (id) => set({ openDropdownId: id }),
  setActiveTestimonial: (index) => set({ activeTestimonial: index }),
  nextTestimonial: () =>
    set({ activeTestimonial: (get().activeTestimonial + 1) % TESTIMONIALS.length }),
  prevTestimonial: () =>
    set({
      activeTestimonial:
        (get().activeTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    }),
  setHeaderScrolled: (scrolled) => set({ isHeaderScrolled: scrolled }),
  setActiveHeroTab: (index) => set({ activeHeroTab: index }),
}))

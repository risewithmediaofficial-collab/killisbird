import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Active product card index in SystemsSection (0–3)
  activeProductIndex: 0,
  // Mobile navigation menu open state
  mobileMenuOpen: false,
  // Contact form current step (0 = idle, 1 = filling, 2 = submitted)
  contactFormStep: 0,
  // Global loading state
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveProductIndex(state, action) {
      state.activeProductIndex = action.payload;
    },
    openMobileMenu(state) {
      state.mobileMenuOpen = true;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setContactFormStep(state, action) {
      state.contactFormStep = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setActiveProductIndex,
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  setContactFormStep,
  setIsLoading,
} = uiSlice.actions;

// Selectors
export const selectActiveProductIndex = (state) => state.ui.activeProductIndex;
export const selectMobileMenuOpen = (state) => state.ui.mobileMenuOpen;
export const selectContactFormStep = (state) => state.ui.contactFormStep;
export const selectIsLoading = (state) => state.ui.isLoading;

export default uiSlice.reducer;

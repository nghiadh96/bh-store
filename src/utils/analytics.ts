// Google Analytics Event Tracking
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined tracking functions
export const trackPhoneCall = () => {
  trackEvent("phone_call", "engagement", "0966616636");
};

export const trackZaloChat = () => {
  trackEvent("zalo_chat", "engagement", "0966616636");
};

export const trackEmailClick = () => {
  trackEvent("email_click", "engagement", "bhdesignmedia@gmail.com");
};

export const trackContactForm = () => {
  trackEvent("contact_form", "lead_generation", "contact_form_submit");
};

export const trackPortfolioView = (itemName: string) => {
  trackEvent("portfolio_view", "engagement", itemName);
};

export const trackPortfolioDownload = (itemName: string) => {
  trackEvent("portfolio_download", "engagement", itemName);
};

export const trackScrollToSection = (sectionName: string) => {
  trackEvent("scroll_to_section", "navigation", sectionName);
};

export const trackFloatingButtonClick = (buttonType: string) => {
  trackEvent("floating_button_click", "engagement", buttonType);
};

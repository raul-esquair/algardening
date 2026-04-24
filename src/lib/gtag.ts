declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const FORM_CONVERSION = "AW-703328787/0Vm6CLDm3aEcEJPkr88C";
const PHONE_CONVERSION = "AW-703328787/K-9NCO6o4aEcEJPkr88C";

export function trackFormConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: FORM_CONVERSION,
    value: 75.0,
    currency: "USD",
  });
}

export function trackPhoneConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: PHONE_CONVERSION,
    value: 40.0,
    currency: "USD",
  });
}

export {};

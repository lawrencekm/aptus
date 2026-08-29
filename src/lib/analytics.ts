/**
 * Conversion taxonomy.
 *
 * Events are pushed to `window.dataLayer` so any tag manager (GTM, GA4 via
 * GTM, Plausible proxy) can consume them without this codebase depending on a
 * specific vendor. No personally identifying data is ever included in a
 * payload — only the category of action and where it happened.
 */

export const EVENTS = {
  inquiryFormViewed: "inquiry_form_viewed",
  inquiryFormStarted: "inquiry_form_started",
  inquiryStepCompleted: "inquiry_step_completed",
  inquirySubmitted: "inquiry_submitted",
  inquiryFailed: "inquiry_failed",
  whatsappClicked: "whatsapp_clicked",
  phoneClicked: "phone_clicked",
  emailClicked: "email_clicked",
  primaryCtaClicked: "primary_cta_clicked",
  resourceOpened: "resource_opened",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Payload[];
  }
}

export function track(event: EventName, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

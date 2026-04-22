type GtagConsentValue = "granted" | "denied";

interface GtagConsentParams {
  analytics_storage?: GtagConsentValue;
  ad_storage?: GtagConsentValue;
  ad_user_data?: GtagConsentValue;
  ad_personalization?: GtagConsentValue;
  wait_for_update?: number;
}

declare function gtag(command: "js", date: Date): void;
declare function gtag(command: "config", targetId: string, config?: Record<string, unknown>): void;
declare function gtag(command: "event", action: string, params?: Record<string, unknown>): void;
declare function gtag(command: "consent", type: "default" | "update", params: GtagConsentParams): void;

interface Window {
  gtag: typeof gtag;
  dataLayer: unknown[];
}
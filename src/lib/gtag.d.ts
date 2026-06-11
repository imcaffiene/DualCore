interface GtagConfig {
  page_path?: string;
  [key: string]: unknown;
}

interface GtagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

interface Window {
  gtag: (
    command: "config" | "event" | "js" | "set" | "consent",
    targetId: string | Date,
    config?: GtagConfig | GtagEvent | { [key: string]: string },
  ) => void;
  dataLayer?: unknown[];
}

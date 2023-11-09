// Google Analytics tracking ID
export const GA_TRACKING_ID: string = "G-XXXX아이디"; // 측정ID 설정: .env 파일로 관리해도된다.

// Type for the event function parameters
interface EventParams {
  action: string;
  category: string;
  label: string;
  value: number;
}

// Record a pageview for a given URL
export const pageview = (url: string): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Record a custom event
export const event = ({
  action,
  category,
  label,
  value,
}: EventParams): void => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

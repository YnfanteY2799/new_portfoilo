import type { ReactElement } from "react";
import type { IGenericIconSvg } from "@/types";

export default function JestIcon({ size = 24, className }: IGenericIconSvg): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      className={className}
      height={size}
      viewBox="0 0 256 283"
    >
      <path
        fill="#99425B"
        d="M239.553 138.96c0-14.508-11.762-26.27-26.27-26.27c-.934 0-1.854.05-2.762.146l36.082-106.42H93.267l36.032 106.327a26.318 26.318 0 0 0-1.597-.052c-14.508 0-26.27 11.76-26.27 26.27c0 11.727 7.686 21.656 18.293 25.034c-5.602 9.704-12.652 18.445-20.656 25.997c-10.884 10.267-23.34 18.053-36.812 22.85c-16.04-8.24-23.614-26.565-16.78-42.632c.772-1.815 1.56-3.654 2.313-5.485c11.62-2.712 20.28-13.129 20.28-25.576c0-14.509-11.762-26.27-26.271-26.27s-26.27 11.761-26.27 26.27c0 8.897 4.426 16.756 11.193 21.508c-6.502 14.804-16.06 30.298-19.038 48.255c-3.569 21.52-.012 44.364 18.601 57.265c43.348 30.044 90.402-18.625 140.014-30.86c17.98-4.433 37.717-3.719 53.558-12.893c11.896-6.89 19.739-18.309 21.964-31.128c2.2-12.664-1.006-25.273-8.378-35.497a26.158 26.158 0 0 0 6.11-16.839"
      />
      <path
        fill="#FFF"
        d="M235.5 190.198c-1.932 11.13-8.806 20.851-18.858 26.674c-9.371 5.427-20.6 7.047-32.49 8.761c-6.369.918-12.955 1.869-19.389 3.455c-17.012 4.195-33.49 12.38-49.424 20.295c-31.89 15.84-59.43 29.518-85.398 11.52c-19.022-13.183-18.144-37.575-15.928-50.941c2.054-12.384 7.607-23.789 12.976-34.818a796.621 796.621 0 0 0 2.722-5.634a32.453 32.453 0 0 0 8.443 2.118c-5.466 18.039 3.13 37.653 21.171 46.921l2.47 1.269l2.614-.931c14.263-5.08 27.406-13.23 39.063-24.229c7.535-7.109 14.014-14.974 19.339-23.378a32.8 32.8 0 0 0 4.891.367c16.559 0 30.271-12.379 32.393-28.367c6.778-.248 13.977-.25 20.794-.002c2.12 15.99 15.834 28.37 32.393 28.37c6.924 0 13.346-2.17 18.637-5.856c3.673 7.519 5.044 15.979 3.581 24.406ZM41.8 119.295c10.948 0 19.854 8.907 19.854 19.855a19.73 19.73 0 0 1-3.135 10.687c-3.3 5.147-8.91 8.675-15.355 9.115c-.451.03-.906.052-1.364.052c-2.44 0-4.777-.445-6.938-1.253a19.967 19.967 0 0 1-10.305-8.777a19.725 19.725 0 0 1-2.612-9.824c0-10.948 8.907-19.855 19.855-19.855Zm66.049 19.666c0-9.947 7.353-18.206 16.907-19.634c.962-.145 1.946-.22 2.947-.22c6.365 0 12.032 3.015 15.666 7.687a19.88 19.88 0 0 1 2.318 3.765a19.73 19.73 0 0 1 1.87 8.402c0 1.587-.192 3.13-.545 4.61c-1.935 8.1-8.842 14.292-17.306 15.144c-.658.066-1.326.1-2.003.1a19.734 19.734 0 0 1-10.76-3.181c-5.466-3.541-9.094-9.69-9.094-16.673Zm82.865-23.61a32.721 32.721 0 0 0-8.991 15.117a304.792 304.792 0 0 0-22.458 0c-1.68-6.232-5.162-11.73-9.847-15.906l20.545-41.542l20.751 42.332ZM102.216 12.834h135.437l-31.989 94.345a32.479 32.479 0 0 0-4.051 1.255l-31.6-64.463l-31.69 64.078a32.502 32.502 0 0 0-4.226-1.139l-31.881-94.076Zm130.92 126.128c0 1.99-.297 3.912-.844 5.727a19.933 19.933 0 0 1-7.653 10.545a19.74 19.74 0 0 1-11.357 3.582c-9.167 0-16.9-6.247-19.174-14.707a19.803 19.803 0 0 1-.68-5.147c0-2.714.548-5.302 1.538-7.66a19.848 19.848 0 0 1 1.878-3.442c3.573-5.274 9.602-8.752 16.438-8.752c.627 0 1.245.032 1.858.09c10.08.939 17.997 9.442 17.997 19.764Zm12.833 0c0-15.958-11.498-29.273-26.642-32.117L255.553 0H84.318L120.6 107.061c-14.618 3.253-25.583 16.316-25.583 31.9c0 11.702 6.184 21.98 15.452 27.756c-4.458 6.642-9.744 12.892-15.802 18.608c-9.608 9.063-20.311 15.937-31.85 20.46c-11.623-7.301-16.536-21.07-11.434-33.064l.4-.94l.75-1.764c12.766-4.453 21.953-16.603 21.953-30.867c0-18.024-14.663-32.687-32.686-32.687c-18.024 0-32.687 14.663-32.687 32.687c0 9.097 3.74 17.335 9.758 23.267a552.73 552.73 0 0 1-3.418 7.11c-5.503 11.301-11.739 24.11-14.098 38.335c-4.684 28.25 2.872 50.833 21.277 63.588c11.168 7.74 22.51 10.784 33.923 10.784c21.49 0 43.23-10.797 64.493-21.359c15.313-7.605 31.148-15.47 46.789-19.328c5.82-1.435 11.808-2.299 18.148-3.213c12.573-1.814 25.573-3.689 37.089-10.358c13.349-7.732 22.486-20.702 25.07-35.582c2.218-12.775-.451-25.57-6.961-36.422a32.488 32.488 0 0 0 4.787-17.011Z"
      />
    </svg>
  );
}

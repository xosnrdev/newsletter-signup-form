"use client";

import EmailForm from "@/components/EmailForm_comp";
import FeedBack from "@/components/FeedBack_comp";
import Image from "next/image";
import { useState } from "react";

const data = [
  "Product discovery and building what matters",

  "Measuring to ensure updates are a success",

  "And much more",
];

export default function Home() {
  const [mount, setMount] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [loading, isLoading] = useState("");
  const [email, setEmail] = useState("");

  const handleFeedback = () => {
    setMount(false);
    isLoading(true);
    setTimeout(() => {
      isLoading(false);
      setFeedback(true);
    }, 2000);
  };

  return (
    <main className="flex lg:min-h-screen flex-col items-center justify-center lg:bg-gray-700 antialiased scroll-smooth">
      <div
        className={`bg-white lg:flex-row flex flex-col lg:p-6 lg:rounded-3xl lg:shadow-2xl lg:space-x-6 ${
          feedback && "pt-16 px-6 space-y-6 flex flex-col"
        }`}
      >
        {mount && (
          <>
            <div className="sm:hidden">
              <Image
                src={`/assets/images/illustration-sign-up-mobile.svg`}
                alt="banner image"
                height={400}
                width={500}
                className="object-cover pointer-events-none rounded-b-3xl shadow-xl"
                priority
              />
            </div>
            <div className="pt-16 px-6 lg:px-0 space-y-6 flex flex-col">
              <h1 className="font-bold text-4xl">Stay updated!</h1>
              <p className="max-w-sm font-light">
                Join 60,000+ product managers receiving monthly updates on:
              </p>

              <div>
                <ul className="relative space-y-2 flex flex-col">
                  {data.map((text, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                      >
                        <g fill="none">
                          <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                          <path
                            stroke="#FFF"
                            strokeWidth="2"
                            d="M6 11.381 8.735 14 15 8"
                          />
                        </g>
                      </svg>
                      <span className="font-light max-w-sm">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <EmailForm onEmailSent={handleFeedback} emailProp={setEmail} />
            </div>
            <div className="mx-auto transition duration-150 hover:scale-105 hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="400"
                height="593"
                viewBox="0 0 400 593"
              >
                <defs>
                  <linearGradient
                    id="b"
                    x1="72.75%"
                    x2="27.25%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF6A3A" />
                    <stop offset="100%" stopColor="#FF527B" />
                  </linearGradient>
                  <linearGradient
                    id="h"
                    x1="22.319%"
                    x2="99.127%"
                    y1="28.497%"
                    y2="70.858%"
                  >
                    <stop offset="0%" stopColor="#FF3E83" />
                    <stop offset="100%" stopColor="#FF9F2E" />
                  </linearGradient>
                  <linearGradient id="k" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFB443" />
                    <stop offset="100%" stopColor="#FF5B64" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="o" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#F8F8F8" />
                    <stop offset="100%" stopColor="#EEE" />
                  </linearGradient>
                  <linearGradient id="p" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#CACBE8" />
                    <stop offset="100%" stopColor="#EEE" />
                    <stop offset="100%" stopColor="#CACBE8" />
                  </linearGradient>
                  <linearGradient
                    id="r"
                    x1="97.791%"
                    x2="7.729%"
                    y1="26.944%"
                    y2="71.879%"
                  >
                    <stop offset="0%" stopColor="#FF9049" />
                    <stop offset="100%" stopColor="#FF5E5E" />
                  </linearGradient>
                  <linearGradient id="t" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A3D" />
                    <stop offset="100%" stopColor="#FF5B66" />
                  </linearGradient>
                  <path
                    id="e"
                    d="M0 26C0 11.64 11.64 0 26 0h381c14.36 0 26 11.64 26 26v237c0 14.36-11.64 26-26 26H26c-14.36 0-26-11.64-26-26V26Z"
                  />
                  <path
                    id="g"
                    d="M0 11C0 4.925 4.925 0 11 0h379c6.075 0 11 4.925 11 11v237c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z"
                  />
                  <path
                    id="i"
                    d="M0 11C0 4.925 4.925 0 11 0h379c6.075 0 11 4.925 11 11v237c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z"
                  />
                  <path
                    id="n"
                    d="M0 11C0 4.925 4.925 0 11 0h411c6.075 0 11 4.925 11 11v229c0 6.075-4.925 11-11 11H11c-6.075 0-11-4.925-11-11V11Z"
                  />
                  <path
                    id="q"
                    d="M0 4a4 4 0 0 1 4-4h90a4 4 0 0 1 4 4v122a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                  />
                  <filter
                    id="d"
                    width="127.7%"
                    height="141.5%"
                    x="-13.9%"
                    y="-12.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    />
                  </filter>
                  <filter
                    id="f"
                    width="129.9%"
                    height="146.3%"
                    x="-15%"
                    y="-13.9%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    />
                  </filter>
                  <filter
                    id="j"
                    width="129.9%"
                    height="146.3%"
                    x="-15%"
                    y="-13.9%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    />
                  </filter>
                  <filter
                    id="m"
                    width="127.7%"
                    height="147.8%"
                    x="-13.9%"
                    y="-14.3%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    />
                  </filter>
                  <rect id="a" width="400" height="593" x="0" y="0" rx="16" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="c" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <rect width="400" height="593" rx="16" />
                  <path
                    fill="url(#b)"
                    fillRule="nonzero"
                    d="M0 0h400v593H0z"
                    mask="url(#c)"
                  />
                  <g mask="url(#c)">
                    <g fillRule="nonzero" transform="translate(-192 211)">
                      <use xlinkHref="#e" fill="#000" filter="url(#d)" />
                      <use xlinkHref="#e" fill="#242742" />
                    </g>
                    <g transform="translate(-176 226)">
                      <g fillRule="nonzero">
                        <use xlinkHref="#g" fill="#000" filter="url(#f)" />
                        <use xlinkHref="#g" fill="url(#h)" />
                      </g>
                      <mask id="l" fill="#fff">
                        <use xlinkHref="#i" />
                      </mask>
                      <g fillRule="nonzero">
                        <use xlinkHref="#i" fill="#000" filter="url(#j)" />
                        <use xlinkHref="#i" fill="url(#h)" />
                      </g>
                      <circle
                        cx="390"
                        cy="244"
                        r="158"
                        fill="url(#k)"
                        fillRule="nonzero"
                        mask="url(#l)"
                      />
                      <circle
                        cx="136.446"
                        cy="-34.554"
                        r="158"
                        fill="url(#k)"
                        fillRule="nonzero"
                        mask="url(#l)"
                        transform="rotate(-135 136.446 -34.554)"
                      />
                    </g>
                    <g fillRule="nonzero" transform="translate(129 115)">
                      <use xlinkHref="#n" fill="#000" filter="url(#m)" />
                      <use xlinkHref="#n" fill="url(#o)" />
                      <path
                        fill="url(#p)"
                        d="M0 11C0 4.925 4.925 0 11 0h85v251H11c-6.075 0-11-4.925-11-11V11Z"
                      />
                      <path
                        fill="#BABBDB"
                        d="M14 50.5a3.5 3.5 0 0 1 3.5-3.5h61a3.5 3.5 0 0 1 0 7h-61a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h54a3.5 3.5 0 0 1 0 7h-54a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h61a3.5 3.5 0 0 1 0 7h-61a3.5 3.5 0 0 1-3.5-3.5Zm0 20a3.5 3.5 0 0 1 3.5-3.5h39a3.5 3.5 0 1 1 0 7h-39a3.5 3.5 0 0 1-3.5-3.5Z"
                      />
                      <path
                        fill="#242742"
                        d="M0 11C0 4.925 4.925 0 11 0h411c6.075 0 11 4.925 11 11v20H0V11Z"
                      />
                      <g transform="translate(16 9)">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="#FF6464" />
                        <circle cx="28.5" cy="6.5" r="6.5" fill="#FF9255" />
                        <circle cx="50.5" cy="6.5" r="6.5" fill="#6BD4A8" />
                      </g>
                    </g>
                    <g transform="translate(246 93)">
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M0 4a4 4 0 0 1 4-4h90a4 4 0 0 1 4 4v122a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                      />
                      <mask id="s" fill="#fff">
                        <use xlinkHref="#q" />
                      </mask>
                      <use xlinkHref="#q" fill="#FFF" fillRule="nonzero" />
                      <path
                        fill="url(#r)"
                        fillRule="nonzero"
                        d="M108.12 28.878a3 3 0 0 1 .002 4.243L82.847 58.41c-4.348 4.351-11.4 4.351-15.749 0a5.132 5.132 0 0 0-7.26 0L42.406 75.853a8.668 8.668 0 0 1-12.262 0 2.668 2.668 0 0 0-3.774 0l-32.248 32.268a3 3 0 1 1-4.244-4.242l32.248-32.267a8.668 8.668 0 0 1 12.262 0 2.668 2.668 0 0 0 3.774 0L55.594 54.17c4.348-4.35 11.4-4.35 15.748 0a5.132 5.132 0 0 0 7.26 0l25.276-25.29a3 3 0 0 1 4.243-.002Z"
                        mask="url(#s)"
                      />
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M49 150a4 4 0 0 1 4-4h120a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H53a4 4 0 0 1-4-4V150Z"
                      />
                      <path
                        fill="url(#t)"
                        d="M46.5 79C64.45 79 79 64.45 79 46.5S64.45 14 46.5 14 14 28.55 14 46.5 28.55 79 46.5 79Zm0 14C72.181 93 93 72.181 93 46.5S72.181 0 46.5 0 0 20.819 0 46.5 20.819 93 46.5 93Z"
                        transform="translate(67 175)"
                      />
                      <path
                        fill="#242742"
                        fillRule="nonzero"
                        d="M96.61 216.72c0 2.27.589 4.067 1.766 5.39 1.177 1.313 2.78 1.969 4.812 1.969 1.886 0 3.36-.672 4.422-2.016 1.073-1.344 1.61-3.02 1.61-5.031h-1.172c0 1.146-.318 2.057-.954 2.734-.635.677-1.427 1.016-2.375 1.016-1.01 0-1.76-.339-2.25-1.016-.49-.687-.734-1.692-.734-3.015 0-1.51.245-2.594.734-3.25.5-.667 1.24-1 2.22-1 1.051 0 1.869.432 2.452 1.297.584.864.875 2.411.875 4.64l.14.625c0 3.302-.723 5.646-2.171 7.031-1.448 1.386-3.495 2.073-6.14 2.063h-.704v3.969h.813c4.25-.042 7.495-1.193 9.734-3.453 2.25-2.271 3.375-5.329 3.375-9.172v-.813c0-3.458-.776-5.958-2.328-7.5-1.552-1.552-3.557-2.328-6.016-2.328-2.468 0-4.437.714-5.906 2.14-1.469 1.428-2.203 3.334-2.203 5.72ZM123.923 232h4.828v-22.75h-4.516l-10.11 14.563v3.438h17.141v-3.891h-4.937l-.813.078h-6.5l4.828-7.562h.157v9.593l-.079.547v5.985Z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </>
        )}
        {feedback && <FeedBack email={email} />}
        {loading && (
          <p className="text-center text-2xl font-semibold">Loading...</p>
        )}
      </div>
    </main>
  );
}

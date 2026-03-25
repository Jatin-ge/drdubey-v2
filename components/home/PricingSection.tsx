"use client";

import Link from "next/link";

const packages = [
  {
    name: "Basic Package",
    price: "1.2 Lakhs",
    features: [
      "Standard implant",
      "3-4 days hospital stay",
      "Physiotherapy included",
      "Insurance accepted",
    ],
    highlight: false,
  },
  {
    name: "Advanced Package",
    price: "1.8 Lakhs",
    features: [
      "Premium implant brands",
      "Computer navigation guided",
      "Fast-track recovery",
      "TPA/cashless facility",
    ],
    highlight: true,
  },
  {
    name: "International Standard",
    price: "2.5 Lakhs",
    features: [
      "Latest generation implants",
      "Minimally invasive technique",
      "Dedicated care coordinator",
      "International quality standards",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Transparent <span className="text-emerald-600">Pricing</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
          We believe in clear, honest pricing for all our patients
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 flex flex-col ${
                pkg.highlight
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-lg ring-1 ring-emerald-500"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              }`}
            >
              {pkg.highlight && (
                <span className="self-start text-xs font-semibold text-white bg-emerald-600 px-3 py-1 rounded-full mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Starting from
              </p>
              <p className="text-3xl font-bold text-emerald-600 mb-6">
                &#x20B9;{pkg.price}
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                {pkg.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * Prices vary based on implant choice, hospital charges and insurance
          coverage. Contact us for exact quote.
        </p>
        <div className="text-center mt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            Get Free Consultation
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

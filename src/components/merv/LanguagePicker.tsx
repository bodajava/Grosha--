"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, Search } from "lucide-react";

export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇪🇬" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  { code: "he", name: "עברית", flag: "🇮🇱" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰" },
];

export const LanguagePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Helper to set Google Translate cookie
  const setTranslateCookie = (langCode: string) => {
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname};`;
  };

  // Helper to get cookies
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  };

  // Detect location and browser language
  useEffect(() => {
    const cookieVal = getCookie("googtrans");
    let initialLang = "en";
    
    if (cookieVal) {
      const parts = cookieVal.split("/");
      if (parts.length >= 3) {
        initialLang = parts[2];
      }
    }
    setCurrentLang(initialLang);

    // If no preference cookie is set yet, auto-detect
    if (!cookieVal) {
      // 1. First check browser preferred language
      const browserLang = navigator.language.split("-")[0];
      const isSupported = LANGUAGES.some((l) => l.code === browserLang);
      
      if (isSupported && browserLang !== "en") {
        setTranslateCookie(browserLang);
        setCurrentLang(browserLang);
        window.location.reload();
        return;
      }

      // 2. Double check geolocation (for case: living in France but browser is English)
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          if (data && data.country_code) {
            const countryLangMap: { [key: string]: string } = {
              FR: "fr",
              DE: "de",
              ES: "es",
              IT: "it",
              RU: "ru",
              CN: "zh-CN",
              JP: "ja",
              TR: "tr",
              NL: "nl",
              PT: "pt",
              KR: "ko",
              IN: "hi",
              GR: "el",
              RO: "ro",
              UA: "uk",
              ID: "id",
              IR: "fa",
              PK: "ur",
              BD: "bn",
              IL: "he",
              DA: "da",
              FI: "fi",
              NO: "no",
              HU: "hu",
              CZ: "cs",
              SK: "sk",
              // Arab countries
              EG: "ar", SA: "ar", AE: "ar", QA: "ar", KW: "ar", OM: "ar", BH: "ar", 
              JO: "ar", LB: "ar", SY: "ar", IQ: "ar", YE: "ar", LY: "ar", DZ: "ar", 
              MA: "ar", TN: "ar", SD: "ar",
            };
            
            const detectedLang = countryLangMap[data.country_code];
            if (detectedLang && detectedLang !== "en") {
              setTranslateCookie(detectedLang);
              setCurrentLang(detectedLang);
              window.location.reload();
            }
          }
        })
        .catch((err) => console.log("GeoIP auto-translation error:", err));
    }
  }, []);

  // Initialize Google Translate Element
  useEffect(() => {
    // Add Google Translate custom styles to hide original bar
    const styleId = "google-translate-custom-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        .goog-te-banner-frame.skiptranslate,
        .goog-te-banner-frame,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        #google_translate_element {
          display: none !important;
        }
        .goog-te-combo {
          display: none !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(21, 20, 15, 0.15);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--coral);
        }
      `;
      document.head.appendChild(style);
    }

    // Load Google Translate script
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: "en", layout: 0 },
          "google_translate_element"
        );
      };
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const translatePage = (langCode: string) => {
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectEl) {
      setTranslateCookie(langCode);
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
      setCurrentLang(langCode);
      setIsOpen(false);
    } else {
      // Fallback: set cookie and reload
      setTranslateCookie(langCode);
      setCurrentLang(langCode);
      setIsOpen(false);
      window.location.reload();
    }
  };

  const filteredLanguages = LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden google translate container */}
      <div id="google_translate_element" className="hidden" />

      {/* Selector Button - Just a clean Globe Icon (Planet shape) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:border-primary hover:text-primary transition-all cursor-pointer shadow-sm"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 shadow-xl z-[99999] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Search Input */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900/50">
            <Search className="w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search language..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-0 placeholder-neutral-400"
              style={{ fontFamily: "var(--sans)" }}
            />
          </div>

          {/* Languages List */}
          <div 
            className="overflow-y-auto py-1 custom-scrollbar"
            style={{ maxHeight: "200px" }}
          >
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => translatePage(lang.code)}
                  className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer ${
                    currentLang === lang.code
                      ? "text-primary font-black bg-primary/5"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                  style={{ fontFamily: "var(--sans)" }}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span className="flex-1">{lang.name}</span>
                  {currentLang === lang.code && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-xs text-neutral-400 text-center">
                No languages found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

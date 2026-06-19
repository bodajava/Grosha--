"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Search } from "lucide-react";

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

  // Initialize Google Translate
  useEffect(() => {
    // Add Google Translate styles to hide bar
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
      `;
      document.head.appendChild(style);
    }

    // Add Google Translate Script
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
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
      setCurrentLang(langCode);
      setIsOpen(false);
    }
  };

  const selectedLang = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  const filteredLanguages = LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden google translate container */}
      <div id="google_translate_element" className="hidden" />

      {/* Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 hover:text-primary transition-all cursor-pointer"
        style={{ fontFamily: "var(--sans)" }}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{selectedLang.flag} {selectedLang.name}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
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
          <div className="max-height-[240px] overflow-y-auto py-1 max-h-60 custom-scrollbar">
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

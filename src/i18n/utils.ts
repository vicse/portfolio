import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export const defaultLang = 'es';

export const ui = {
  es,
  en,
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t<T extends keyof typeof es>(key: T): typeof es[T] {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

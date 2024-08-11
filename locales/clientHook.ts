import { useI18n } from "./client";

export default function useTranslationsClient(scope?: string) {
  const t = useI18n() as (key: string, ...args: any[]) => any;

  if (scope) {
    return (key: string, ...args: any[]) => t(`${scope}.${key}`, ...args);
  } else {
    return t;
  }
}

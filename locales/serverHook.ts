import { getI18n } from "./server";

export default async function useTranslationsServer(scope?: string) {
  const t = (await getI18n()) as (key: string, ...args: any[]) => any;

  if (scope) {
    return (key: string, ...args: any[]) => t(`${scope}.${key}`, ...args);
  } else {
    return t;
  }
}

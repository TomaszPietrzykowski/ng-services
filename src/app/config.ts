// inject anything else than a ts class, eg. konfiguration object

import { InjectionToken } from "@angular/core";

export interface AppConfig {
  apiUrl: string;
  courseCasheSize: number;
}

export const APP_CONFIG: AppConfig = {
  apiUrl: "http://localhost:9000",
  courseCasheSize: 10,
};

// define Injection Token:
export const CONFIG_TOKEN = new InjectionToken<AppConfig>("CONFIG_TOKEN");

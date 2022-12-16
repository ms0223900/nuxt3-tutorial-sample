import { GlobalConfig } from "~~/store";

const makeInitConfig = (): GlobalConfig => ({
  username: "Dan",
  notificationList: [""],
  lang: "en",
});

const makeRandomFail =
  (failedChance = 0.2) =>
  (res: any) =>
    Math.random() >= failedChance ? res : null;

export default defineEventHandler(() => makeRandomFail(0.9)(makeInitConfig()));

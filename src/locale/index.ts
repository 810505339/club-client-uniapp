import { createI18n } from "vue-i18n"; // v9.x

import en from "./lang/en";
import cn from "./lang/zh-cn";

const i18n = createI18n({
  locale: "en",
  allowComposition: true,
  messages: {
    en,
    cn,
  },
});

export default i18n;

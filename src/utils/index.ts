import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

// 使用中文语言包
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

export const getTimeAgo = (pastTimestamp: number): string => {
  return pastTimestamp ? dayjs.unix(pastTimestamp).fromNow() : "";
};

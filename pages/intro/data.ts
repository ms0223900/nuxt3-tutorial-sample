export interface SingleIntroData {
  title: string;
  contentList: string[];
}

const data: Record<string, SingleIntroData[]> = {
  routing: [
    {
      title: "一般頁面",
      contentList: [
        "取好名字，直接放在/pages資料夾底下",
        "會自動配對路徑和該檔案頁面。",
      ],
    },
    {
      title: "動態id",
      contentList: [
        "用中括號包起你要解析的id，像是[id].vue。",
        "通常會放在資料夾底下，\n像是/pages/posts/[id].vue這樣",
      ],
    },
    {
      title: "全匹配",
      contentList: [
        "類似動態id，算是延伸寫法應用。",
        "以…展開「所有可能的路徑」。",
      ],
    },
    {
      title: "嵌套頁面",
      contentList: [
        "以<NuxtPage />渲染子層的頁面。",
        "嵌套父層的頁面.vue檔案，\n需要和放置子層頁面的資料夾名稱一樣。",
      ],
    },
    {
      title: "404畫面",
      contentList: [
        "建立一個404.vue檔案，放在/pages資料夾底下即可",
        "只要匹配不到已知條件的頁面，\n都會被導向至這個頁面。",
      ],
    },
  ],
};

export default data;

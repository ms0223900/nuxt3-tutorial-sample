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
  dataFetching: [
    {
      title: "前情提要",
      contentList: [
        "useFetch 用在「直接呼叫網址」",
        "useAsyncData 用在比較複雜的異步處理",
        "帶有lazy標示的（或lazy為true），可以透過其中的pending做到loading效果",
        "不想要SSR渲染怎麼做？ 用<ClientOnly>包起來",
      ],
    },
    {
      title: "資料流步驟解釋",
      contentList: [
        "CSR(Client Side Render)\n組件渲染（生成html） → 開始取得資料 → 資料取得完成 → 組件更新 → 最終畫面呈現",
        "SSR(Server Side Render)\n開始取得資料 → 資料取得完成 → 組件渲染（生成html）→ 最終畫面呈現",
      ],
    },
    {
      title: "基本使用 — useFetch",
      contentList: [
        "透過單純的API url取得資料",
        "在組件生成的一開始就執行fetch",
        "常用的options，幾乎與原生fetch的選項一樣",
      ],
    },
    {
      title: "靈活使用 — useAsyncData",
      contentList: [
        "Nuxt3中「最常用」的取得資料方式",
        "在useAsyncData中，可以取得nuxtApp的context",
      ],
    },
    {
      title: "nuxt適用 — $fetch",
      contentList: [
        "在呼叫$fetch時，會「暫停」現有的組件渲染，做到Server Side Render",
        "在客戶端之中，則使用原生的fetch就行",
      ],
    },
    {
      title: "技術總結",
      contentList: [
        "useFetch：透過單純的API url取得資料",
        "useAsyncData：最常用的SSR composable",
        "$fetch：會「暫停」渲染的fetch",
        "ClientOnly：包起來的組件變成CSR",
      ],
    },
  ],
};

export default data;

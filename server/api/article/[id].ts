interface SingleArticle {
  id: string;
  title: string;
  brief: string;
  content: string;
  sns_cover_img_src: string;
}

const contentList = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
];

const briefList = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Ipsum has been the industry standard dummy text ever since the 1500s",
  "it to make a type specimen book. It has survived not only five centuries",
];

const snsCoverImgSrcList = [
  "https://images.unsplash.com/photo-1669554108285-dc5c2786ed61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80&w=300",
  "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&w=300",
  "https://images.unsplash.com/photo-1669544695426-88d5bac4fc3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80&w=300",
];

const getItemByIdx = <Data>(dataList: Data[], i: number) =>
  dataList[i % dataList.length];

const createArticle = (i: number): SingleArticle => ({
  id: i.toString(),
  title: `Title-${i}`,
  brief: getItemByIdx(briefList, i),
  content: getItemByIdx(contentList, i),
  sns_cover_img_src: getItemByIdx(snsCoverImgSrcList, i),
});

export default defineEventHandler((e) => createArticle(e.context.params.id));

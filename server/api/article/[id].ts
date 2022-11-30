interface SingleArticle {
    id: string
    title: string
    brief: string
    content: string
    sns_cover_img_src: string
}

const briefList = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    'Ipsum has been the industry standard dummy text ever since the 1500s',
    'it to make a type specimen book. It has survived not only five centuries'
]

const snsCoverImgSrcList = [
    'https://images.unsplash.com/photo-1669554108285-dc5c2786ed61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80&w=300',
    'https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&w=300',
    'https://images.unsplash.com/photo-1669544695426-88d5bac4fc3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80&w=300',
]

const getItemByIdx = <Data>(dataList: Data[], i: number) => (
    dataList[i % (dataList.length)]
)

const createArticle = (i: number): SingleArticle => ({
    id: i.toString(),
    title: `Title-${i}`,
    brief: getItemByIdx(briefList, i),
    content: '',
    sns_cover_img_src: getItemByIdx(snsCoverImgSrcList, i),
})

export default defineEventHandler((e) => (
    createArticle(e.context.params.id)
))
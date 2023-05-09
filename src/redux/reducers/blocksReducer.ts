import {createSlice} from "@reduxjs/toolkit";

// в стандартной странице мы забираем количество блоков, айди и тип каждого
// что бы просто отобразить пустышки на странице, но каждый нужного типа, дальше прокидываем только айди
// а компонент внутри себя уже заберет нужные для себя данные по айди

//может быть передавать высоту блока в каких то пределах(но это уже птом может быть)
//тоже может быть написать несколько событий на выбор по нажатию кнопки(на форму, что то еще)

const initBlocksState:BlockType[] = [
        {blockID: '1', pageID:'2', blockType: 'standard',  blockTitle: 'standard block', blockText: ''},
        {blockID: '2', pageID:'3', blockType: 'with_img', blockIMG: '', blockTitle: '', blockText: 'block with image'},
        {blockID: '3',  pageID:'1', blockType: 'with_btn', blockTitle: '', blockText: 'block with button', blockBtnName: ''},
    ]


const slice = createSlice({
    name: 'blocks',
    // initialState:{} as BlocksStateType,
    initialState: initBlocksState,
    reducers: {}
})


export const blocksReducer = slice.reducer



export type BlockType = {
    blockID: string,
    pageID: string,
    blockType: BlocksTypeOptionsType,
    blockIMG?: string,
    blockTitle: string,
    blockText: string,
    blockBtnName?: string

}
export type BlocksTypeOptionsType = 'standard' | 'with_img' | 'with_btn' | 'with_img_btn'




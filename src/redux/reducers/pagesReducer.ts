import {createSlice} from "@reduxjs/toolkit";


//есть страницы с айди
//есьт блоки, каждый со своими данными, типом и айди


//блок [картинка заголовок текст, заголовок текст, заголовок текст кнопка, картинка заголовок текст кнопка]

//убрать pageURL написать функцию что бы из названия делать урл
const initPagesState = {
    pages: [
        {pageName:'page one', pageID:'1', pageURL:'page-one'},
        {pageName:'two', pageID:'2', pageURL:'page-two'},
        {pageName:'three', pageID:'3', pageURL:'page-three'},
    ]
}

const slice = createSlice({
    name: 'pages',
    initialState:initPagesState,
    reducers: {

    }
})


export const pagesReducer = slice.reducer
import React from 'react';
import {AboutMe} from '../AboutMe/AboutMe';
import {Main} from "../Main/Main";
import {Services} from '../Services/Services';
import {Showcase} from "../Showcase/Showcase";
import {Blog} from "../Blog/Blog";
import {Contacts} from "../Contacts/Contacts";
import {Nav} from "../Nav/Nav";
import {Route, Routes} from "react-router-dom";
import { Settings } from '../Settings/Settings';
import {StandardPage} from "../../common/componentsCommon/StandardPage/StandardPage";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";

function App() {


    const standardPages = useSelector((state:RootStateType) => state.pages.pages)


    const mappedStandardPages = standardPages.map(p=> {
        return <Route
            key={p.pageID}
            path={`/${p.pageURL}`}
            element={<StandardPage pageID={p.pageID} pageName={p.pageName}/>}/>
    })



    return (
        <div>
            <Nav/>

            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/about-me'} element={<AboutMe/>}/>
                <Route path={'/services'} element={<Services/>}/>
                <Route path={'/showcase'} element={<Showcase/>}/>
                <Route path={'/blog'} element={<Blog/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>
                <Route path={'/settings'} element={<Settings/>}/>

                {mappedStandardPages}

            </Routes>

        </div>
    );
}

export default App;


//Main/Главная страница
// Краткое описание услуг, которые вы предоставляете (настройка рекламы в Google, аналитика и настройка электронной торговли для интернет-магазинов).
// Ключевые преимущества вашей компании (например, опыт работы, высокие показатели ROI, индивидуальный подход к каждому клиенту).
// Кнопка вызова к действию, например, "Заказать услугу".

//About me/Обо мне
// История вашей компании и ваш опыт в контекстной рекламе.
// Описание вашей команды и ключевых сотрудников.
// Сертификаты и награды.

// Services(What I do)/Услуги
// Подробное описание каждой услуги (настройка рекламы в Google, аналитика и настройка электронной торговли для интернет-магазинов).
// Примеры успешно завершенных проектов.
// Кнопка вызова к действию, например, "Заказать услугу".

//  Showcase/Портфолио
//  Обзор успешных проектов.
// Описание результата работы (увеличение продаж, улучшение показателей конверсии, сокращение затрат на рекламу и т.д.).
// Кнопка вызова к действию, например, "Связаться с нами".


//Blog
//Статьи и новости, связанные с контекстной рекламой и электронной коммерцией.
// Полезные советы и инсайты для улучшения результатов рекламных кампаний.
// Кнопка вызова к действию, например, "Подписаться на наш блог".

//Contacts:
// Адрес вашего офиса, телефон и email.
// Форма обратной связи для быстрого контакта с вами.
// Кнопка вызова к действию, например, "Связаться с нами".


//Nav
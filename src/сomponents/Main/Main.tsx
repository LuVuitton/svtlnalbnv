import s from './Main.module.scss'
import sContainer from './../../common/styles/generalContainer.module.scss'


export const Main = () => {
    return (
        <div className={s.mainWrapper} >
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <h1>Main</h1>
            <p>
                // Краткое описание услуг, которые вы предоставляете (настройка рекламы в Google, аналитика и настройка
                электронной торговли для интернет-магазинов).
                // Ключевые преимущества вашей компании (например, опыт работы, высокие показатели ROI, индивидуальный
                подход к каждому клиенту).
                // Кнопка вызова к действию, например, "Заказать услугу".
            </p>
            </div>

        </div>
    )
}
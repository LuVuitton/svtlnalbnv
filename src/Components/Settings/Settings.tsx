import s from './Showcase.module.scss'
import sContainer from './../../common/styles/generalContainer.module.scss'



export const Showcase = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

            <h3>Showcase</h3>
            <p>
                /Портфолио
                //  Обзор успешных проектов.
                // Описание результата работы (увеличение продаж, улучшение показателей конверсии, сокращение затрат на рекламу и т.д.).
                // Кнопка вызова к действию, например, "Связаться с нами".

            </p>

            </div>
        </div>
    )}
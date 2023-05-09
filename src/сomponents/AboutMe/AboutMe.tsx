import s from './AboutMe.module.scss'
import sContainer from './../../common/styles/generalContainer.module.scss'



export const AboutMe = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

            <h3>AboutMe</h3>
            <p>
                Обо мне
                // История вашей компании и ваш опыт в контекстной рекламе.
                // Описание вашей команды и ключевых сотрудников.
                // Сертификаты и награды.
            </p>

            </div>
        </div>
    )
}
import s from './Settings.module.scss'
import sContainer from './../../common/styles/generalContainer.module.scss'


export const Settings = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <h3>Settings</h3>
                <p>
                    тут настройки и все такое, кнопка в меню отображается только на время разработки, ссылка тоже будет
                    другая
                </p>
            </div>

        </div>
    )
}
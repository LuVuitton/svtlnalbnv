import s from './ImageBlock.module.scss'
import sContainer from './../../../common/styles/generalContainer.module.scss'

//в страницу приходит id и по id мы забираем данные из стора


export const ImageBlock = ({pageID}:ImageBlockPropsType) => {




    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <div className={s.image}><img src="#" alt="img"/></div>
                <div className={s.description}>
                    <div className={s.title}><h2>TITLE</h2></div>
                    <div className={s.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                            aliquid asperiores at autem enim, explicabo facilis </p>
                    </div>
                </div>
            </div>

        </div>
    )
}


export type ImageBlockPropsType = {
    pageID: string
}






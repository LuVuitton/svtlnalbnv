import s from './StandardPage.module.scss'
import sContainer from '../../styles/generalContainer.module.scss'

//ми принимаем количество блоков и их тип(картнка-кнопка и т.п.)

//конст списокКомпонент = данныеИзПропсов = ()=>  {
//  если тип станицы КартинкаОписание, верни компонент КартинкаОписание и передай ему АЙДИ
// }

// А уже данные забираем конкретно в компоненте по ай ди

export const StandardPage = (props: StandardPagePropsType) => {

    // отмена, ТУТ заберем ВСЕ блоки по отдельной странице сюда перекинем ID
    //как асс массив = {
    // айди блока и страницы: {его инфа} //в каждый блок надо добавить айдиСтраницы
    // }

    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                {props.pageName}

            </div>
        </div>
    )
}




export type StandardPagePropsType = {
    pageName: string
    pageID: string
}
import { Radio, RadioChangeEvent } from 'antd';
import { AlignCenterOutlined, PicLeftOutlined, PicRightOutlined, PicCenterOutlined } from '@ant-design/icons';

export const ChooseType: React.FC<ChooseTypePropsType> = ({ getValue }) => {

    const onChangeHandler = (selectValue: RadioChangeEvent) => {
        getValue(selectValue.target.value);
    }

    return (
        <>
            <Radio.Group
                defaultValue="ImgCenter"
                size="large"
                onChange={onChangeHandler}
            >
                <Radio.Button value="ImgCenter" > <PicCenterOutlined /> img center</Radio.Button>

                <Radio.Button value="ImgLeft"> <PicLeftOutlined /> img left</Radio.Button>
   
                <Radio.Button value="ImgRight"> <PicRightOutlined /> img right </Radio.Button>

                <Radio.Button value="textBlock"> <AlignCenterOutlined /> just text</Radio.Button>
            </Radio.Group>




        </>
    )
}

type ChooseTypePropsType = {
    getValue: (selectValue: string) => void
}
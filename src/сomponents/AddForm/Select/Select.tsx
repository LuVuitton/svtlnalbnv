import { Select as SelectAnt, Space } from 'antd';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../redux/store';



export const Select: React.FC<SelectPropsType> = ({ getValue }) => {

  const pages = useSelector((state: RootStateType) => state.pages)

  const optionPages = pages.pages.map(e => ({ value: e.pageName, label: e.pageName }))
  optionPages.unshift({ value: 'New Page', label: 'New Page' })

  const handleChange = (value: string) => {
    getValue(value)
  };


  return (


    <Space wrap>
      <SelectAnt
        defaultValue={'Choose or create new'}
        style={{ width: 220 }}
        onChange={handleChange}
        disabled={false}
        loading={false}
        options={optionPages}
      />
    </Space>
  )
};


type SelectPropsType = {
  getValue: (selectValue: string) => void
}


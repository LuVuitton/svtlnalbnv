
import { useState } from "react";
import { ChooseType } from "./ChooseType/ChooseType";
import { Select } from "./Select/Select"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string,
    text: string,
    page: string,
    type: string
};

export const AddForm: React.FC = () => {

    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();

    const [wihtoutImage, setWithoutImage] = useState(false)


    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("page")) // watch input value by passing the name of it


    const selectHandler = (selectValue: string) => {
        setValue('page', selectValue)
    }
    const typeHandler = (selectValue:string)=> {
        if (selectValue === 'textBlock') {
            setWithoutImage(true)
        } else {
            setWithoutImage(false)
        }
        setValue('type', selectValue)
    }
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    return (
        <>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Select getValue={selectHandler} />
                </div>
                <div>
                    <ChooseType getValue={typeHandler}/>
                </div>
                {/* register your input into the hook by invoking the "register" function */}
              Title:  <input defaultValue="test" {...register("title")} />

                {/* include validation with required or other standard HTML validation rules */}
               Text: <textarea {...register("text", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.text && <span>This field is required</span>}

             {!wihtoutImage && <div>   Image:  <input defaultValue="test" {...register("text")} /></div>}
                <input type="submit" />
            </form>
        </>

    )
}
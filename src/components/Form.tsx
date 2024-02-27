import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type Inputs = {
    example: string;
    exampleRequired: string;
};

const schema = yup
    .object({
        example: yup.string().required(),
        exampleRequired: yup.string().required(),
    })
    .required();

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    useEffect(() => {
        setValue("example", "test");
        //eslint-disable-next-line
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("example")} />
                <div>{errors.example?.message && <span>This field is required</span>}</div>
            </div>

            <div>
                <input {...register("exampleRequired")} />
                <div>{errors.exampleRequired?.message && <span>This field is required</span>}</div>
            </div>

            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;

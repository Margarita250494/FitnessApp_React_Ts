import { inputStyles } from "@/shared/helpers"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { TagPDescription } from "../components/TagPDescription";


export const ContactUsForm = () => {

    const {
        register,
        trigger,
        formState: { errors },
      } = useForm();
    
    const onSubmit : SubmitHandler<FieldValues> = async (e) => {
        const isValid = await trigger();
            if (!isValid) {
                e.preventDefault();
            }
    };    


  return (
    <form 
        action="https://formsubmit.co/margo250494@gmail.com" 
        target="_blank" 
        onSubmit={onSubmit}
        method="POST"
        >
            {errors.name && (
                <TagPDescription className="pb-3 text-primary-500">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 50 char."}
                </TagPDescription>
            )}

            <input 
                type="text" 
                className={inputStyles} 
                placeholder="NAME"
                {...register("name", {required:true, maxLength:50})}
            />
            
            {errors.email && (
                <TagPDescription className="pb-3 text-primary-500">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </TagPDescription>
            )}
            <input 
                type="email" 
                className={inputStyles} 
                placeholder="EMAIL"
                {...register("email", {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} 
            />
            
            {errors.message && (
                <TagPDescription className="pb-3 text-primary-500">
                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </TagPDescription>
            )}
            <textarea 
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message",{maxLength: 2000})}
            />
            
            <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-gray-100">
                SUBMIT
            </button>
    </form>
  )
}


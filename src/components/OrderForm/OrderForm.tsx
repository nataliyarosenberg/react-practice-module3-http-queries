import css from "./OrderForm.module.css";

interface OrderFormProps {
    onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
    const handleSubmit = (formData: FormData) => {
        const username = formData.get("username") as string;
        onSubmit(username);
    };
    return (
        <form className={css.form } action={handleSubmit}>
            <input type="text" name="username" />
            <button className={css.button} type="submit">Submit</button>
        </form>
    );
}
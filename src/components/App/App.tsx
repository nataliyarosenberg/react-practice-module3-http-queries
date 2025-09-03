import css from './App.module.css';
import OrderForm from '../OrderForm/OrderForm';


export default function App() {

  // const handleSubmit = (formData: FormData) => {
  const handleOrder = (data: string) => {
    console.log("Order received from:", data);

    
//     const username = formData.get("username") as string;
//     console.log("Name:", username);
//     if (username !== "") {
//       alert("Submited");
//     } else {
//       alert("Please fill out the field");
// }
  };

 
  return (
    <>
      <h1>Place your order</h1>
      <OrderForm onSubmit={handleOrder}></OrderForm>
    </>
    // <form className={css.form } action={handleSubmit}>
    //   <input type="text" name="username" placeholder='Username'/>
    //   <button className={css.button } type="submit">Submit</button>
    // </form>
  );
}

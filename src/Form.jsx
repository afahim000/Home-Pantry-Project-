import {useState} from 'react'

export default function AddItem({handleSubmit}){
const [formData, setFormData] = useState(
    {
        name: "",
        quantity: 1,
        inStock: true,
        category: 'Canned',
    }
)
const [errorMessage, setErrorMessage] = useState("")

return(
    <>
    <div style = {{display: 'inline-block'}}>
        {errorMessage && (<h1>{errorMessage}</h1>)}
        <form onSubmit = {(e) => {e.preventDefault(); handleSubmit(formData, setErrorMessage)}}>
            <label htmlFor = 'name'>name</label>
            <input id = 'name' value = {formData.name} type  = 'text' onChange = {(e)=>{ setFormData({...formData, name: e.target.value})}}/>
            <select id = 'category' value = {formData.category} onChange = {(e)=>{setFormData({...formData, category: e.target.value})}}>
                <option value = 'Canned'>Canned</option>
                <option value = 'Dairy'>Dairy</option>
                <option value = 'Essentials'>Essentials</option>
                <option value = 'Oils'>Oils</option>
                <option value = 'Baking'>Baking</option>
                <option value = 'Spices'>Spices</option>
                <option value = 'Grains'>Grains</option>
            </select>
            <input type = 'number' value = {formData.quantity} onChange = {(e)=>{setFormData({...formData, quantity: Number(e.target.value)})}}/>
            <input id = 'instock' type = 'checkbox' checked = {formData.inStock} onChange = {(e)=>{setFormData({...formData, inStock: e.target.checked})}}/> 
            <button id = 'submit' type = 'submit'>Add Item</button>            
        </form>
    </div>
    </>
)
}
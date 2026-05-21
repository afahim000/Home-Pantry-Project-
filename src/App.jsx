import PantryForm from "./pantryForm";
import AddItem from "./Form"
import { useState } from "react";
const pantryItems = [
  { id: 1, name: "Rice", category: "Grains", quantity: 2, inStock: true },
  { id: 2, name: "Pasta", category: "Grains", quantity: 3, inStock: true },
  { id: 3, name: "Flour", category: "Grains", quantity: 1, inStock: false },

  { id: 4, name: "Milk", category: "Dairy", quantity: 1, inStock: false },
  { id: 5, name: "Yogurt", category: "Dairy", quantity: 2, inStock: true },
  { id: 6, name: "Cheese", category: "Dairy", quantity: 1, inStock: true },

  { id: 7, name: "Black Beans", category: "Canned", quantity: 4, inStock: true },
  { id: 8, name: "Chickpeas", category: "Canned", quantity: 2, inStock: true },
  { id: 9, name: "Tomato Sauce", category: "Canned", quantity: 1, inStock: false },

  { id: 10, name: "Cumin", category: "Spices", quantity: 1, inStock: true },
  { id: 11, name: "Paprika", category: "Spices", quantity: 1, inStock: true },
  { id: 12, name: "Turmeric", category: "Spices", quantity: 1, inStock: true },
  { id: 13, name: "Black Pepper", category: "Spices", quantity: 1, inStock: true },

  { id: 14, name: "Olive Oil", category: "Oils", quantity: 1, inStock: true },
  { id: 15, name: "Vegetable Oil", category: "Oils", quantity: 1, inStock: false },

  { id: 16, name: "Sugar", category: "Baking", quantity: 2, inStock: true },
  { id: 17, name: "Baking Powder", category: "Baking", quantity: 1, inStock: true },
  { id: 18, name: "Vanilla Extract", category: "Baking", quantity: 1, inStock: false },

  { id: 19, name: "Salt", category: "Essentials", quantity: 1, inStock: true },
  { id: 20, name: "Garlic Powder", category: "Essentials", quantity: 1, inStock: true }
];

export default function App()
{
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [pantry, setPantry] = useState(pantryItems)
  const [sort, setSort] = useState(true);
  let filteredPantry = pantry.filter((item)=>
  {
    return item.category.includes(category)
  })
  filteredPantry = filteredPantry.filter((item) => {return item.name.toLowerCase().includes(query.toLowerCase())})
  filteredPantry = filteredPantry.sort((a,b)=> sort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))

  function handleSubmit(formData, setErrorMessage)
  {
    if(!formData.quantity|| !formData.category || !formData.name.trim() )
    {
      setErrorMessage('one or more fields are missing')
    }
    else if( formData.quantity <= 0 ){
      setErrorMessage("Stock cannot be less than 0")
    }
    else{
      setErrorMessage('')
      setPantry(prev => [...prev, {...formData, id: prev.length+ 1}])
      return true;
    }
  }
  function setSortFunc()
  {
    setSort(!sort)
  }
  function changeCategory(cat)
  {
    setCategory(cat)
  }
  function search(search)
  {
      setQuery(search)
  }
  function increment(id)
  {
    let val = pantry.map((item)=>
    {
      if(item.id === id)
      {
        return {...item, quantity: item.quantity + 1}
      }
      else
      {
        return {...item}
      }
    })
    setPantry(val)
  }
  function toggleStock(id)
  {
    let val = pantry.map((item)=>{
      if(item.id === id)
      {
        return {...item, inStock: !item.inStock}
      }
      else{
        return {...item}
      }
    })
    setPantry(val);
  }
  function deleteItem(id)
  {
    setPantry(pantry.filter(item => item.id != id))
  }
  return(
    <>
      <PantryForm sort = {sort} setSortFunc = {setSortFunc} changeCategory = {changeCategory} list = {filteredPantry} deleteItem ={deleteItem} toggleStock ={toggleStock} increment = {increment} search ={search} value = {query}/>
      <AddItem handleSubmit = {handleSubmit}></AddItem>
    </>
  )
}
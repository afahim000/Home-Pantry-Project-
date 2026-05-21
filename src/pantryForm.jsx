export default function PantryForm({list, deleteItem, toggleStock, increment, search, value,changeCategory, sort, setSortFunc})
{
    
    return(
        <>
        <div style = {{display: 'inline-block', marginRight: '40px'}}>
        <Dropdown changeCategory = {changeCategory}/>
        <SearchBar search = {search} value = {value}/>
        <SortButton sort = {sort} setSortFunc ={setSortFunc}></SortButton>
        <PantryList list = {list} deleteItem = {deleteItem} toggleStock = {toggleStock} increment = {increment}/>
        </div>
        </>
    )
}

export function SortButton({sort,setSortFunc})
{
    return(
        <button onClick={setSortFunc}>{sort ? "Z-A": "A-Z"}</button>
    )
}
export function Dropdown({changeCategory})
{
    return(       
        <>
            <select onChange={e=> changeCategory(e.target.value)}>
                <option value = ''>ALL</option>
                <option value = 'Dairy'>Dairy</option>
                <option value = 'Canned'>Canned</option>
                <option value = 'Spices'>Spices</option>
                <option value = 'Oils'>Oils</option>
                <option value = 'Grains'>'Grains</option>
                <option value = 'Essentials'>Essentials</option>
                <option value = 'Baking'>Baking</option>
            </select>
        </>
    )
}
export function SearchBar({search, value})
{
    return(
        <>
            <input type = 'text' value = {value} onChange = {(e)=>{search(e.target.value)}} ></input>
        </>
    )
}
export function PantryList({ list, deleteItem, toggleStock, increment})
{
    const pantryList = list.map((item)=>{
        return ( <tr key = {item.id}>
                    <td>{item.name}</td>     
                    <td>{item.category}</td>     
                    <td>{item.quantity}</td>     
                    <td>{item.inStock ? 'yes' : 'no'}</td>
                    <td><button onClick ={()=> deleteItem(item.id)}>DELETE</button></td>
                    <td><input type = 'checkbox' value = 'instock' onChange = {()=>{toggleStock(item.id)}}></input></td>
                    <td><button onClick ={()=>increment(item.id)}>+</button></td>
                </tr>)
    })
    return(
        <>
        <table>
           
            <thead>
            <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Instock</th>
            </tr>
            </thead>
            <tbody>
            {pantryList}
            </tbody>
        </table>
        </>
    )
}
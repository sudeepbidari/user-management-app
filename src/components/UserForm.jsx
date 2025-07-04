import { useState, useEffect } from "react";

function UserForm({saveUser, editingUser, isEditing}) {
 const[formData, setFormData] = useState({name: '', age: '', country: ''});
 const[error, setError] = useState('');

 useEffect(() => {
    if(isEditing && editingUser) {
         setFormData(editingUser);
      }
 }, [isEditing, editingUser]);

 const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
 };
 
 const handleSubmit = (e) =>{
    e.preventDefault();

    if(!formData.name || !formData.age || !formData.country){
        setError("All fields are required.");
        return;
    }

    saveUser(formData);
    setFormData({name:'', age:'', country:''});
    setError('');
 };

 return(
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md max-w-md mx-auto">
        {error && <p className="text-red 500 mb-2">{error}</p>}
        <input type="text" name="name" placeholder="Name" className="block w-full mb-2 p-2 border rounded" value={formData.name} onChange={handleChange}/>
        <input type="number" name="age" placeholder="Age" className="block w-full mb-2 p-2 border rounded" value={formData.age} onChange={handleChange}/>
        <input type="text" name="country" placeholder="Country" className="block w-full mb-2 p-2 border rounded" value={formData.country} onChange={handleChange}/>
    <button onSubmit={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button>
    </form>
 );
}

export default UserForm;
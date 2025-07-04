import { useState } from "react";
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App(){
  const[users, setUsers] = useState([]);
  const[isEditing, setIsEditing] = useState(false);
  const[editingUser, setEditingUser] = useState(null);

// Function to handle saving a user
  const saveUser = (user)=> {
    if(isEditing){
      // Update existing user
      setUsers(users.map(u => u.id === user.id ? user : u));
      setIsEditing(false);
      setEditingUser(null);
    } else {
      // Add new user
      setUsers([...users, {...user, id: Date.now()}]);
    };
  };

// Function to handle editing a user
// This sets the form to editing mode and populates it with the user's data
  const editUser = (user)=> {
    setIsEditing(true);
    setEditingUser(user);
  };

  const deleteUser = (id)=> {setUsers(users.filter(user => user.id != id));};

  return(
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>
      <UserForm saveUser={saveUser} editingUser={editingUser} isEditing = {isEditing} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
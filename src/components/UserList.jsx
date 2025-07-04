function UserList({users,editUser, deleteUser}){
    return(
        <div className="mt-8 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">User List</h2>
            {users.length == 0 ? (
                <p className="text-gray-600">No users yet.</p>) : (
                <ul className="space-y-2">
                    {users.map((user) =>(
                        <li className="p-3" key={user.id}>
                            <div>
                                <p className="font-medium">Name: {user.name}</p>
                                <p className="text-sm text-gray-500">Age: {user.age}</p>
                                <p className="font-medium">Country: {user.country}</p>
                            </div>
                            <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2" onClick={() => editUser(user)}>Edit</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;
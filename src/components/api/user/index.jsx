import { useNavigate } from "react-router-dom";
import { useGetUsers, useDeleteUser } from "./query";

function UserIndex() {
  const { data: userList, refetch } = useGetUsers();
  const deleteApi = useDeleteUser();
  const navigate = useNavigate();

  const deleteItem = (id) => {
    if (!id) return;
    deleteApi.mutate(id, { onSuccess: refetch });
  };

  return (
    <div className="user-index">
      <div className="header">
        <h2 className="section-title">Users</h2>
        <div className="button-group">
          <button
            className="btn-back"
            onClick={() => navigate("/admin/dashboard")}
          >
            Back to Dashboard
          </button>
          <button
            className="btn-add"
            onClick={() => navigate("/admin/user/new")}
          >
            Add New User
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList?.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => navigate(`/admin/user/${user.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteItem(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserIndex;
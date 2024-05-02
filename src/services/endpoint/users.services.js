import Api from "../api/axiosInstance";

class UsersServices {
  getUsers = () => {
    return Api.get("/users");
  };
}

const usersServices = new UsersServices();

export default usersServices;

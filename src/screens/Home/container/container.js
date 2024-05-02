import { useDispatch, useSelector } from "react-redux";
import { createContainer } from "unstated-next";
import * as UsersActions from "store/users/actions";

// @compose a container
function useStateToProps() {
  return useSelector((state) => {
    return {
      userList: state.users.userList,
    };
  });
}

function useDispatchToProps() {
  const dispatch = useDispatch();
  return {
    getUserList: () => dispatch(UsersActions.getUserListRequest()),
  };
}

// @create a container
export const StateToProps = createContainer(useStateToProps);
export const DispatchToProps = createContainer(useDispatchToProps);

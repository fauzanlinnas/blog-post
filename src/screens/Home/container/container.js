import { useDispatch, useSelector } from "react-redux";
import { createContainer } from "unstated-next";

// @compose a container
function useStateToProps() {
  return useSelector((state) => {
    return {};
  });
}

function useDispatchToProps() {
  const dispatch = useDispatch();
  return {};
}

// @create a container
export const StateToProps = createContainer(useStateToProps);
export const DispatchToProps = createContainer(useDispatchToProps);

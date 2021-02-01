// Styling
import { DeleteButtonStyled } from "../../styles";

import { deleteProduct } from "../../store/actions";
import { useDispatch } from "react-redux";

const DeleteButton = ({ productId }) => {
  const dispatch = useDispatch();


  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteProduct(productId))}>
      Delete
    </DeleteButtonStyled>
  ); 
};

export default DeleteButton;

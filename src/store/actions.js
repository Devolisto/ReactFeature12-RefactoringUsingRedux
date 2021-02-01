

export const deleteProduct = (productId) => ({
  type: "DELETE_PRODUCT",
  payload: { productId: productId },
});

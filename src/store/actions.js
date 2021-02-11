

// Add Product
export const addProduct = (newProduct) => ({
  type: "ADD_PRODUCT",
  payload: {newProduct}
});

// Delete Product
export const deleteProduct = (productId) => ({
  type: "DELETE_PRODUCT",
  payload: { productId: productId },
});

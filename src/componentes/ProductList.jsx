import React from 'react';

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div className="container mt-5">
      <h2>Product List</h2>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm me-2 ms-2"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm me-2 ms-2"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
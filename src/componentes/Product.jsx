import { useState } from "react";
import ProductList from "./ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

function Product() {
  const [products, setProducts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const saveProducts = () => {
    if (editingIndex !== null) {
      const updatedProduct = { name, price, stock };
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = updatedProduct;
      setProducts(updatedProducts);

      setEditingIndex(null);

      Swal.fire({
        title: "Drag me!",
        icon: "success",
        text: "product saved!",
        draggable: true,
      });
    } else {
      setProducts([...products, { name, price, stock }]);

      Swal.fire({
        title: "Drag me!",
        icon: "success",
        text: "product saved!",
        draggable: true,
      });
    }
  };

  const deleteProduct = (index) => {
    console.log("eliminar desde ProductList");
    console.log(index);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (index >= 0) {
          const updatedProducts = products.filter((_, i) => i !== index);
          setProducts(updatedProducts);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleEdit = (index) => {
    console.log("editar desde ProductList");
    console.log(index);
    const productToEdit = products[index];
    setName(productToEdit.name); // Set name field
    setPrice(productToEdit.price); // Set price field
    setStock(productToEdit.stock); // Set stock field
    setEditingIndex(index); // Set the editing index
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <form>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              type="text"
              name="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              type="text"
              name="stock"
              placeholder="stck"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={saveProducts}
            >
              Enviar
            </button>
          </form>
        </div>

        <ProductList
          products={products}
          onDelete={deleteProduct}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Product;

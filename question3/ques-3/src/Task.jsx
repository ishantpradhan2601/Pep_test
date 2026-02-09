import { useState } from "react";

const products = [
  { id: 1, name: "Mobile", price: 15000 },
  { id: 2, name: "Fridge", price: 10000 },
  { id: 3, name: "AC", price: 30000 }
];

export default function ProductDashboard() {
  const [cart, setCart] = useState([]);

  const toggleCart = (product) => {
    if (cart.includes(product.id)) {
      setCart(cart.filter(id => id !== product.id));
    } else {
      setCart([...cart, product.id]);
    }
  };

  const total = products
    .filter(p => cart.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={() => toggleCart(p)}>
                  {cart.includes(p.id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total: {total}</h2>
    </div>
  );
}

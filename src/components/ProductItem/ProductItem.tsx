import { ProductType } from "../ProductList/ProductList";

export default function ProductItem({
  item,
  addedProduct,
  addProduct,
}: {
  item: ProductType;
  addedProduct: ProductType[];
  addProduct: (product: ProductType) => void;
}) {
  return (
    <li className="product_item">
      <div className="product_image"></div>
      <div className="product_content">
        <h3 className="product_title">{item.title}</h3>
        <p className="product_text">{item.description}</p>
      </div>
      <div className="product_basket">
        <p className="product_price">{item.price}</p>
        <button className="add_button" onClick={() => addProduct(item)}>
          {addedProduct.find((el) => el.id === item.id) ? "Remove" : "Add"}
        </button>
      </div>
    </li>
  );
}

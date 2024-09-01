import { useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
interface ProductType {
  id: string;
  title: string;
  price: number;
  description: string;
}

export function ProductList() {
  const [addedProduct, setAddedProduct] = useState<ProductType[]>([]);
  const { tg } = useTelegram();
  const addProduct = (product: ProductType) => {
    if (addedProduct.find((el) => el.id === product.id)) {
      setAddedProduct(addedProduct.filter((el) => el.id !== product.id));
    } else {
      setAddedProduct((addedProduct) => addedProduct.concat(product));
    }
  };

  const products = [
    {
      id: "1",
      title: "Джинсы",
      price: 5000,
      description: "Синего цвета, прямые",
    },
    {
      id: "2",
      title: "Куртка",
      price: 12000,
      description: "Зеленого цвета, теплая",
    },
    {
      id: "3",
      title: "Джинсы 2",
      price: 5000,
      description: "Синего цвета, прямые",
    },
    {
      id: "4",
      title: "Куртка 8",
      price: 122,
      description: "Зеленого цвета, теплая",
    },
    {
      id: "5",
      title: "Джинсы 3",
      price: 5000,
      description: "Синего цвета, прямые",
    },
    {
      id: "6",
      title: "Куртка 7",
      price: 600,
      description: "Зеленого цвета, теплая",
    },
    {
      id: "7",
      title: "Джинсы 4",
      price: 5500,
      description: "Синего цвета, прямые",
    },
    {
      id: "8",
      title: "Куртка 5",
      price: 12000,
      description: "Зеленого цвета, теплая",
    },
  ];
  useEffect(() => {
    if (addedProduct.length) {
      tg?.MainButton?.show();
      tg?.MainButton?.setParams({
        text: `Price: ${addedProduct.reduce((acc, el) => acc + +el.price, 0)}`,
      });
    } else {
      tg?.MainButton?.hide();
    }
  }, [addedProduct]);
  return (
    <div>
      <ul className="product_list">
        {products.map((item) => {
          return (
            <li key={item.id} className="product_item">
              <div className="product_image"></div>
              <div className="product_content">
                <h3 className="product_title">{item.title}</h3>
                <p className="product_text">{item.description}</p>
              </div>
              <div className="product_basket">
                <p className="product_price">{item.price}</p>
                <button className="add_button" onClick={() => addProduct(item)}>
                  Add
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div>{addedProduct.reduce((acc, el) => acc + +el.price, 0)}</div> */}
    </div>
  );
}

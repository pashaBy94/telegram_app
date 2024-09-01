import { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";
export interface ProductType {
  id: string;
  title: string;
  price: number;
  description: string;
}

export function ProductList() {
  const [addedProduct, setAddedProduct] = useState<ProductType[]>([]);
  const { tg, queryId } = useTelegram();
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

  const addProduct = (product: ProductType) => {
    if (addedProduct.find((el) => el.id === product.id)) {
      setAddedProduct(addedProduct.filter((el) => el.id !== product.id));
    } else {
      setAddedProduct((addedProduct) => addedProduct.concat(product));
    }
  };
  const sendData = useCallback(() => {
    const data = {
      products: addedProduct,
      queryId,
      totalPrice: addedProduct.reduce((acc, el) => acc + +el.price, 0),
    };
    fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, [addedProduct]);
  useEffect(() => {
    tg.onEvent("mainButtonClicked", sendData);
    return () => tg.offEvent("mainButtonClicked", sendData);
  }, [sendData]);
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
            <ProductItem
              key={item.id}
              item={item}
              addedProduct={addedProduct}
              addProduct={addProduct}
            />
          );
        })}
      </ul>
    </div>
  );
}

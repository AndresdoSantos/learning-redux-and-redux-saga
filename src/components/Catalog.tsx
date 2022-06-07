import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { api } from '../services/api';

import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/type';

export function Catalog() {
  const dispatch = useDispatch();

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getCatalog() {
      const { data } = await api.get('products');

      setCatalog(data);
    }

    getCatalog();
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>R$ {product.price}</span> {' - '}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </>
  );
}

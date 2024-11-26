import { Product } from '@/types';
import NoResult from './ui/no-result';
import ProductCard from './ui/product-card';

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      <h3 className="font-bold text-3xl ">{title}</h3>
      {items.length === 0 && <NoResult />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((item) => (
                  <ProductCard key={item.id} data={item} />
              ))}
      </div>
    </div>
  );
};

export default ProductList;

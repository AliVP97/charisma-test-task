import { TProduct } from "@/types";
import Image from "next/image";

type TProductDetailProps = {
  data?: TProduct;
};

export const ProductDetail: React.FC<TProductDetailProps> = ({
  data: product,
}) => {
  return (
    <div className="mx-auto max-w-2xl border p-8">
      <div className="mb-2 rounded-md bg-white p-5">
        <Image
          src={product?.image || ""}
          alt={product?.title || ""}
          className="mb-6 h-64 w-full rounded-md object-scale-down"
          height={256}
          width={256}
        />
      </div>
      <h1 className="mb-2 text-3xl font-bold">{product?.title}</h1>
      <p className="mb-4 text-gray-600">{product?.category}</p>
      <p className="mb-2 text-lg font-bold text-gray-800">$ {product?.price}</p>
      <p className="mb-6 text-justify text-gray-700">{product?.description}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <span className="font-bold text-gray-800">Rating:</span>
          <span className="ml-1">{product?.rating.rate}</span>
        </div>
        <div>
          <span className="font-bold text-gray-800">Reviews:</span>
          <span className="ml-1">{product?.rating.count}</span>
        </div>
      </div>
    </div>
  );
};

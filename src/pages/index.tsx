import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "react-query";

import { Products } from "@/modules";
import { Header } from "@/components";
import { fetchAllProducts } from "@/services";

import { TProduct } from "@/types";

import "swiper/css/navigation";
import "swiper/css";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products", fetchAllProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const ProductsPage: React.FC = () => {
  const { data: products } = useQuery<TProduct[]>("products", fetchAllProducts);

  return (
    <div className="flex h-[100svh] flex-col">
      <Header>Products</Header>
      <div className="mx-auto w-[-webkit-fill-available] max-w-xl flex-grow p-5">
        <Products data={products} />
      </div>
    </div>
  );
};

export default ProductsPage;

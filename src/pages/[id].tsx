import { useCallback } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate, useQuery } from "react-query";
import useLocalStorage from "use-local-storage-state";

import { ProductDetail } from "@/modules";
import { Header } from "@/components";
import { fetchProductById } from "@/services";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["products", params?.id],
    () => typeof params?.id === "string" && fetchProductById(params?.id),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const ProductDetailPage: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const [likedProducts, setLikedProducts] = useLocalStorage<{
    [key: string]: boolean;
  }>("liked-products", {
    defaultValue: {},
  });

  const { data: product } = useQuery(["products", id], () =>
    fetchProductById(String(id)),
  );

  const onLikeHandler = useCallback(() => {
    if (typeof id === "string") {
      if (likedProducts[id]) {
        setLikedProducts({ ...likedProducts, [id]: !likedProducts[id] });
      } else {
        setLikedProducts({ ...likedProducts, [id]: true });
      }
    }
  }, [id, likedProducts, setLikedProducts]);

  return (
    <div className="flex h-[100svh] flex-col">
      <Header
        hasBackButton
        hasLikeButton={{
          liked: typeof id === "string" && likedProducts[id],
        }}
        onLike={onLikeHandler}
      >
        Product Detail
      </Header>
      <div className="overflow-y-auto">
        <ProductDetail data={product} />
      </div>
    </div>
  );
};

export default ProductDetailPage;

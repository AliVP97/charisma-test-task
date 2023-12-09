import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import useLocalStorage from "use-local-storage-state";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TProduct } from "@/types";

type TProductsProps = {
  data?: TProduct[];
};

export const Products: React.FC<TProductsProps> = ({ data: products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [likedProducts] = useLocalStorage<{
    [key: string]: boolean;
  }>("liked-products", { defaultValue: {} });

  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    setActiveIndex(sliderRef.current.swiper.activeIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setActiveIndex(sliderRef.current.swiper.activeIndex);
  }, []);

  return (
    <Swiper ref={sliderRef} modules={[Autoplay]} autoplay>
      {products?.map((product) => (
        <SwiperSlide key={product.id}>
          <Link
            href={String(product.id)}
            className="relative flex flex-col gap-y-5"
          >
            {likedProducts?.[product.id] && (
              <div
                className={
                  "absolute end-0 top-16 flex items-center justify-center rounded-full border-4 border-teal-50 bg-yellow-400 p-3 text-2xl font-bold text-red-500"
                }
              >
                <FontAwesomeIcon icon={faHeart} suppressHydrationWarning />
              </div>
            )}
            <div className="absolute end-3 rounded-full border-4 border-teal-50 bg-yellow-400 px-3 py-2 text-xl font-bold">
              $ {product.price}
            </div>
            <div className="flex aspect-square h-full w-full items-center justify-center rounded-full border-4 border-solid border-yellow-400 bg-white p-12 shadow">
              <Image
                src={product.image}
                alt={product.title}
                className="aspect-square object-contain"
                height={256}
                width={256}
              />
            </div>
            <div className="bg-yellow-300 p-2 text-4xl font-bold">
              {product.title}
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-between p-5 text-5xl">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faChevronCircleLeft}
          onClick={handlePrev}
        />
        <span className="text-lg">{products?.[activeIndex]?.category}</span>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faChevronCircleRight}
          onClick={handleNext}
        />
      </div>
    </Swiper>
  );
};

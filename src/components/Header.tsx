import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useCallback } from "react";

type THeaderProps = {
  hasBackButton?: boolean;
  hasLikeButton?: false | { liked: boolean };
  onLike?: () => void;
  children: React.ReactNode;
};

export const Header: React.FC<THeaderProps> = ({
  hasBackButton = false,
  hasLikeButton = false,
  onLike,
  children,
}) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="relative mt-5 flex h-14 w-full items-center justify-center py-4">
      {hasBackButton && (
        <div
          className="absolute start-5 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-300 p-3 text-2xl"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
      <h1 className="text-center text-2xl font-black">{children}</h1>
      {hasLikeButton && (
        <div
          className={`absolute end-5 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-300 p-3 text-2xl ${
            hasLikeButton?.liked ? "text-red-500" : "text-teal-500"
          }`}
          onClick={onLike}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
      )}
    </div>
  );
};

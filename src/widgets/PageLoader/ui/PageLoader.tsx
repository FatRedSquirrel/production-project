import { classNames } from "shared/lib/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  const additional = className ? [className] : [];

  return (
    <div className={classNames(cls.pageLoader, {}, additional)}>
      <Loader/>
    </div>
  );
};

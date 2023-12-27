import Image from "next/image";
import { HeroImageCover } from "./assets";

export const HeroImageSection = () => {
    return (
      <div className="h-[880px] w-full min-[1730px]:w-[1730px] mt-32 mx-auto overflow-hidden relative">
        <Image
          className="absolute z-10"
          src={HeroImageCover}
          alt="Hero image"
          fill
          objectFit="cover"
        />
      </div>
    )
};

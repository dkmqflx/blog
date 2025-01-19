import Image, { ImageProps } from "next/image";

type ImageWithCaptionProps = Pick<
  ImageProps,
  "src" | "alt" | "width" | "height" | "priority"
> & {
  caption: string;
};

const ImageWithCaption = ({
  src,
  alt,
  caption,
  width,
  height,
  priority,
}: ImageWithCaptionProps) => {
  return (
    <figure style={{ textAlign: "center" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default ImageWithCaption;

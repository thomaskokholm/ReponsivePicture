import React = require('react');
import { FC } from 'react';

export type PictureProps = {
  src: string;
  title: string;
  imageSizes: {
    xs: { w: number; h: number };
    sm: { w: number; h: number };
    md: { w: number; h: number };
    lg: { w: number; h: number };
    xl: { w: number; h: number };
  };
  objectFit?: 'contain' | 'cover';
  alt?: string;
};
const Picture: FC<PictureProps> = ({
  src,
  title,
  imageSizes,
  objectFit = 'contain',
  alt = title,
}): JSX.Element => {
  const getSrc = (width: number, height: number): string => {
    return `${src}/${width.toString()}x${height.toString()}.png?text=${width.toString()}x${height.toString()}`;
  };

  const getStyles = (): React.CSSProperties => {
    if (objectFit === 'cover') {
      return { width: 100 + '%', height: 100 + '%' };
    }
    return { maxWidth: 100 + '%', height: 'auto' };
  };
  return (
    <picture style={getStyles()}>
      <source
        srcSet={getSrc(imageSizes.xl.w, imageSizes.xl.h)}
        media="(min-width: 1920px)"
      />
      <source
        srcSet={getSrc(imageSizes.lg.w, imageSizes.lg.h)}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={getSrc(imageSizes.md.w, imageSizes.md.h)}
        media="(min-width: 1024px)"
      />
      <source
        srcSet={getSrc(imageSizes.sm.w, imageSizes.sm.h)}
        media="(min-width: 768px)"
      />
      <source
        srcSet={getSrc(imageSizes.xs.w, imageSizes.xs.h)}
        media="(max-width: 767px)"
      />
      <img
        src={getSrc(imageSizes.md.w, imageSizes.md.h)}
        title={title}
        alt={alt}
        style={getStyles()}
      />
    </picture>
  );
};
export default Picture;

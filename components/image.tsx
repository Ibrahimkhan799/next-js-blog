"use client";
import { cn } from '@/lib/utils';
import * as I from 'next/image';
import React, { forwardRef } from 'react';

export interface ImageProps extends I.ImageProps {
  animate?: boolean;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, alt, src, animate = null, ...props }, ref) => {
    const [loading,setLoading] = React.useState<boolean>(true);
    const a = animate === null || !animate ? "" : "transition";
    return (
      <I.default
        className={cn('object-contain', className,loading && "blur-lg",a)}
        src={src || ''}
        alt={alt || ''}
        onLoad={()=> setLoading(false)}
        ref={ref as React.RefObject<HTMLImageElement>}
        {...props}
      />
    );
  }
);
Image.displayName = 'Image';

export default Image;

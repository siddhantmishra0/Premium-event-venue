import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImageSkeleton } from "./skeleton";

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  showSkeleton?: boolean;
  blurOnLoad?: boolean;
}

export function ProgressiveImage({
  src,
  alt,
  className,
  containerClassName,
  showSkeleton = true,
  blurOnLoad = true,
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [isInView, src]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <AnimatePresence mode="wait">
        {!isLoaded && showSkeleton && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <ImageSkeleton className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {isInView && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            blurOnLoad && !isLoaded && "blur-sm scale-105",
            isLoaded && "blur-0 scale-100",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}

export function ProgressiveBackgroundImage({
  src,
  children,
  className,
  overlayClassName,
}: {
  src: string;
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {/* Skeleton background */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="bg-skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-muted"
          >
            <div
              className="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent"
              style={{ transform: "translateX(-100%)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')` }}
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05,
          filter: isLoaded ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 0.7 }}
      />

      {/* Optional overlay */}
      {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
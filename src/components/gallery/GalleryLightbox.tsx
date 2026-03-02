import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  selectedId: number | null;
  onClose: () => void;
  onNavigate: (id: number) => void;
}

export const GalleryLightbox = ({
  images,
  selectedId,
  onClose,
  onNavigate,
}: GalleryLightboxProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const selectedImage = images.find((img) => img.id === selectedId);
  const currentIndex = images.findIndex((img) => img.id === selectedId);

  // Reset zoom when image changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [selectedId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId === null) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "0":
          handleResetZoom();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, images]);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (currentIndex === -1) return;
      
      if (direction === "prev") {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        onNavigate(images[prevIndex].id);
      } else {
        const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        onNavigate(images[nextIndex].id);
      }
    },
    [currentIndex, images, onNavigate]
  );

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (zoom === 1) {
      setZoom(2);
    } else {
      handleResetZoom();
    }
  };

  if (selectedId === null || !selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Header with controls */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {/* Image info */}
          <div className="text-white">
            <h3 className="font-serif text-lg">{selectedImage.title}</h3>
            <p className="text-sm text-white/60">{selectedImage.category}</p>
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              disabled={zoom <= 1}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ZoomOut className="w-5 h-5 text-white" />
            </motion.button>
            
            <span className="text-white text-sm min-w-[3rem] text-center">
              {Math.round(zoom * 100)}%
            </span>
            
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              disabled={zoom >= 4}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </motion.button>
            
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleResetZoom();
              }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RotateCcw className="w-5 h-5 text-white" />
            </motion.button>

            <div className="w-px h-6 bg-white/20 mx-2" />

            <motion.button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            navigateImage("prev");
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-20 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
        </motion.button>

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            navigateImage("next");
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-20 group"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
        </motion.button>

        {/* Main image container */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
        >
          <motion.img
            key={selectedId}
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: zoom,
              x: position.x,
              y: position.y,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              opacity: { duration: 0.3 },
              scale: { type: "spring", stiffness: 300, damping: 30 },
              x: { type: "spring", stiffness: 300, damping: 30 },
              y: { type: "spring", stiffness: 300, damping: 30 },
            }}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={(e) => {
              e.stopPropagation();
              handleDoubleClick();
            }}
            draggable={false}
          />
        </div>

        {/* Footer with thumbnails and counter */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 to-transparent p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {/* Thumbnail strip */}
          <div className="flex justify-center gap-2 mb-4 overflow-x-auto py-2 max-w-full">
            {images.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(image.id);
                }}
                className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all duration-200 ${
                  image.id === selectedId
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-black scale-110"
                    : "opacity-50 hover:opacity-100"
                }`}
                whileHover={{ scale: image.id === selectedId ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>

          {/* Counter and keyboard hints */}
          <div className="flex items-center justify-between text-white/60 text-sm">
            <span className="hidden sm:inline">
              ← → Navigate • +/- Zoom • 0 Reset • Esc Close
            </span>
            <span className="sm:hidden">Swipe to navigate • Double-tap to zoom</span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

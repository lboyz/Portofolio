import { useEffect, useRef } from "react";

type BackgroundSquaresProps = {
  squareSize?: number;
  speed?: number;
  direction?: "diagonal" | "horizontal" | "vertical";
  className?: string;
};

export function BackgroundSquares({
  squareSize = 50,
  speed = 0.2,
  direction = "diagonal",
  className = "",
}: BackgroundSquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let frameId = 0;
    let offsetX = 0;
    let offsetY = 0;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const size = squareSize * dpr;
      const styles = window.getComputedStyle(canvas);
      const fill =
        styles.getPropertyValue("--square-fill").trim() ||
        "rgba(15, 23, 42, 0.06)";
      const stroke =
        styles.getPropertyValue("--square-stroke").trim() ||
        "rgba(15, 23, 42, 0.14)";

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = fill;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1 * dpr;

      for (let x = -size; x < width + size; x += size) {
        for (let y = -size; y < height + size; y += size) {
          const drawX = x + offsetX;
          const drawY = y + offsetY;
          ctx.fillRect(drawX, drawY, size, size);
          ctx.strokeRect(drawX, drawY, size, size);
        }
      }
    };

    const animate = () => {
      if (direction === "horizontal" || direction === "diagonal") {
        offsetX -= speed * dpr;
      }
      if (direction === "vertical" || direction === "diagonal") {
        offsetY -= speed * dpr;
      }

      const size = squareSize * dpr;
      if (Math.abs(offsetX) >= size) {
        offsetX = 0;
      }
      if (Math.abs(offsetY) >= size) {
        offsetY = 0;
      }

      draw();
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    draw();
    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
    };
  }, [squareSize, speed, direction]);

  return (
    <canvas
      ref={canvasRef}
      className={`background-squares ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

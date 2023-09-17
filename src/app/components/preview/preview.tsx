import { useEffect, useRef } from "react";

import { useAtom } from "jotai";
import SignaturePad from "signature_pad";

import { previewCanvasAtom } from "@/app/store/preview-store";

export const Preview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [siganturePad, setSignaturePad] = useAtom(previewCanvasAtom);

  const readyPad = () => {
    if (!canvasRef.current) return;
    const tempsignaturePad = new SignaturePad(canvasRef.current, {
      backgroundColor: "rgb(255, 255, 255)",
    });
    tempsignaturePad.maxWidth = 0;
    tempsignaturePad.minWidth = 0;
    tempsignaturePad.dotSize = 0;
    setSignaturePad(tempsignaturePad);
  };

  const handleClear = () => {
    if (!canvasRef.current) return;
    siganturePad?.clear();
  };

  useEffect(() => {
    readyPad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button onClick={handleClear}>Clear</button>
      <canvas
        className="mx-auto rounded-lg border-2 border-gray-400"
        width={window.screen.width * 0.9}
        height={300}
        ref={canvasRef}
      />
    </div>
  );
};

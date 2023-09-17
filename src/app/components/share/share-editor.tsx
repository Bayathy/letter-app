"use client";

import { useEffect, useRef, useState } from "react";

import { useSearchParams } from "next/navigation";
import SignaturePad from "signature_pad";

import type { PointGroup } from "signature_pad";

import { getStrokesByID } from "@/services/stroke";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const ShareEditor = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("letter_id");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [signaturePad, setSignaturePad] = useState<SignaturePad>();

  const readyPad = () => {
    if (!canvasRef.current) return;
    const tempSignaturePad = new SignaturePad(canvasRef.current, {
      backgroundColor: "rgb(255, 255, 255)",
    });
    setSignaturePad(tempSignaturePad);
  };

  // はじめに描画を発火
  useEffect(() => {
    if (!signaturePad) readyPad();

    const initShareEditor = async () => {
      if (id === null) return;
      const strokes = await getStrokesByID(id);
      draw(strokes);
    };
    initShareEditor();
  }, [signaturePad]);

  const draw = async (strokes: PointGroup[]) => {
    if (!canvasRef.current) return;
    if (!signaturePad) return;

    let beforeTime = strokes[0].points[0].time;

    for (const stroke of strokes) {
      const beforeStroke = signaturePad.toData();
      const nowStroke = { ...stroke };
      nowStroke.points = [];

      for (let j = 0; j < stroke.points.length; j++) {
        const waitTime = stroke.points[j].time - beforeTime;
        nowStroke.points.push(stroke.points[j]);
        signaturePad.fromData([...beforeStroke, nowStroke] as PointGroup[]);
        await sleep(waitTime);
        beforeTime = stroke.points[j].time;
      }
    }
  };

  return (
    <div className="grid w-full place-content-center gap-2" id="signature-pad">
      <canvas
        className="w-full border border-black"
        ref={canvasRef}
        width={
          window.screen.width * 0.9 < 600 ? window.screen.width * 0.9 : 600
        }
        height={300}
      />
    </div>
  );
};

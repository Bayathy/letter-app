"use client";

import { useEffect, useRef, useState } from "react";

import {
  BorderWidthIcon,
  EraserIcon,
  FileIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import * as Slider from "@radix-ui/react-slider";
import SignaturePad from "signature_pad";

import { postStroke } from "@/services/stroke";

export const Editor = () => {
  const [editMode, setEditMode] = useState<"draw" | "erase">("draw");
  const [drawWidth, setDrawWidth] = useState<number>(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [signaturePad, setSignaturePad] = useState<SignaturePad>();

  const readyPad = () => {
    if (!canvasRef.current) return;
    const tempsignaturePad = new SignaturePad(canvasRef.current, {
      backgroundColor: "rgb(255, 255, 255)",
    });
    setSignaturePad(tempsignaturePad);
  };

  const handleSave = async() => {
    if (!signaturePad) return;
    const data = signaturePad.toData();
    console.log(data);
    await postStroke(data);
  };

  const handleClear = () => {
    if (!signaturePad) return;
    signaturePad.clear();
  };

  const handleErase = () => {
    if (!signaturePad) return;
    signaturePad.compositeOperation = "destination-out";
    signaturePad.minWidth = signaturePad.maxWidth = 10;
    setEditMode("erase");
  };

  const handleDraw = () => {
    if (!signaturePad) return;
    signaturePad.compositeOperation = "source-over";
    signaturePad.minWidth = 1;
    signaturePad.maxWidth = 2;
    setEditMode("draw");
  };

  useEffect(() => {
    readyPad();
  }, []);

  return (
    <div className="grid w-full place-content-center gap-2">
      <canvas
        className="border border-black"
        ref={canvasRef}
        width={
          window.screen.width * 0.9 < 600 ? window.screen.width * 0.9 : 600
        }
        height={300}
      />
      <div className="flex items-center justify-center gap-2">
        <BorderWidthIcon />
        <Slider.Root
          className="relative flex h-5 w-[200px] touch-none select-none items-center"
          defaultValue={[drawWidth]}
          onValueChange={(value) => {
            setDrawWidth(value[0]);
            if (!signaturePad) return;
            signaturePad.minWidth = value[0];
            signaturePad.maxWidth = value[0] - 2;
          }}
          max={8}
          min={3}
          step={0.2}
        >
          <Slider.Track className="relative h-[3px] grow rounded-full bg-gray-500">
            <Slider.Range className="absolute h-full rounded-full bg-gray-500" />
          </Slider.Track>
          <Slider.Thumb
            className="block h-3 w-3 rounded-full bg-white outline outline-1"
            aria-label="Volume"
          />
        </Slider.Root>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className={"rounded-xl bg-purple-500 px-4 py-2 text-white"}
          onClick={handleSave}
          aria-label="保存"
        >
          <FileIcon />
        </button>

        <button
          className={`rounded-xl ${
            editMode === "draw" ? "bg-blue-500" : "bg-blue-400"
          } px-4 py-2 text-white`}
          onClick={handleDraw}
          aria-label="ペンモードに切り替え"
        >
          <Pencil1Icon />
        </button>
        <button
          className={`rounded-xl ${
            editMode === "erase" ? "bg-blue-500" : "bg-blue-400"
          } px-4 py-2 text-white`}
          onClick={handleErase}
          aria-label="消しゴムモードに切り替え"
        >
          <EraserIcon />
        </button>
        <button
          className="rounded-xl bg-red-500 px-4 py-2 text-white"
          onClick={handleClear}
          aria-label="クリア"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};


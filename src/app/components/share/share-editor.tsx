"use client";

import { useEffect, useRef, useState } from "react";

import SignaturePad from "signature_pad";

import type { PointGroup } from "signature_pad";

const testArray: PointGroup[] = [
  {
    penColor: "black",
    dotSize: 0,
    minWidth: 0.5,
    maxWidth: 2.5,
    velocityFilterWeight: 0.7,
    compositeOperation: "source-over",
    points: [
      {
        time: 1_694_852_395_999,
        x: 45.333_335_876_464_844,
        y: 92,
        pressure: 1,
      },
      {
        time: 1_694_852_396_060,
        x: 66.666_671_752_929_69,
        y: 92,
        pressure: 1,
      },
      {
        time: 1_694_852_396_076,
        x: 81.333_335_876_464_84,
        y: 92,
        pressure: 1,
      },
      {
        time: 1_694_852_396_093,
        x: 110.666_671_752_929_69,
        y: 92,
        pressure: 1,
      },
      {
        time: 1_694_852_396_109,
        x: 136,
        y: 92,
        pressure: 1,
      },
      {
        time: 1_694_852_396_125,
        x: 152,
        y: 93.333_335_876_464_84,
        pressure: 1,
      },
      {
        time: 1_694_852_396_143,
        x: 172,
        y: 94.666_671_752_929_69,
        pressure: 1,
      },
      {
        time: 1_694_852_396_159,
        x: 186.666_671_752_929_7,
        y: 94.666_671_752_929_69,
        pressure: 1,
      },
      {
        time: 1_694_852_396_176,
        x: 208,
        y: 94.666_671_752_929_69,
        pressure: 1,
      },
      {
        time: 1_694_852_396_192,
        x: 216,
        y: 94.666_671_752_929_69,
        pressure: 1,
      },
      {
        time: 1_694_852_396_226,
        x: 221.333_343_505_859_38,
        y: 94.666_671_752_929_69,
        pressure: 1,
      },
      {
        time: 1_694_852_396_277,
        x: 226.666_671_752_929_7,
        y: 93.333_335_876_464_84,
        pressure: 1,
      },
      {
        time: 1_694_852_396_333,
        x: 232,
        y: 92,
        pressure: 1,
      },
    ],
  },
  {
    penColor: "black",
    dotSize: 0,
    minWidth: 0.5,
    maxWidth: 2.5,
    velocityFilterWeight: 0.7,
    compositeOperation: "source-over",
    points: [
      {
        time: 1_694_852_413_568,
        x: 298.666_687_011_718_75,
        y: 37.333_335_876_464_844,
        pressure: 1,
      },
    ],
  },
  {
    penColor: "black",
    dotSize: 0,
    minWidth: 0.5,
    maxWidth: 2.5,
    velocityFilterWeight: 0.7,
    compositeOperation: "source-over",
    points: [
      {
        time: 1_694_852_414_550,
        x: 256,
        y: 45.333_335_876_464_844,
        pressure: 1,
      },
      {
        time: 1_694_852_414_592,
        x: 256,
        y: 50.666_667_938_232_42,
        pressure: 1,
      },
      {
        time: 1_694_852_414_626,
        x: 256,
        y: 65.333_335_876_464_84,
        pressure: 1,
      },
      {
        time: 1_694_852_414_643,
        x: 258.666_687_011_718_75,
        y: 74.666_671_752_929_69,
        pressure: 1,
      },
      {
        time: 1_694_852_414_660,
        x: 260,
        y: 90.666_671_752_929_69,
        pressure: 1,
      },
      {
        time: 1_694_852_414_677,
        x: 262.666_687_011_718_75,
        y: 108,
        pressure: 1,
      },
      {
        time: 1_694_852_414_694,
        x: 265.333_343_505_859_4,
        y: 132,
        pressure: 1,
      },
      {
        time: 1_694_852_414_710,
        x: 268,
        y: 145.333_343_505_859_38,
        pressure: 1,
      },
      {
        time: 1_694_852_414_744,
        x: 269.333_343_505_859_4,
        y: 153.333_343_505_859_38,
        pressure: 1,
      },
    ],
  },
];

export const ShareEditor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [signaturePad, setSignaturePad] = useState<SignaturePad>();

  const readyPad = () => {
    if (!canvasRef.current) return;
    const tempsignaturePad = new SignaturePad(canvasRef.current, {
      backgroundColor: "rgb(255, 255, 255)",
    });
    setSignaturePad(tempsignaturePad);
  };

  // はじめに描画を発火
  useEffect(() => {
    readyPad();
    const initShareEditor = async() => {
      // TODO: データの取得処理

      draw()
    }
    initShareEditor();
  }, []);
  
  const draw = () => {
    if (!canvasRef.current) return;
    let index = 0

    const processValue = setInterval(() => {
      if(index >= index) {
        clearInterval(processValue)
      }

      const value = testArray[index];
      signaturePad?.fromData([
        ...signaturePad.toData(),
        value
      ] as PointGroup[])
      index++;
    }, 1000)
  };



    // {
    // penColor: "black",
    // dotSize: 0,
    // minWidth: 0.5,
    // maxWidth: 2.5,
    // velocityFilterWeight: 0.7,
    // compositeOperation: "source-over",
    // points: [
    //   {
    //     time: 1_694_852_414_550,
    //     x: 256,
    //     y: 45.333_335_876_464_844,
    //     pressure: 1,
    //   },
    // }



    // let firstTime = testArray[0]["points"][0]["time"];
    // const drawData: PointGroup[] = [];
    // testArray.map((stroke, i) => {
    //   const tmp = {
    //     penColor: stroke.penColor,
    //     dotSize: stroke.dotSize,
    //     minWidth: stroke.minWidth,
    //     maxWidth: stroke.maxWidth,
    //     velocityFilterWeight: stroke.velocityFilterWeight,
    //     compositeOperation: stroke.compositeOperation,
    //     points: [],
    //   };
    //   drawData.push(tmp);
    //   stroke["points"].map((point) => {
      //     setInterval(() => {
    //       drawData[i]["points"].push(point);
    //       signaturePad?.fromData(drawData);
    //     }, point["time"] - firstTime);
    //     firstTime = point["time"];
    //   });
    // });
  
  return (
    <div className="grid w-full place-content-center gap-2" id="signature-pad">
      <canvas className="w-full border border-black"></canvas>
    </div>
  );
};
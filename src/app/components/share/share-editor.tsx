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

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const ShareEditor = () => {
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
    if(!signaturePad) readyPad();

    const initShareEditor = async() => {
      // TODO: データの取得処理

      draw()
    }
    initShareEditor();
  }, [signaturePad]);
  
  const draw = async () => {
    if (!canvasRef.current) return;
    if (!signaturePad) return 

    // let beforeTime = 1_694_852_395_999;
    for(let i = 0; i < testArray.length; i++) {
      console.log("i")
      const beforeStroke = signaturePad.toData();
      const nowStroke = { ...testArray[i] }
      nowStroke.points = []

      for(let j = 0; j < testArray[i].points.length; j++) {
        console.log("j")
        nowStroke.points.push(testArray[i].points[j]);
          signaturePad.fromData([
            ...beforeStroke,
            nowStroke
        ] as PointGroup[])
        await sleep(500)
      }

      // let betweenTime = elm.points[0].time - beforeTime;
      // beforeTime = elm.points[0].time;
    }
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
      <canvas
        className="w-full border border-black"
        ref={canvasRef}
      ></canvas>
    </div>
  );
};
"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon, QuestionMarkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const ManualDialog = () => {
  return (
    <RadixDialog.Root>
      <RadixDialog.DialogTrigger asChild>
        <button
          className="rounded-full bg-blue-400 p-2 text-white hover:bg-blue-500"
          aria-label="操作説明の表示"
        >
          <QuestionMarkIcon />
        </button>
      </RadixDialog.DialogTrigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-gray-800/[.3]" />
        <RadixDialog.Content className="fixed left-[50%] top-[50%] h-[50vh] max-h-[85vh] w-[90vw] max-w-[8000px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-2">
          <div className="relative h-full w-full">
            <Image src={"/help.png"} alt="マニュアル" layout="fill" />
          </div>
          <RadixDialog.Close asChild>
            <button
              className="absolute right-2 top-2 rounded-full bg-blue-400 p-2 text-white hover:bg-blue-500"
              aria-label="閉じる"
            >
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

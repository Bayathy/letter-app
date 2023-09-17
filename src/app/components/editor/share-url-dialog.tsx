"use client";

import type { Dispatch, SetStateAction } from "react";

export const ShareUrlDialog = ({letterId, setIsDialog}: {letterId: string, setIsDialog: Dispatch<SetStateAction<boolean>>}) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="rounded-lg bg-white p-4 shadow-md">
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-2">
                <h2 className="text-xl font-semibold">シェア用URL</h2>
                <button className="text-gray-500 hover:text-gray-700" id="closeButton" onClick={() => {setIsDialog(false)}}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div className="mt-4">
                <a href={`https://letter-app-pi.vercel.app/share?letter_id=${letterId}`}>{`https://letter-app-pi.vercel.app/share?letter_id=${letterId}`}</a>
            </div>
        </div>
    </div>
  );
}
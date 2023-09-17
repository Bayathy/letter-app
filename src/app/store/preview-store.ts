import { atom } from "jotai";

import type SignaturePad from "signature_pad";

export const previewCanvasAtom = atom<SignaturePad | null>(null);

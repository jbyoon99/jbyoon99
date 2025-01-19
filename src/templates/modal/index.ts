import { DocumentsICO, RecycleBinICO, TopSecretICO } from "@/assets/ico";
import { DevModal, DirectoryModal, NotepadModal } from "@/components";

export const modalTemplate = {
  Copyrights: { Component: DevModal, ico: TopSecretICO },
  "Recycle Bin": { Component: DevModal, ico: RecycleBinICO },
  "My Documents": { Component: DevModal, ico: DocumentsICO },
};

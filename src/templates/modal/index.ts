import { BinICO, DirectoryICO, UsersKeyIco } from "@/assets";
import { DevModal, DirectoryModal, NotepadModal } from "@/components";

export const modalTemplate = {
  Copyrights: { Component: DevModal, ico: UsersKeyIco },
  "Recycle Bin": { Component: DevModal, ico: BinICO },
  "My Documents": { Component: DevModal, ico: DirectoryICO },
};

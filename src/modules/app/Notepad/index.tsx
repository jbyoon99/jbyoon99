import * as S from "../../modals/Notepad/styled";
import { ModalLayout } from "../../system-ui/Windows";

export const NotepadModal = ({ name, content, isFocused, ico }) => {
  return (
    <ModalLayout name={name} isFocused={isFocused} ico={ico}>
      <S.Content>{content}</S.Content>
    </ModalLayout>
  );
};

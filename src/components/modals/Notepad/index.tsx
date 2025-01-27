import * as S from "./styled";
import { ModalLayout } from "../Layout";

export const NotepadModal = ({ name, content, isFocused, ico }) => {
  return (
    <ModalLayout name={name} isFocused={isFocused} ico={ico}>
      <S.Content>{content}</S.Content>
    </ModalLayout>
  );
};

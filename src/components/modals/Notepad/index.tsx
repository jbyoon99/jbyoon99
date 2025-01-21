import * as S from "./styled";
import { ModalLayout } from "../Layout";

export const NotepadModal = ({ name, content, isFocused, ico }) => {
  return (
    <ModalLayout name={name} isFocused={isFocused} ico={ico}>
      <S.Toolbar>
        <span>
          <u>F</u>ile
        </span>
        <span>
          <u>E</u>dit
        </span>
        <span>
          <u>S</u>earch
        </span>
        <span>
          <u>H</u>elp
        </span>
      </S.Toolbar>
      <S.Container>
        <S.Content>{content}</S.Content>
      </S.Container>
    </ModalLayout>
  );
};

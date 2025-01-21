import * as S from "./styled";
import { ModalLayout } from "../Layout";

export const NotepadModal = (props) => {
  return (
    <ModalLayout variant="notepad" {...props}>
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
        <S.Content></S.Content>
      </S.Container>
    </ModalLayout>
  );
};

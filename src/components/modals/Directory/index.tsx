import * as S from "./styled";
import { ModalLayout } from "../Layout";
import { JByoonLogoICO } from "@/assets";

const options = [
  <S.Option key={1}>
    <u>F</u>ile
  </S.Option>,
  <S.Option key={2}>
    <u>E</u>dit
  </S.Option>,
  <S.Option key={3}>
    <u>V</u>iew
  </S.Option>,
  <S.Option key={4}>
    <u>G</u>o
  </S.Option>,
  <S.Option key={5}>
    F<u>a</u>vorites
  </S.Option>,
  <S.Option key={6}>
    <u>H</u>elp
  </S.Option>,
];

export const DirectoryModal = (props) => {
  return (
    <ModalLayout variant="notepad" {...props}>
      <S.Toolbar>
        <S.OptionContainer>{options.map((option) => option)}</S.OptionContainer>
        <S.LogoContainer>
          <S.Logo src={JByoonLogoICO.src} />
        </S.LogoContainer>
      </S.Toolbar>
      <S.Container>
        <S.Content></S.Content>
      </S.Container>
    </ModalLayout>
  );
};

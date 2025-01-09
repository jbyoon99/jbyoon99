import * as S from "./styled";
import ComputerICO from "@/assets/icons/computer_explorer.ico";
import DocumentsICO from "@/assets/icons/directory_open_file_mydocs.ico";
import InternetICO from "@/assets/icons/msie1.ico";
import NetworkICO from "@/assets/icons/network_normal_two_pcs.ico";
import RecycleBinICO from "@/assets/icons/recycle_bin_full.ico";
import TopSecretICO from "@/assets/icons/users_key.ico";

export const Icons = () => {
  return (
    <S.IconsWrapper>
      <S.IconContainer>
        <S.IconImg src={ComputerICO.src} />
        <S.IconName>My Computer</S.IconName>
      </S.IconContainer>
      <S.IconContainer>
        <S.IconImg src={DocumentsICO.src} />
        <S.IconName>My Documents</S.IconName>
      </S.IconContainer>
      <S.IconContainer>
        <S.IconImg src={InternetICO.src} />
        <S.IconName>
          Internet
          <br />
          Explorer
        </S.IconName>
      </S.IconContainer>
      <S.IconContainer>
        <S.IconImg src={NetworkICO.src} />
        <S.IconName>
          Network
          <br />
          Neighborhood
        </S.IconName>
      </S.IconContainer>
      <S.IconContainer>
        <S.IconImg src={RecycleBinICO.src} />
        <S.IconName>Recycle Bin</S.IconName>
      </S.IconContainer>
      <S.IconContainer>
        <S.IconImg src={TopSecretICO.src} />
        <S.IconName>
          JByoon99
          <br />
          Top Secrets
        </S.IconName>
      </S.IconContainer>
    </S.IconsWrapper>
  );
};

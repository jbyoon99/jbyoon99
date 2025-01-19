import { TopSecretICO } from "@/assets/ico";
import * as S from "./styled";

const menus = [
  "Windows Update",
  "Programs",
  "Favorites",
  "Documents",
  "Settings",
  "Find",
  "Help",
  "Run...",
  "Log Off Hi...",
  "Shut Down...",
];

export const StartMenu = ({ isStartMenuOpen }) => {
  return (
    <S.StartMenuWrapper
      onClick={(e) => e.stopPropagation()}
      isStartMenuOpen={isStartMenuOpen}
    >
      <S.SideLine>
        <p>
          <span>JByoon</span>
          <span>99</span>
        </p>
      </S.SideLine>
      <S.MenuContainer>
        {menus.map((menu) => (
          <S.Menu key={menu}>
            <S.MenuIcon src={TopSecretICO.src} />
            <S.MenuName>{menu}</S.MenuName>
          </S.Menu>
        ))}
      </S.MenuContainer>
    </S.StartMenuWrapper>
  );
};

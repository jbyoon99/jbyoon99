import { UnderBarPNG, WindowPNG, XPNG } from "assets";
import * as S from "./styled";
import { WindowDraggable } from "../WindowDraggable";

interface WindowProps {
  name: string;
  icon: string;
  children: React.ReactNode;
}

export const Window = ({ name, icon, children }: WindowProps) => {
  return (
    <WindowDraggable>
      <S.Wrapper>
        <S.Header>
          <S.Title>
            <S.Icon src={icon} />
            <S.Name>{name}</S.Name>
          </S.Title>
          <S.ButtonContainer>
            <S.Button>
              <S.Outline />
              <S.ButtonIcon src={UnderBarPNG.src} />
            </S.Button>
            <S.Button>
              <S.Outline />
              <S.ButtonIcon src={WindowPNG.src} />
            </S.Button>
            <S.Button>
              <S.ButtonIcon src={XPNG.src} />
              <S.Outline />
            </S.Button>
          </S.ButtonContainer>
        </S.Header>
        {children}
      </S.Wrapper>
    </WindowDraggable>
  );
};

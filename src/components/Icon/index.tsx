import { useDoubleClick } from "@/hooks";
import * as S from "./styled";
import { useModal } from "@/providers";
import { modals } from "@/components/modals";

export const Icon = ({ name, ico, ref, highlighted, outlined }) => {
  const { open, close } = useModal();
  const { onDoubleClick } = useDoubleClick([
    () =>
      open(
        modals[name],
        { handleClose: () => close(name) },
        { name, ico: ico }
      ), 
  ]);

  return (
    <S.IconContainer
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onDoubleClick();
      }}
    >
      <S.IconImg src={ico.src} />
      <S.IconName highlighted={highlighted} outlined={outlined}>
        {name}
      </S.IconName>
    </S.IconContainer>
  );
};

import { iconList } from "../../store";
import { Icon } from "../Icon";
import * as S from "./styled";

export const IconList = () => {
  return (
    <S.IconsWrapper>
      {iconList["desktop"].map(({ name, icon }) => (
        <Icon name={name} icon={icon} key={name} />
      ))}
    </S.IconsWrapper>
  );
};

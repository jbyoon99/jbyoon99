import { IconList, TaskBar } from "modules/JByoon99/system-ui";
import * as S from "./styled";
import { msSans, msSansBold, libre } from "assets/fonts";

export const JByoon99 = () => {
  return (
    <S.Desktop
      className={`${msSans.variable} ${msSansBold.variable} ${libre.variable}`}
    >
      <S.Background>
        <IconList />
      </S.Background>
      <TaskBar />
    </S.Desktop>
  );
};

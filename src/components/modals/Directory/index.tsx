import * as S from "./styled";
import { ModalLayout } from "../Layout";
import { recycleBinTemplate } from "@/templates/recycleBin";
import { Icon } from "@/components/Icon";
import { useRef, useState } from "react";
import { useIconClick } from "@/hooks";

export const DirectoryModal = (props) => {
  const [clickedIcon, setClickedIcon] = useState({
    current: null,
    initial: null,
  });
  const iconsRef = useRef([]);
  useIconClick({ iconsRef, iconData: recycleBinTemplate, setClickedIcon });

  return (
    <ModalLayout variant="notepad" {...props}>
      <S.Container>
        <S.Content>
          {recycleBinTemplate.map((icon, idx) => {
            const { name, ico } = icon;
            return (
              <Icon
                ref={(ref) => (iconsRef.current[idx] = ref)}
                key={name}
                config={{ name, ico }}
                isHighlighted={clickedIcon.current === idx}
                isOutlined={clickedIcon.initial === idx}
              />
            );
          })}
        </S.Content>
      </S.Container>
    </ModalLayout>
  );
};

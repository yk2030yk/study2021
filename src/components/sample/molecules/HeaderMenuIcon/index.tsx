import React from "react";

import * as S from "./styles";
import { MenuIcon } from "../../atoms/MenuIcon";

type Props = {
  onClick: () => void;
};

export const HeaderMenuIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <S.HeaderMenuIcon onClick={onClick}>
      <MenuIcon />
    </S.HeaderMenuIcon>
  );
};

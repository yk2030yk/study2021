import React from "react";

import * as S from "./styles";
import { Title } from "../../atoms/Title";

type Props = {};

export const HeaderTitle: React.FC<Props> = () => {
  return (
    <S.HeaderTitle>
      <Title>Sample</Title>
    </S.HeaderTitle>
  );
};

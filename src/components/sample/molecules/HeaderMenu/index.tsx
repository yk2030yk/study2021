import React from "react";
import { MenuItem } from "../../atoms/MenuItem";

import * as S from "./styles";

type Props = {
  close: () => void;
};

const items = [
  { label: "プロフィール" },
  { label: "検索" },
  { label: "ホーム" },
  { label: "詳細設定" },
];

export const HeaderMenu: React.FC<Props> = ({ close }) => {
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => e.preventDefault();

  return (
    <S.HeaderTitle onClick={close}>
      {/* loopはmapで展開する */}
      {items.map((item) => (
        <MenuItem key={item.label} onClick={onClick}>
          {item.label}
        </MenuItem>
      ))}
    </S.HeaderTitle>
  );
};

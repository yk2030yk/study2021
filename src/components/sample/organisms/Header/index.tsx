import React from "react";

import { useHeaderMenu } from "../../hooks/useHeaderMenu";
import { HeaderTitle } from "../../molecules/HeaderTitle";
import { HeaderMenuIcon } from "../../molecules/HeaderMenuIcon";
import { HeaderMenu } from "../../molecules/HeaderMenu";
import * as S from "./styles";

type Props = {};

export const Header: React.FC<Props> = () => {
  const headerMenu = useHeaderMenu();

  return (
    <>
      <S.Header>
        <S.HeaderContentStart>
          <HeaderTitle />
        </S.HeaderContentStart>
        <S.HeaderContentEnd>
          <HeaderMenuIcon onClick={headerMenu.toggle} />
        </S.HeaderContentEnd>
      </S.Header>

      {/* isOpenがtrueの時にメニューを表示 */}
      {headerMenu.isOpen && <HeaderMenu close={headerMenu.close} />}
    </>
  );
};

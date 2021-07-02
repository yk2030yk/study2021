import * as S from "./styles";

type Props = {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

export const MenuItem: React.FC<Props> = ({ children, onClick }) => (
  <S.MenuItem onClick={onClick}>{children}</S.MenuItem>
);

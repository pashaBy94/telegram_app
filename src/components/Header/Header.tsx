import { useTelegram } from "../../hooks/useTelegram";
import { ButtonClose } from "../Button/ButtonClose";

export function Header() {
  const { user } = useTelegram();
  return (
    <header className="header">
      <ButtonClose />
      <span>{user?.username}</span>
    </header>
  );
}

import { useTelegram } from "../../hooks/useTelegram";

export function ButtonClose() {
  const { tGclose } = useTelegram();
  function onClose() {
    tGclose();
  }
  return (
    <button className="close_button" onClick={onClose}>
      close app
    </button>
  );
}

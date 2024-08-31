import { tg } from "../App";

export function ButtonClose() {
  function onClose() {
    tg.close();
  }
  return (
    <button className="close_button" onClick={onClose}>
      close app
    </button>
  );
}

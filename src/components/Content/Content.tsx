import { useTelegram } from "../../hooks/useTelegram";

export function Content() {
  const { onToggleButton } = useTelegram();

  return (
    <div>
      <button className="toggle_button" onClick={onToggleButton}>
        Main button
      </button>
    </div>
  );
}

export function useTelegram() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const tg = window?.Telegram?.WebApp;
  const onToggleButton = () => {
    if (tg?.MainButton?.isVisible) {
      tg?.MainButton?.hide();
    } else {
      tg?.MainButton?.show();
    }
  };
  return {
    tGclose: tg.close,
    tGReady: tg.ready,
    user: tg?.initDataUnsafe?.user,
    onToggleButton,
    tg,
    queryId: tg?.initDataUnsafe?.query_id,
  };
}

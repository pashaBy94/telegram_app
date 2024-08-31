import { ChangeEvent, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

export function Form() {
  const [city, setCity] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [person, setPerson] = useState<string>("user");
  const { tg } = useTelegram();
  const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e?.target?.value);
  };
  const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e?.target?.value);
  };
  const onChangePerson = (e: ChangeEvent<HTMLSelectElement>) => {
    setPerson(e?.target?.value);
  };
  useEffect(() => {
    tg?.MainButton?.setParams({ text: "Send data" });
  }, []);
  useEffect(() => {
    if (city && street) {
      tg?.MainButton?.show();
    } else {
      tg?.MainButton?.hide();
    }
  }, [city, street]);
  return (
    <form className="form">
      <input
        type="text"
        name="city"
        id="city"
        className="input"
        placeholder="CITY"
        value={city}
        onChange={onChangeCity}
      />
      <input
        type="text"
        name="street"
        id="street"
        className="input"
        placeholder="STREET"
        value={street}
        onChange={onChangeStreet}
      />
      <select
        name="person"
        className="select"
        id="person"
        value={person}
        onChange={onChangePerson}
      >
        <option value="user">user</option>
        <option value="company">company</option>
      </select>
    </form>
  );
}

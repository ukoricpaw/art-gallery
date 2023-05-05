import React, { FC, useEffect, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { changeFields } from "../store/reducers/FormSlice";
import {
  idsOfFormFields,
  typeOfQuality,
  typeOfStyles,
  typeOfWork,
} from "../store/reducers/FormSlice";
import { api } from "../api/api";
import { fetchUserArtworks } from "../store/action-creators/fetchUserArtworks";

const NewArtwork: FC = () => {
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => state.FormReducer);
  const user = useAppSelector((state) => state.UserReducer.user);

  const postNewArtwork = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const check = new Set([...Object.values(formState)]);
    console.log(check);
    if (check.has("")) {
      alert("Empty fields");
      return;
    }
    try {
      await api.post("artworks", { ...formState, user: user.id });
      alert("Произведение добавлено");
      dispatch(fetchUserArtworks(user));
    } catch (e) {
      alert(`Произошла ошибка ${e}`);
    }
  };

  return (
    <form className="form-submit-artwork">
      <label className="addArtwork">Добавить произведение</label>
      <div className="form-element">
        <label htmlFor="name">Название произведения:</label>
        <input
          onChange={(event) => {
            dispatch(
              changeFields({
                type: event.target.id as idsOfFormFields.TITLE,
                value: event.target.value,
              })
            );
          }}
          id="name"
          type="text"
          required
        ></input>
      </div>
      <div className="form-element">
        <label htmlFor="size">Размер:</label>
        <input
          onChange={(event) => {
            dispatch(
              changeFields({
                type: event.target.id as idsOfFormFields.SIZE,
                value: event.target.value,
              })
            );
          }}
          id="size"
          type="text"
          required
        ></input>
      </div>
      <div className="form-element">
        <label htmlFor="quality">Качество:</label>
        <select
          onChange={(event) => {
            dispatch(
              changeFields({
                type: "quality" as idsOfFormFields.QUALITY,
                value: event.target.value as typeOfQuality,
              })
            );
          }}
          id="quality"
          required
        >
          <option value="DEFAULT" disabled>
            ...
          </option>
          <option value="Отличное">Отличное</option>
          <option value="Хорошее">Хорошее</option>
        </select>
      </div>
      <div className="form-element">
        <label htmlFor="price">Цена: </label>
        <input
          className="price-input"
          id="price"
          type="number"
          required
          onChange={(event) => {
            dispatch(
              changeFields({
                type: event.target.id as idsOfFormFields.PRICE,
                value: Number(event.target.value),
              })
            );
          }}
        ></input>
      </div>
      <div className="form-element">
        <label htmlFor="style">Стиль:</label>
        <select
          id="style"
          required
          onChange={(event) => {
            dispatch(
              changeFields({
                type: event.target.id as idsOfFormFields.STYLE,
                value: Number(event.target.value) as typeOfStyles,
              })
            );
          }}
        >
          <option value="DEFAULT" disabled>
            ...
          </option>
          <option value={typeOfStyles.ABSTRACT}>Абстрактный</option>
          <option value={typeOfStyles.POP}>Поп-арт</option>
          <option value={typeOfStyles.STREET}>Уличный</option>
          <option value={typeOfStyles.EMPRESS}>Импрессионизм</option>
          <option value={typeOfStyles.CONCEPT}>Концептуальное</option>
        </select>
      </div>
      <div className="form-element">
        <label htmlFor="typeOfWork">Тип работы:</label>
        <select
          id="typeOfWork"
          required
          onChange={(event) => {
            dispatch(
              changeFields({
                type: event.target.id as idsOfFormFields.WORKTYPE,
                value: Number(event.target.value) as typeOfWork,
              })
            );
          }}
        >
          <option value="DEFAULT" disabled>
            ...
          </option>
          <option value={typeOfWork.PICTURE}>Картина</option>
          <option value={typeOfWork.SCULPTURE}>Скульптура</option>
          <option value={typeOfWork.PHOTO}>Фотография</option>
          <option value={typeOfWork.DRAW}>Рисунок</option>
        </select>
      </div>
      <div className="form-element">
        <label htmlFor="url">URL:</label>
        <input
          onChange={(event) => {
            dispatch(
              changeFields({
                type: event.target.id as idsOfFormFields.URL,
                value: event.target.value,
              })
            );
          }}
          id="url"
          type="text"
          required
        ></input>
      </div>
      <button onClick={(event) => postNewArtwork(event)} className="submit-btn">
        Опубликовать
      </button>
    </form>
  );
};

export default NewArtwork;

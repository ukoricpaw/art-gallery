import React, { FC, useEffect, ChangeEvent } from "react";
import styles from "../../styles/checkbox.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addFilter, removeFilter } from "../../store/reducers/FilterSlice";
import { ActionFilterType } from "../../store/reducers/FilterSlice";

interface CheckBoxInterface {
  requestFunction: () => void;
}

const Checkbox: FC<CheckBoxInterface> = React.memo(({ requestFunction }) => {
  const dispatch = useAppDispatch();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) as ActionFilterType;
    e.target.checked
      ? dispatch(addFilter(value))
      : dispatch(removeFilter(value));
  };

  return (
    <div className={styles.checkBOX}>
      <h1>Стили</h1>
      <div className={styles.checkboxWrapper}>
        <label>Абстрактный</label>
        <input
          value={1}
          onChange={(event) => {
            handleClick(event);
          }}
          className={styles.checkbox}
          type="checkbox"
          checked={useAppSelector((state) => state.FilterReducer[1])}
        />
      </div>
      <div className={styles.checkboxWrapper}>
        <label>Поп-арт</label>
        <input
          value={2}
          onChange={(event) => {
            handleClick(event);
          }}
          className={styles.checkbox}
          type="checkbox"
          checked={useAppSelector((state) => state.FilterReducer[2])}
        />
      </div>

      <div className={styles.checkboxWrapper}>
        <label>Уличный</label>
        <input
          value={3}
          onChange={(event) => {
            handleClick(event);
          }}
          className={styles.checkbox}
          type="checkbox"
          checked={useAppSelector((state) => state.FilterReducer[3])}
        />
      </div>
      <div className={styles.checkboxWrapper}>
        <label>Импрессионизм</label>
        <input
          value={4}
          onChange={(event) => {
            handleClick(event);
          }}
          className={styles.checkbox}
          type="checkbox"
          checked={useAppSelector((state) => state.FilterReducer[4])}
        />
      </div>
      <div className={styles.checkboxWrapper}>
        <label>Концептуальное</label>
        <input
          value={5}
          onChange={(event) => {
            handleClick(event);
          }}
          className={styles.checkbox}
          type="checkbox"
          checked={useAppSelector((state) => state.FilterReducer[5])}
        />
      </div>
    </div>
  );
});

export default Checkbox;

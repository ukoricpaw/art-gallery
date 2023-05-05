import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum typeOfStyles {
  ABSTRACT = 1,
  POP = 2,
  STREET = 3,
  EMPRESS = 4,
  CONCEPT = 5,
}

export enum typeOfWork {
  PICTURE = 1,
  SCULPTURE = 2,
  PHOTO = 3,
  DRAW = 4,
}

export enum idsOfFormFields {
  TITLE = "name",
  SIZE = "size",
  QUALITY = "quality",
  PRICE = "price",
  STYLE = "style",
  WORKTYPE = "typeOfWork",
  USER = "user",
  URL = "url",
}

export type typeOfQuality = "Отличное" | "Хорошее";

interface TitleType {
  type: idsOfFormFields.TITLE;
  value: string;
}

interface SizeType {
  type: idsOfFormFields.SIZE;
  value: string;
}

interface QualityType {
  type: idsOfFormFields.QUALITY;
  value: typeOfQuality;
}
interface PriceType {
  type: idsOfFormFields.PRICE;
  value: number;
}
interface StyleType {
  type: idsOfFormFields.STYLE;
  value: typeOfStyles;
}

interface WorkType {
  type: idsOfFormFields.WORKTYPE;
  value: typeOfWork;
}
interface UserType {
  type: idsOfFormFields.USER;
  value: number;
}

interface UrlType {
  type: idsOfFormFields.URL;
  value: string;
}

type FormState = Record<idsOfFormFields, string | number>;

const initialState: FormState = {
  name: "",
  size: "",
  quality: "Отличное",
  price: 0,
  style: typeOfStyles.ABSTRACT,
  typeOfWork: typeOfWork.PICTURE,
  user: 0,
  url: "",
};

type ActionTypes =
  | TitleType
  | SizeType
  | QualityType
  | PriceType
  | StyleType
  | WorkType
  | UserType
  | UrlType;

const FormSlice = createSlice({
  name: "FormSlice",
  initialState,
  reducers: {
    changeFields(state, action: PayloadAction<ActionTypes>) {
      state[action.payload.type] = action.payload.value;
    },
  },
});

export const { changeFields } = FormSlice.actions;

export default FormSlice.reducer;

export interface PresentationType {
  imageUrl: string,
  reverse: boolean,
  title: string,
  shortDesc: string,
  url: string
}

export const defaultPresentationType: PresentationType = {
  imageUrl: "",
  reverse: false,
  title: "",
  shortDesc: "",
  url: ""
};

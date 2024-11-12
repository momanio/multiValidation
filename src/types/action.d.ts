export declare type Action =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "form-value"; name: string; fieldValue: any }
  | { type: "form-error"; name: string; error: string };

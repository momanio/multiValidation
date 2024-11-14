export declare type Action =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "form-value"; name: string; fieldValue: string }
  | { type: "form-error"; name: string; error: string };

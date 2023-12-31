import type { RichTextCustomElement } from "payload/types";

// export const withLargeBody: RichTextCustomElement["plugins"][0] = (
//   incomingEditor
// ) => {
export const withLargeBody = (incomingEditor: any) => {
  const editor = incomingEditor;

  //// @ts-expect-error
  const { shouldBreakOutOnEnter } = editor;

  // @ts-expect-error
  editor.shouldBreakOutOnEnter = (element) =>
    element.type === "large-body" ? true : shouldBreakOutOnEnter(element);

  return editor;
};

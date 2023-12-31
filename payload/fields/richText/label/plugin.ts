import type { RichTextCustomElement } from "payload/types"


// const withLargeBody: RichTextCustomElement["plugins"][0] = incomingEditor => {
const withLargeBody = (incomingEditor: any) => {
  const editor = incomingEditor

  //// @ts-expect-error
  const { shouldBreakOutOnEnter } = editor

  // @ts-expect-error
  editor.shouldBreakOutOnEnter = element =>
    element.type === "label" ? true : shouldBreakOutOnEnter(element)

  return editor
}

export default withLargeBody

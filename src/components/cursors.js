const cursorMap = new Map([
  ['1000', 'ew-resize'],
  ['0010', 'ew-resize'],
  ['0100', 'ns-resize'],
  ['0001', 'ns-resize'],
  ['1100', 'nw-resize'],
  ['0110', 'ne-resize'],
  ['0011', 'se-resize'],
  ['1001', 'sw-resize'],
])

export const cursors = Array.from(cursorMap).map(([name, cursor]) => ({
  name,
  key: name,
  cursor,
  mask: name.split('').map(parseFloat),
}))

export const getCursor = mask => cursorMap.get(mask.join(''))

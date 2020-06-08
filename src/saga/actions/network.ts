export const Type = {
  LOAD: 'network/LOAD',
  UNLOAD: 'network/UNLOAD',
} as const

export type ActionType = ReturnType<typeof loadAction> | ReturnType<typeof unloadAction>

const loadAction = () => ({
  type: Type.LOAD,
})

const unloadAction = () => ({
  type: Type.UNLOAD,
})

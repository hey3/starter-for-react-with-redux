export const Type = {
  LOAD: 'network/LOAD',
  UNLOAD: 'network/UNLOAD',
} as const

export type ActionType = ReturnType<typeof loadAction> | ReturnType<typeof unloadAction>

export const loadAction = () =>
  ({
    type: Type.LOAD,
  } as const)

export const unloadAction = () =>
  ({
    type: Type.UNLOAD,
  } as const)

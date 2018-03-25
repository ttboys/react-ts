const status = (state: string) => (val: string) => `${val}_${state}`

export const success = status('SUCCESS')
export const error = status('ERROR')
export const request = status('REQUEST')

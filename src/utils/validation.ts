export const validateString = (value: string): string => {
  return value.replace(/\d/g, '');
}

export const validateNumber = (value: string) => {
  return Number(value.replace(/[^0-9]/g, ''))
}
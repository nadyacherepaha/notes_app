export const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const getTags = new RegExp(/#\w+/g);
export const uniqueValue = (arr: RegExpMatchArray | null) => {
  return Array.from(new Set(arr));
}

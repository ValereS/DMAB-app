export class ArrayUtil {
  static getOccurences(array: string[]): Map<string, number> {
    const map = new Map<string, number>();
    array.forEach((element, key) => {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    });
    return map;
  }
}

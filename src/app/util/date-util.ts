export class DateUtil {
  public static getAge(birthDate: Date): number {
    const now = new Date().getTime();
    const bDay = new Date(birthDate).getTime();
    return new Date(now - bDay).getUTCFullYear() - 1970;
  }
}

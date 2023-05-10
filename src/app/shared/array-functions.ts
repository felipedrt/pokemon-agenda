export class ArrayFunctions {

  /**
     * Function used to sort and array.
     * @param obj1 First object or field used to compare with the another object.
     * @param obj2 Second object or field used to compare with the first object.
     * @param fieldToSort Field name used to comparisson.
     * @returns An array sorted by the field passed in fieldSort param.
     */
  public static orderBy(obj1: any, obj2: any, fieldToSort: string) {
    if (obj1[fieldToSort] < obj2[fieldToSort])
      return -1;
    if (obj1[fieldToSort] > obj2[fieldToSort])
      return 1;
    return 0;
  }
}

/**
 * link: https://nehalist.io/working-with-models-in-angular/
 */
export interface Deserializable<T> {
    deserialize(input: any): T;
  }

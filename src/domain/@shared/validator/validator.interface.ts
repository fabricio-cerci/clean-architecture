export default interface ValidatiorInterface<T> {
  validate(entity: T): void;
}
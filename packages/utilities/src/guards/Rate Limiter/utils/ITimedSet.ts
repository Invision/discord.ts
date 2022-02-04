/**
 * A set like object that evicts entries from the set after they have been in there for the set time
 */
export interface ITimedSet<T> extends Set<T> {
  /**
   * checks if this set is empty
   */
  isEmpty(): boolean;

  /**
   * Refresh the timeout fot this element (resets the timer for this items eviction
   * @param key
   */
  refresh(key: T): boolean;
}
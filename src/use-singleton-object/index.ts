/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { UsableSingletonClassObject } from "./types";

type Setters = {
    [setter: string]: (...args: any[]) => void;
};

type Getters = {
    [getter: string]: (...args: any[]) => any;
};

/**
 * TODO:
 *
 * Implement this React hook to allow a singleton class object to be used in a React app such that
 * each getter and setter that the object provides can be used natively and concurrently from
 * multiple React components that consume this hook.
 *
 * To do this, you'll probably want to persist the singleton object, globally, in sessionStorage or localStorage.
 *
 * The goal: allow the consumer to get and set values as if interacting with the singleton object directly.
 *
 * Guidelines:
 * - After calling set.anything, the object should be re-serialized and stored in sessionStorage/localStorage.
 * - Calling get.anything should return the most up to date value no matter which instance of the hook last set.
 * Other than that, the implementation is mostly up to you. Obviously, the more you consider and the closer to the desired functionality, the better.
 *
 * Optional things to consider:
 * - Handling multiple concurrent writes: When writing to the object, implement a mutex lock & queue (probably preserved in session/localStorage) to prevent multiple concurrent writes, without blocking reads, and without throwing errors.
 * - Clear error handling (define a new errors.ts file if needed with custom errors). Enforce invariants.
 * - Performance: Optimize for reads, writes, and re-renders.
 * - Testing: Write tests for your hook (https://react-hooks-testing-library.com/), (https://testing-library.com/docs/react-testing-library/intro/).
 *
 * DISCLAIMER:
 * - I'm actually not 100% convinced this is possible. Maybe just 99%.
 * - But we'll evaluate the code you write, not just the result.
 *
 * @param instance An instance of a class that extends UsableSingletonClassObject.
 * @param initialize If true, initialize the global cache with the provided instance object.
 *                   NOTE TO CONSUMERS: Only one instance of the hook should be initialized with true.
 * @param subscribe If true, subscribe to changes in the `instance` object and overwrite the globally cached object with new values. If false, initialization only happens once.
 *                  NOTE TO CONSUMERS: Can only be set to true if `initialize` is also true.
 */
export const useSingletonClassObject = <T extends UsableSingletonClassObject>(
    instance: T,
    initialize?: boolean,
    subscribe?: boolean
): {
    set: Setters;
    get: Getters;
} => {
    // TODO: Implement this hook
    return {} as any;
};

/* eslint-disable @typescript-eslint/no-explicit-any */

// TODO: extend upon this, if needed!

/**
 * Represents a class that can be used as a singleton object and consumed by React.
 */
export abstract class UsableSingletonClassObject {
    /** React hook can use this as a key in global cache. This needs to be a unique name for this class across all subclasses. */
    abstract getClassName(): string;

    /** Child class should implement to return all its public setters by their names. */
    abstract getSettersNames(): string[];

    /** Child class should implement to return all its public getters by their names. */
    abstract getGettersNames(): string[];

    /** Helpful for storing in local or session storage */
    abstract toSerialization(): string;

    /** Helpful for hydrating from local or session storage */
    abstract fromSerialization(
        serialization: string
    ): UsableSingletonClassObject;

    /** All properties in this class are referenced by string keys. */
    [key: string]: any;
}

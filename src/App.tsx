import "./App.css";
import { useSingletonClassObject } from "./use-singleton-object";
import { UsableSingletonClassObject } from "./use-singleton-object/types";

// TODO: you can extend this React app with a more convoluted example to
// really test the limits of your implementation.
// For now, it's just a simple one-page counter.

export default function App() {
    const { set, get } = useSingletonClassObject(
        new ExampleGlobalAppState(0),
        true
    );

    return (
        <>
            <h1>Current count is {get.getCount()}</h1>
            <div className='card'>
                <button onClick={set.increment}>Increment</button>
            </div>
            <p className='read-the-docs'>
                Visit src/use-singleton-object/ to get started.
            </p>
        </>
    );
}

class ExampleGlobalAppState extends UsableSingletonClassObject {
    private count;

    constructor(initialCount: number = 0) {
        super();
        this.count = initialCount;
    }

    public increment() {
        this.count++;
    }

    public setCount(count: number) {
        this.count = count;
    }

    public getCount() {
        return this.count;
    }

    override getClassName() {
        return "ExampleGlobalAppState";
    }

    override getSettersNames() {
        return ["setCount", "increment"];
    }

    override getGettersNames() {
        return ["getCount"];
    }

    override toSerialization() {
        return JSON.stringify(this);
    }

    override fromSerialization(serialization: string) {
        const { count } = JSON.parse(serialization);
        return new ExampleGlobalAppState(count);
    }
}

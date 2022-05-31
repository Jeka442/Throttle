# useThrottle

Throttling or sometimes is also called throttle function is a practice we can use to improve the performance of our website.\
The throttle function will behave the same as any function except it will set a timer after execution.\
 and if we try to execute the function again before the timer stops it won't be executed.


## Installation

Import this code to your project and start to use

## Simple usage example

```typescript
export const ExmapleComponent = () => {
  const [state, setState] = useState(0);
  const MyFunction = () => {
    //do some stuff
    setState((prev) => prev + 1);
  };

  const ThrottlingFunction = useCallback(useThrottle(MyFunction, 250), []);

  return (
    <div>
      <button onClick={ThrottlingFunction}>click</button>
      <p>{`hello my state is: ${state}`}</p>
    </div>
  );
};
```
in this example we also using react build in function "useCallback" to prevent the "ThrottlingFunction" to re-define it self so it won't lose the cool down effect (throttle)



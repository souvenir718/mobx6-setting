import { observer } from 'mobx-react';
import store from './store';

const App = observer(() => {
    const { count1Store, count2Store, countObject } = store;

    return (
        <div>
            <h1> number : {count1Store.number}</h1>
            <button onClick={() => count1Store.increase()}>plus</button>
            <button onClick={() => count1Store.decrease()}>minus</button>

            <h1>num : {countObject.num}</h1>
            <button onClick={() => countObject.increase()}>increment</button>
        </div>
    );
});

export default App;

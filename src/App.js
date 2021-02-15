import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import store from './store';

const App = observer(() => {
    const { count1Store, count2Store, countObject, doubleClassAuto } = store;
    autorun(() => {
        if (doubleClassAuto.double) {
            console.log('Double' + doubleClassAuto.double);
        }
        if (doubleClassAuto.double === 8) {
            console.log('만약 value가 8이라면 0으로 초기화');
            doubleClassAuto.value = 0;
        }
    });

    return (
        <div>
            <h1> number : {count1Store.number}</h1>
            <button onClick={() => count1Store.increase()}>plus</button>
            <button onClick={() => count1Store.decrease()}>minus</button>

            <h1>num : {countObject.num}</h1>
            <button onClick={() => countObject.increase()}>increment</button>

            <h1>double number : {doubleClassAuto.value}</h1>
            <button onClick={() => doubleClassAuto.increment()}>double increment</button>
        </div>
    );
});

export default App;

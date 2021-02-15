import { action, makeObservable, observable } from 'mobx';

class Count1 {
    number = 0;

    constructor() {
        makeObservable(this, {
            number: observable,
            increase: action,
            decrease: action,
        });
    }

    increase = () => {
        this.number++;
    };
    decrease = () => {
        this.number--;
    };
}

const count1Store = new Count1();
export default count1Store;

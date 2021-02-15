import { makeAutoObservable } from 'mobx';

class Count2 {
    number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increase = () => {
        this.number++;
    };
    decrease = () => {
        this.number--;
    };
}

const count2Store = new Count2();
export default count2Store;

import { makeAutoObservable } from 'mobx';

class Doubler {
    value;

    constructor(value) {
        makeAutoObservable(this);
        // makeAutoObservable이 다른 action, computed를 자동으로 선언
        this.value = value;
    }

    get double() {
        return this.value * 2;
    }

    increment() {
        this.value++;
    }
}

const doubleClassAuto = new Doubler(1);
export default doubleClassAuto;

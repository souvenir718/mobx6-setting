# MobX6 Setting



## MobX 핵심개념

**MobX**는 `observable`을 사용하면 자동으로 observable하게 만들 수 있다. 가장 중요한 **어노테이션**은 아래 세가지다.

- `observable` : 추적 가능한 state 정의
- `action` : state를 변경하는 메소드
- `computed` : state와 캐시로부터 새로운 결과를 반환



### observable

**observable**은 `makeObservable` , `makeAutoObservable` 그리고 `observable` 이렇게 세가지가 있고, 모두 추적 가능한 상태의 **state**로 만들어준다.

`makeObservable`은 주로 class의 this와 많이 사용된다.

`makeAutoObservable`은 `makeObservable`와 거의 비슷하지만, class에서 super나 subclassed가 있을 경우 사용할 수 없다.

`make(Auto)Observable`와 `observable`의 가장 큰 차이점은 전자는 들어온 인자로 **object**를 바로 변경하지만, 후자는 클론을 하고 **observable**하게 만드는 점이다. 



### action

**action**은 **state**를 변경하는 것을 뜻한다. `makeObservable`을 사용하면 **action**을 따로 작성해야 하지만, `makeAutoObservable`은 이 부분을 대신해준다.



### computed

**computed values(계산된 값)**는 다른 `observable`들에서 어떠한 정보를 도출하는데 사용할 수 있다.



**MobX6에서는 decorators(@action, @observable..)들이 deprecated 되었다.**
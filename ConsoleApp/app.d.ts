declare class Animal {
    name: string;
    constructor(theName: string);
    move(distanceInMeters?: number): void;
}
declare class Snake extends Animal {
    constructor(name: string);
    move(distanceInMeters?: number): void;
}
declare class Horse extends Animal {
    constructor(name: string);
    move(distanceInMeters?: number): void;
}
declare let sam: Snake;
declare let tom: Animal;

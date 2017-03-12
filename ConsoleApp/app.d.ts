declare class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
declare class JJJ implements Point3d {
    private zzz;
    x: number;
    y: number;
    z: number;
    constructor(zzz: number);
}

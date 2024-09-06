import { Sum,Minus } from "../Sum";

test ('sum function should caculate the sum of two numbers',()=>{
    const result =Sum(3,4);
    expect(result).toBe(7)
})
test("should be function should caculate then minus of number",()=>{
    const minus = Minus(4,4);
    expect(minus).toBe(0);

})
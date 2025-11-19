
/**
* Özel işlevler ve bloklar tanımlamak için bu dosyayı kullanın.
* https://makecode.microbit.org/blocks/custom adresinden daha fazla bilgi edinin
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=##6c008a icon="[]"
namespace bliks {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function plick(x: number, y:number, ms:number): void{
        basic.forever(function() {
            led.toggle(x, y)
            basic.pause(ms)
        })
}}
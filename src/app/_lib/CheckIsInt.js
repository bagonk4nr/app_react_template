
export default class CheckIsInt {

    isInt = (value) => {
        // tslint:disable-next-line:radix
        if ( parseInt(value) === 1) { return 1; } else { return 0; }
    }
}

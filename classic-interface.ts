
export interface Classic {

    repeat(count:number):string;
}

export class MaClass implements Classic {

    repeat(count: number): string {
        return 'bloup';
    }

    methode() {
        console.log('bloup');
    }
}

let instance:Classic = new MaClass();
instance.repeat(2);

interface Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: undefined;
    fulfilled: boolean;
}

class DataClass implements Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: undefined;
    fulfilled: false;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new DataClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);

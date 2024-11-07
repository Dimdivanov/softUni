function strLength(str1: string, str2: string, str3: string) {
    const length = str1.length + str2.length + str3.length;
    console.log(length);
    console.log(Math.floor(length / 3));
}
strLength('chocolate', 'ice cream', 'cake');

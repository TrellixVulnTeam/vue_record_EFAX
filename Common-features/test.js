var foo = '123';
function print () {
    var foo = '456';
    this.foo = '789';
    console.log(foo);
}
print()
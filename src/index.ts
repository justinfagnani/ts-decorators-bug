const observe = (proto: Object, name: PropertyKey) => {
  const key = Symbol();
  Object.defineProperty(proto, name, {
    get() {
      return this[key];
    },
    set(v: unknown) {
      this[key] = v;
      this.onChange?.(name, v);
    }
  });
};


class A {
  @observe
  foo = 'abc';

  onChange(name: string, v: unknown) {
    console.log(`${name} changed to ${v}`);
  }
}

const a = new A();
console.log('This should print \'foo changed to "x"\':');
a.foo = 'x'

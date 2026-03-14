function oldsyntex(gmail, password) {
  this._gmail = gmail;
  this._password = password

  Object.defineProperty(this, "gmail", {
    get: function () {
      return this._gmail="asdfghjkertyio";
    },
    set: function (value) {
      this._gmail = value;
    },
  });
}
const chai = new oldsyntex("dheeraj", 12354689);

console.log(chai.gmail);

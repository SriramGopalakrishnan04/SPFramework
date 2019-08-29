/// <reference types="mocha" />
import {assert, expect} from 'chai';

describe("webPartName", () => {
  it("should do something", () => {
    assert.ok(true, 'should be true');
  });
  it("should add numbers Sync fluent", () => {
    const result:number = 1 + 3;
    expect(result).to.eq(4); // fluent API
  });
});
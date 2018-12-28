"use strict";

const generateSlug = require("../server/utils/slugify.js");
const assert = require("assert");

const MockUser = {
  slugs: ["john-jonhson-jr", "john-jonhson-jr-1", "john"],
  findOne({ slug }) {
    if (this.slugs.includes(slug)) {
      return Promise.resolve({ id: "id" });
    }

    return Promise.resolve(null);
  }
};

describe("slugify", function() {
  it("no duplication", function() {
    assert(1);

    return generateSlug(MockUser, "John Jonhson.").then(slug => {
      assert.equal(slug, "john-jonhson");
    });
  });

  it("one duplication", function() {
    assert(1);

    return generateSlug(MockUser, "John.").then(slug => {
      assert.equal(slug, "john-1");
    });
  });

  it("multiple duplications", function() {
    assert(1);

    return generateSlug(MockUser, "John Jonhson Jr.").then(slug => {
      assert.equal(slug, "john-jonhson-jr-2");
    });
  });
});

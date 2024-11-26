import assert from 'assert'
import CyrillicToTranslit from '../CyrillicToTranslit.js'

describe("mn", () => {
  it("test ө ү й", () => {
    const c2t = new CyrillicToTranslit({ preset: "mn" });

    assert.equal(c2t.transform("хөөрөг"), "khoorog");
    assert.equal(c2t.transform("гуталын"), "gutalyn");
    assert.equal(c2t.transform("үйлдвэр"), "uildver");
    assert.equal(c2t.transform("пүрэв"), "purev");
  });
});

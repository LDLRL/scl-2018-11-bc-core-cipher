describe('cipher', () => {  
  it('debería ser un objeto', () => {

  assert.equal(typeof cipher, 'object');

});  

describe('cipher.encode', () => {    
  it('debería ser una función', () => {
    assert.equal(typeof cipher.encode, 'function');

  });   
  
  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', ()=> {      
    assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
  }  
  );  
  
  describe('cipher.decode', () => {    
    it('debería ser una función', () => {
    assert.equal(typeof cipher.decode, 'function');
  });    
  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', ()=> {      
    assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");  });


    describe('cipher.decode lowerCase', () => {    
      it('debería ser  lowerCase', () => {
      assert.equal(typeof cipher.decode, 'function');
    });    
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', ()=> {      
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33), "abcdefghijklmnopqrstuvwxyz" );  });
    
    describe('cipher.decode lowerCase', () => {    
      it('debería ser  lowerCase', () => {
      assert.equal(typeof cipher.encode, 'function');
    });    
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', ()=> {      
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg");  });

})
})  
})
})
})
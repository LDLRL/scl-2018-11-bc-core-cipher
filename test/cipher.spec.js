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
    it('debería decodificar en lowerCase', () => {
    assert.equal(typeof cipher.decode, 'function');
  });    
  it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', ()=> {      
    assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33), "abcdefghijklmnopqrstuvwxyz" );  });
  
  describe('cipher.encode lowerCase', () => {    
    it('debería codificar en lowerCase', () => {
    assert.equal(typeof cipher.encode, 'function');
  });    
  it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', ()=> {      
    assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg"); 
  });

  describe('cipher.encode negativo', () => {    
    it('debería codificar con numero negativo al usar minúsculas', () => {
    assert.equal(typeof cipher.encode, 'function');
  });    
  it('debería retornar "xyzabcdefghijklmnopqrstuvw" para "abcdefghijklmnopqrstuvwxyz" con offest -3', ()=> {      
    assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", -3), "xyzabcdefghijklmnopqrstuvw");  });
    

  describe('cipher.encode negativo', () => {    
    it('debería codificar con numero negativo al usar mayúsculas', () => {
    assert.equal(typeof cipher.encode, 'function');
  });    
  it('debería retornar "XYZABCDEFGHIJKLMNOPQRSTUVW" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest -3', ()=> {      
    assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -3), "XYZABCDEFGHIJKLMNOPQRSTUVW");  });
})
})
})
})  
})
})
})
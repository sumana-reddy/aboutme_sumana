var word_Length = (x) => {
    console.log(x);
    return x.length }
  
  var word_Length = new Vue({
      el: '#word_Length',
      data: {
        word : 'Sumana Reddy'
        },
      computed: {
          length : function () {
            const i = this.word
            return `The Length of a given name is ${word_Length(i)}.`
              
          }
        }
      })
    

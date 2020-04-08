const Ray = () => {
  const myRay = {
    length:0,
    
    push:function(param1){
      this.length = this.length +1  
      this[this.length]= param1
      
      },

      pop:function(param1){

        this.length = this.length -1  
        for (let i = this.length-1;i > 0; i--){
          this[i] = this[i-1]
        }
        this[this.length]= param1
        
        
        },

        unshift: function(value){
          this.length = this.length +1
          for (let i = this.length-1;i > 0; i--){
            this[i] = this[i-1]
          }
          this[0]=value
        },
        shift: function(){
          const deleted = this[0]
          for (let i = 0;i < this.length; i++){
            this[i] = this[i+1]
          }
    
          delete this[this.length-1]
          this.length = this.length - 1
          return deleted
        },


  }
  
  return myRay

}
module.exports = {
  Ray,
}
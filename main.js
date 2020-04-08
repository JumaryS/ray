const Ray = () => {
  const myRay = {
    length:0,
    
    push:function(param1){
      this.length = this.length +1  
      this[this.length]= param1
      
      },

      pop:function(param1){
        this.length = this.length -1  
        this[this.length]= param1
        
        },

        unshift:function(param1){
          this.length = this.length +1  
          this[this.length]= param1
          this[0]= param1
          this[param1] 

        
          
          },
          shift:function(param1){
            this.length = this.length -1  
            this[this.length]= param1
            
            }


  }
  
  return myRay

}
module.exports = {
  Ray,
}
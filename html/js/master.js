var Body = {
  textSize : function(size){
    //document.querySelector('body').style.color=color;
    $('body').css('fontSize', size);
  },
};



function sizeup(self){
  if(self.value == 'text-large'){
    Body.textSize('large');
    self.value = 'text-medium';
  } else {
    Body.textSize('medium');
    self.value = 'text-large';
  }
}

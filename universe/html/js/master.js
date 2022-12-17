var Body = {
  textSize : function(size){
    //document.querySelector('body').style.color=color;
    $('body').css('fontSize', size);
  },
};



function sizeup(self){
  if(self.value == 'text-medium'){
    Body.textSize('large');
    self.value = 'text-large';
  } else {
    Body.textSize('medium');
    self.value = 'text-medium';
  }
}

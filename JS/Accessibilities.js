function accessability() {
    var x = document.getElementById("accessButton");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
    
    var y = document.getElementById("AP");
    if (y.style.display === "block") {
    y.style.display = "none";
    } else {
    y.style.display = "block";
    }
}

function closeButton() {
    var x = document.getElementById("AP");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }

    var y = document.getElementById("accessButton");
    if (y.style.display === "block") {
    y.style.display = "none";
    } else {
    y.style.display = "block";
    }
}

function accordion(clicked) {
       
        if (clicked == 'idsp')
        {
            var y = document.getElementById("AFSpbtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
        else if (clicked == 'idd')
        {
            var y = document.getElementById("ADbtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
        else if (clicked == 'idfsi')
        {
            var y = document.getElementById("AFSibtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
        else if (clicked == 'idlh')
        {
            var y = document.getElementById("LHbtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
}

function increaseFontSize() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedFontSize = window.getComputedStyle(elements[i]).fontSize;
      
      var newSize = parseFloat(computedFontSize) * 1.2;

      elements[i].style.fontSize = newSize + 'px';
    }
  } 

function decreaseFontSize() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      
      var computedFontSize = window.getComputedStyle(elements[i]).fontSize;
      
      
      var newSize = parseFloat(computedFontSize) * 0.8;
      
      elements[i].style.fontSize = newSize + 'px';
    }
  } 

function increaseLetterSpacing() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedLetterSpacing = window.getComputedStyle(elements[i]).letterSpacing;
      
      if (computedLetterSpacing !== 'normal') {
        var newSize = parseFloat(computedLetterSpacing) + 1; 
        elements[i].style.letterSpacing = newSize + 'px';
      } else {
        elements[i].style.letterSpacing = '1px';
      }
    }
  }

function decreaseLetterSpacing() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedLetterSpacing = window.getComputedStyle(elements[i]).letterSpacing;
      
      if (computedLetterSpacing !== 'normal') {
        var newSize = parseFloat(computedLetterSpacing) - 1; 
        elements[i].style.letterSpacing = newSize + 'px';
      } else {
        elements[i].style.letterSpacing = '1px';
      }
    }
  }

function decreaseLineHeight() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedLineHeight = window.getComputedStyle(elements[i]).lineHeight;
      
      if (computedLineHeight !== 'normal') {
        var newSize = parseFloat(computedLineHeight) - 0.001;
        elements[i].style.lineHeight = newSize;
      } else {
        elements[i].style.lineHeight = '0';
      }
    }
  }

function changeFontStyle1() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = "Verdana, serif";
    }
  }

function changeFontStyle2() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = "Dyslexie, serif";
    }
  }
  
function changeFontStyle3() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = "Helvetica, serif";
    }
  }
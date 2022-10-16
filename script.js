function showItemsOne(){
    var ad = document.getElementById("ad")
    var today = document.getElementById("today")
    var toggleitems1 = document.getElementById("toggleitems1")
    var toggleitems2 = document.getElementById("toggleitems2")
  
    ad.style.background = "#ffc107"
    today.style.background = "#f8f9fa"
    today.style.color =  "black"
    ad.style.color =  "white"
    toggleitems1.style.display = "block"
    toggleitems2.style.display = "none"
  
  }
  
  
  function showItemsTwo(){
    var ad = document.getElementById("ad")
    var today = document.getElementById("today")
    var toggleitems1 = document.getElementById("toggleitems1")
    var toggleitems2 = document.getElementById("toggleitems2")
  
    today.style.background = "#ffc107 "
    ad.style.background = "#f8f9fa"
    ad.style.color =  "black"
    today.style.color =  "white"
    toggleitems1.style.display = "none"
    toggleitems2.style.display = "block" 
  
  }
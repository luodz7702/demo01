function A(){
  $.post("/lord/login",{name:username,pwd:password},function(){
    alert("Hello World!");
  })
}
$(function (){
  setTimeout("A()",5000); //延迟1秒
})
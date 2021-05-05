function dis(val)
{
document.getElementById("calculator").value+=val
 }
function solve()
{
let x = document.getElementById("calculator").value
let y = eval(x)
document.getElementById("calculator").value = y
}
function clr()
{
document.getElementById("calculator").value = ""
}
function buttonPress()
{
    let roll = Math.floor(Math.random()*6)+1
    document.getElementById("one").src = `${roll}.png`
}
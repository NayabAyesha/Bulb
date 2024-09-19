let on_bulb = document.getElementById("on")
let off_bulb = document.getElementById("off")
const bulb_interaction = document.getElementById('bulb')


on_bulb.addEventListener("click",()=>
{
    bulb_interaction.src = 'ONBULB.jpeg'
})

off_bulb.addEventListener("click",()=>
    {
        bulb_interaction.src = 'OFFBULB.jpeg'
    })
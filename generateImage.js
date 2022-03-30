// The function generateImage() can draw pictures with a message (like a welcome) inside. 
// If you're ever using this, just change the image at "background" and the sizes at "const av" and the 
// text (size too) inside the main function.

// Declarations
const Canvas = require('canvas')
const Discord = require('discord.js')

// Constructing the img sizes and all
const background = 'https://i.imgur.com/zvWTUVu.jpg'

const dim = {
    heigth: 675,
    width: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}

// The main function
const generateImage = async(member) => {
    let username = member.user.username
    let discrim  = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size:av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.heigth)
    const ctx = canvas.getContext('2d')

    // Draw in the background
    const backImg = await Canvas.loadImage(background)
    ctx.drawImage(backImg, 0, 0)

    // Draw black tinted box
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.heigth - 2 * dim.margin)

    const avImg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avImg, av.x, av.y)
    ctx.restore()

    // Write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    // Draw in Welcome
    ctx.font = "50px Arial"
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

    // Draw in username
    ctx.font = "60px Arial"
    ctx.fillText(username + discrim, dim.width/2, dim.heigth - dim.margin - 125)

    // Draw in to the server
    ctx.font = "40px Arial"
    ctx.fillText("to the server", dim.width/2, dim.heigth - dim.margin - 50)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment 
}

module.exports = generateImage
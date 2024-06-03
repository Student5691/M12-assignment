class Jukebox {
    constructor(albums) {
        this._albums = []
    }
    addAlbum = function(album) {
        this._albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this._albums.length; i++) {
            if (this._albums[i]._played > max) {
                max = this._albums[i]._played
                fav = this._albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this._artist = artist
        this._title = title
        this._played = 0
    }
    play = function() {
        this._played += 1
    }
    display = function() {
        return `${this._artist} : ${this._title}. The album has been played ${this._played} times.`
    }
}

const jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

function albumToDropDown() {
    let menu = document.getElementById('albumList')
    let i = 0
    jbox._albums.forEach(album => {
        let newEntry = document.createElement('option')
        newEntry.text = `${album._title}, by ${album._artist}`
        newEntry.value = i
        i++
        menu.add(newEntry)
    })
}

albumToDropDown()
console.log(jbox._albums.length)

function playAlbum() {
    jbox._albums[document.getElementById('albumList').value].play()
}

function showFav() {
    document.getElementById('favoriteAlbum').innerHTML = `Your favorite album is ${jbox.favoriteAlbum()}`
}

function userAddAlbum() {
    let newArtist = document.getElementById('userArtist').value
    let newTitle = document.getElementById('userTitle').value
    jbox.addAlbum(new Album(newArtist, newTitle))

    let userEntry = document.createElement('option')
    userEntry.text = `${newTitle}, by ${newArtist}`
    userEntry.value = jbox._albums.length - 1
    document.getElementById('albumList').add(userEntry)
    
    document.getElementById('addNotification').innerHTML = `Added ${newTitle} by ${newArtist}!`
    newArtist = ''
    newTitle = ''
}
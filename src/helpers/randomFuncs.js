export const randomConsole = () => {

  const consoles = ["Atari 2600", "Nintendo Entertainment System", "Sega Master System", "Sega Genesis", "Neo Geo", "Game Boy", "Game Gear", "Super Nintendo", "Sega CD", "Panasonic 3DO", "Sega Saturn", "PlayStation", "Nintendo 64", "Game Boy Color", "Dreamcast"]

  return consoles[Math.floor(Math.random() * consoles.length)];
}

export const randomGenre = () => {

  const genres = ["Action", "Adventure", "Platformer", "Arcade", "RPG", "Fighting", "Sports", "Racing", "Puzzle", "Strategy"]

  return genres[Math.floor(Math.random() * genres.length)];
}

export const randomYear = () => {
  const years = ["1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999"]
  
  return years[Math.floor(Math.random() * years.length)]
}
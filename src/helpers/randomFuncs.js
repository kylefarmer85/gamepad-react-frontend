export const randomConsole = () => {

  const consoles = ["Nintendo Entertainment System", "Sega Genesis", "Game Boy", "Super Nintendo", "PlayStation", "Nintendo 64"]

  return consoles[Math.floor(Math.random() * consoles.length)];
}

export const randomGenre = () => {

  const genres = ["Action", "Adventure", "Platformer", "Arcade", "RPG", "Sports", "Racing", "Strategy"]

  return genres[Math.floor(Math.random() * genres.length)];
}

export const randomYear = () => {
  const years = ["1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "1991", "1992", "1993", "1994", "1995", "1996", "1997"]
  
  return years[Math.floor(Math.random() * years.length)]
}
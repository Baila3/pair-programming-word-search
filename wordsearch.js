const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) 
        return true
    }
    const verticalJoin = []
    for (let i = 0; i < letters[0].length; i++){
      let string = ""
      for( let y = 0; y < letters.length; y++){
        string = string.concat(letters[y][i])
      }
      verticalJoin.push(string)
      for (let t of verticalJoin){
     if (t.includes(word)){
     return true
     }
    }
    }
    return false
}

module.exports = wordSearch
// code from status.cafe with tweaks
console.log('status.cafe script loaded')
fetch("https://status.cafe/users/tc012/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status :sob: "
      console.log('No status')
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/tc012" target="_blank">' + r.author + '</a> ' + r.face + ' ' + r.timeAgo
    document.getElementById("statuscafe-content").innerHTML = r.content
    console.log('Sucessfully loaded status')
  })

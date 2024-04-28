function opentab(tabName) {
    var tabContents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.querySelector(`[onclick="opentab('${tabName}')"]`).classList.add("active");
}

function openmenu() {
    let sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}

function closemenu() {
    let sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx82FTbCJ-ubUHjA40kT6Ek9EK4LjCHDuJKqMbEPeQwQUK41CsiqVuJAaVwlKeSQmw7yw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

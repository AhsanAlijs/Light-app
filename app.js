const main = document.querySelector(".light");
const body = document.querySelector('body')
const togal = document.querySelector('#togal')
togal.innerHTML = `<p>Light Mode</p>`
togal.addEventListener('click', function () {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "White";
        body.style.color = "black"
        togal.innerHTML = `<p>Light Mode</p>`
    }
    else {
        body.style.backgroundColor = "black"
        body.style.color = "white"
        togal.innerHTML = `<p>Dark Mode</p>`

    }

})
main.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'IMG') {
        // Check if the mouse is over an image inside the '.light' element
        main.innerHTML = `<img src="./onn.PNG" class="images" alt="Light is off"><br>
                        <h2 style="color:green;">Light is Onn</h2>
        `;
    } else {
        // The mouse is over the '.light' element, but not the image
        main.innerHTML = `<img src="./oF.png" class="images1" alt="Light is on"><br>
        <h2 style="color:red;">Light is Off</h2>`;
    }
});

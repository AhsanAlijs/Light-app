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
        main.innerHTML = `
        <img src="./onn.png" alt="light" class="images1"><br>
                        <h2 style="color:green;">Light is Onn</h2>
        `;
    } else {
        // The mouse is over the '.light' element, but not the image
        main.innerHTML = `<img src="./OF.png" alt="light" class="images"><br>
        <h2 style="color:red;">Light is Off</h2>`;
    }
});

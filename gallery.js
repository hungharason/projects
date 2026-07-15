function upDate(previewPic) {
    console.log("Event triggered: Updating display for", previewPic.alt);
    
    const displayDiv = document.getElementById("gallery-display");
    
    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
    displayDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("Event triggered: Resetting display");
    
    const displayDiv = document.getElementById("gallery-display");
    
    displayDiv.style.backgroundImage = "none";
    displayDiv.textContent = "Hover or Tab over an image below to display it here.";
}

function addTabfocus() {
    console.log("Window loaded: initializing gallery attributes."); // Step 9a
    
    const images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        
        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("mouseover", function() { upDate(this); });
        images[i].addEventListener("mouseleave", unDo);

        images[i].addEventListener("focus", function() { upDate(this); });
        images[i].addEventListener("blur", unDo);
    }
}

window.onload = addTabfocus;
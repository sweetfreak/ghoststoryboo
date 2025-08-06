let currentNodeID = "mainMenu";
//            console.log(currentNodeID)

let tappedChoice = null;
 let saveLoadButtonsEl = document.getElementById('saveLoadButtons')

function handleChoiceTap(choice) {
    //console.log(choice)
    tappedChoice = choice.text;
    const buttons = document.querySelectorAll('.choice-button');
    const imageElement = document.getElementById('image');
    const imageContainer = document.getElementById('image-container');
    const textElement = document.getElementById('text');
    const contentElement = document.getElementById('content');

    // Handle button animations
    buttons.forEach(button => {
        if (button.textContent === tappedChoice) {
            button.classList.add('clicked');
        } else {
            button.classList.add('hidden');
        }
    });



    // Wait for 2 seconds before starting the slide-out animation
    setTimeout(() => {
        // Start slide-out animation
        contentElement.classList.add('slide-out-to-right');
        // After slide-out is complete, update the node and slide in new content
        setTimeout(() => {
            // Update the node
            if (choice.destinationID && storyData[choice.destinationID]) {
                    currentNodeID = choice.destinationID;
                    //console.log(choice.destinationID)
                    if (!['credits', 'about', 'mainMenu', 'mainMenu2'].includes(currentNodeID)) {
                        choiceJSONString = JSON.stringify(choice)
                        localStorage.setItem('myNode', choiceJSONString)
                    }
                } else {
                    console.error(`Invalid destinationID: ${choice.destinationID}`);
                    alert('UH OHHHHH! An error occurred. Returning to main menu. Probably broke or something though.');
                    currentNodeID = 'mainMenu';
                }
                // resetAnimations();

            // Temporarily disable transition
            contentElement.classList.add('no-transition');

            // Remove 'slide-out' class and set content to off-screen to the left
            contentElement.classList.remove('slide-out-to-right');
            contentElement.classList.add('move-off-screen-left');

            // Show the new content
            showCurrentNode();

            // Force reflow to ensure the browser registers the position change
            void contentElement.offsetWidth;

            // Re-enable transition
            contentElement.classList.remove('no-transition');

            // Start slide-in animation
            contentElement.classList.remove('move-off-screen-left');
            contentElement.classList.add('slide-in-from-left');

            // After slide-in animation is complete, clean up
            setTimeout(() => {
                contentElement.classList.remove('slide-in-from-left');
                contentElement.style.transform = '';
                //Now reset animations
                resetAnimations();

            }, 1250); // duration of slide-in animation
        }, 1000); // duration of slide-out animation
    }, 500); // Wait for .75 seconds before sliding out
}

function resumeGameButton() {
    if (currentNodeID == "mainMenu") {
        let lastNode = localStorage.getItem('myNode');

        if (lastNode) {
            let parsedSave = JSON.parse(lastNode);
            let loadButton = document.createElement('button');
            saveLoadButtonsEl.appendChild(loadButton);
            loadButton.classList.add('inline', 'data-button', 'load');
            loadButton.textContent = "Resume Game";
            //currentNodeID = lastNode   
            loadButton.addEventListener('click', () => {
                handleChoiceTap(parsedSave);
                loadButton.remove()

            });
        }
    }
}

function showCurrentNode() {
    const currentNode = storyData[currentNodeID];
    const imageElement = document.getElementById('image');
    const imageContainer = document.getElementById('image-container');
    const textElement = document.getElementById('text');
    const choicesElement = document.getElementById('choices');

    // Update image
    if (currentNode.imageName) {
        // Set the image source
        imageElement.src = currentNode.imageName;
        imageElement.style.display = 'inline';
    } else {
        imageElement.style.display = 'none';
    }

    // Update text
    textElement.textContent = currentNode.text;

    // Clear previous choices
    choicesElement.innerHTML = '';

    // Create choice buttons
    if (currentNode.choices) {
        currentNode.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                handleChoiceTap(choice);
            });
            choicesElement.appendChild(button);
        });
    }
    if (currentNodeID == 'mainMenu') {
        resumeGameButton(); 
    } else {
        const loadButton = document.getElementsByClassName('load')
        if (loadButton[0]) {
            loadButton[0].remove()
        }
    }


}

function resetAnimations() {
    tappedChoice = null;
    const contentElement = document.getElementById('content');
    contentElement.classList.remove('slide-out-to-right', 'move-off-screen-left', 'slide-in-from-left', 'no-transition');
    contentElement.style.transform = '';
}



// Start the story
showCurrentNode();
//resumeGameButton();
//if currentNode is mainmenu





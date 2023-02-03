  let boxes = document.querySelectorAll(".boxes");
  let box = document.querySelectorAll("#container");

  function slot() {
    const a = ["7 7 7"] ;


    const newDiv = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "PLAY";
    newDiv.textContent = `${a} `;

    button.addEventListener("click", () => {
      newDiv.textContent = `${Math.floor(Math.random() * 10)} 
                            ${Math.floor(Math.random() * 10)} 
                            ${Math.floor(Math.random() * 10)}
                            `;
    });

    return [newDiv, button];
  }

  for (let i = 0; i < boxes.length; i++) {
    const [div, button] = slot();
    boxes[i].append(div, button);

  }
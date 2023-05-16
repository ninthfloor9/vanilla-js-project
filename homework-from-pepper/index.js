const apiUrl = "https://550h08fx77.execute-api.ap-northeast-2.amazonaws.com/frontend-mock?page=1&rowsPerPage=25&search="

fetch(apiUrl).then(response => response.json()).then(data => {
    const content = document.querySelector(".content");
    const createItem = (item) => {
      const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("images");

        const championSplash = document.createElement("img");

        if (item.champion_splash) {
            championSplash.src = item.champion_splash;
            championSplash.alt = "";
        } else {
            championSplash.src = "noimage.gif";
            championSplash.alt = "";
        }

        const splashLink = document.createElement("a");
        splashLink.href = item.url;
        splashLink.target = "_blank";
        splashLink.appendChild(imageDiv);

        const nameP = document.createElement("p");
        nameP.classList.add("text");
        nameP.textContent = item.champion_name;

        const rolesP = document.createElement("p");
        rolesP.classList.add("text");
        rolesP.textContent = item.champion_roles;

        const difficutiesSpan = document.createElement("span");
        difficutiesSpan.classList.add("text");

        if (item.champion_difficulty) {
            let star = "";
            const numStars = item.champion_difficulty;
            for (let i = 0; i <= numStars; i++) {
                star += "*";
            }
            difficutiesSpan.textContent = "(" + star + ")";
        }

        itemDiv.appendChild(splashLink);
        itemDiv.appendChild(nameP);
        itemDiv.appendChild(rolesP);
        splashLink.appendChild(imageDiv);
        imageDiv.appendChild(championSplash);
        nameP.appendChild(difficutiesSpan);

        return itemDiv;
    }
    const itemsHtml = data.Items.map(item => createItem(item));
    console.log(data);
    itemsHtml.forEach(item => {
        content.appendChild(item);
      });
  
}).catch(error => console.error(error));
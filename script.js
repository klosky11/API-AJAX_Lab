fetch(" https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const search = document.querySelector("#search");
    const input = document.querySelector("#input");

    // Loop through all
    // for (let i = 0; i < data.data.children.length; i++) {
    //   console.log(data.data.children[i].data.title);

    //Loop through the first 10
    for (let i = 0; i < 11; i++) {
      console.log(data.data.children[i].data.title);

      let title = document.createElement("div");
      title.innerText = data.data.children[i].data.title;
      document.body.append(title);

      let image = document.createElement("img");
      linkImg = data.data.children[i].data.thumbnail;
      if (linkImg === "default") {
      } else {
        image.setAttribute("src", linkImg);
        document.body.append(image);
      }

      let link = document.createElement("a");
      linkUrl = data.data.children[i].data.url;
      link.setAttribute("href", linkUrl);
      link.innerText = linkUrl;
      document.body.append(link);
    }

    search.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

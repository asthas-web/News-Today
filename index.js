let newsAcoordion = document.getElementById("newsAcoordion");

// initialise the variable in the url
let source = "techcrunch";
let apiKey = "4c98c68792ab48eeae1570bbe35b5f1b";

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);
// xhr.getResponseHeader("Content-type", "application/json");
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let article = json.articles;
    // console.log(article);
    let newsHtml = "";
    article.forEach(function (element, index) {
      console.log(element, index);
      let news = `<div class="card">
    <div class="card-header" id="heading${index}">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          <b>Breaking News ${index + 1}</b> ${element["title"]}
        </button>
      </h2>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
      <div class="card-body">
      ${element["content"]} <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>
    </div>
  </div>
</div>`;

      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("some error occured");
  }
};
xhr.send();

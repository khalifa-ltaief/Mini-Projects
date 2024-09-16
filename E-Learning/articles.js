const articlesData = [
    {
        imgSrc:"image/Articles/article1.jpg",
        title:"Difference between Web Design and Development",
        views:"+230",
       
    },
    {
        imgSrc:"image/Articles/article1.jpg",
        title:"Difference between Web Design and Development",
        views:"+230",
       
    },
    {
        imgSrc:"image/Articles/article1.jpg",
        title:"Difference between Web Design and Development",
        views:"+230",
       
    },
    {
        imgSrc:"image/Articles/article1.jpg",
        title:"Difference between Web Design and Development",
        views:"+230",
       
    },
];
const articlesContainer = document.querySelector(".articles");
  
articlesData.forEach(article => {
    const articleItem = document.createElement("div");
    articleItem.classList.add("item");
articleItem.innerHTML = `
<div class="top">
<img src=${article.imgSrc} alt="">
<p> ${article.title}</p>
</div>
<div class="bottom">
<h5><span>${article.views}</span> Views</h5>
<a href="">Read More</a>
</div>
`;
articlesContainer.appendChild(articleItem)
  });
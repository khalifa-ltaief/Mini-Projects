const podcastsData = [
    {
        
        title:"Learn Coding",
        date:"10 Mars 2024",
        listeners:"+100 ",
       duration:"01:20:00",
       views:"210 "
    },
    {
        
        title:"Learn Coding",
        date:"10 Mars 2024",
        listeners:"+100 ",
       duration:"01:20:00",
       views:"210 "
    },
    {
        
        title:"Learn Coding",
        date:"10 Mars 2024",
        listeners:"+100 ",
       duration:"01:20:00",
       views:"210 "
    },
    {
        
        title:"Learn Coding",
        date:"10 Mars 2024",
        listeners:"+100 ",
       duration:"01:20:00",
       views:"210 "
    },
    {
        
        title:"Learn Coding",
        date:"10 Mars 2024",
        listeners:"+100 ",
       duration:"01:20:00",
       views:"210 "
    },
    {
        
        title:"Learn Coding",
        date:"10 Mars 2024",
        listeners:"+100 ",
       duration:"01:20:00",
       views:"210 "
    },
   
];
const podcastContainer = document.querySelector(".podcasts");
  
podcastsData.forEach(podcast => {
    const podcastItem = document.createElement("div");
    podcastItem.classList.add("item");
podcastItem.innerHTML = `
<div class="top">
            <div>
              <span class="material-symbols-outlined">
                headphones
                </span>
            </div>
            <div class="info">
              <a href="">${podcast.title}</a>
              <p>${podcast.date}</p>
              <p>Listened ${podcast.listeners} times</p>
            </div>
          </div>
          <div class="bottom">
            <div class="duration">
              <img src="image/Assets/play.svg" alt="">

              <p>${podcast.duration}</p>
            </div>
            <h5 class="tag"><span>${podcast.views}</span> Listeners</h5>
          </div>
`;
podcastContainer.appendChild(podcastItem)
  });
const coursesData = [
    {
      imgSrc: "image/courses/react.png",
      title: "Learn React With Mini Projects",
      author: "Khalifa Ltaief",
      duration: "+13h",
      price: "40$",
      oldPrice: "120$",
      students: "+400",
      support: "Lifetime Support"
    },
    {
      imgSrc: "image/courses/boot.png",
      title: "Complete Bootstrap Course",
      author: "Khalifa Ltaief",
      duration: "+13h",
      price: "40$",
      oldPrice: "120$",
      discount: "20%",
      discountTime: "3 Days",
      support: "Lifetime Support"
    }, {
        imgSrc: "image/Courses/web.jpg",
        title: "Learn Web Design",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/laravel.png",
        title: "Learn Laravel With 10 Projects",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/php.png",
        title: "Learn Php",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/algorithme.jpg",
        title: "Start Understanding Algorithm With one Course",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/ajax-1.svg",
        title: "Learn Ajax With easy Projects",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/c++.jpg",
        title: "Learn C++ Basics",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/Java-Logo.png",
        title: "Start Understanding Java",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/uml.png",
        title: "Become Pro in UML with One Video",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/mongo.webp",
        title: "Start Understanding MongoDB With one Course",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
     {
        imgSrc: "image/Courses/mysql.png",
        title: "Everything You need to master MysQl",
        author: "Khalifa Ltaief",
        duration: "+13h",
        price: "40$",
        oldPrice: "120$",
        discount: "20%",
        discountTime: "3 Days",
        support: "Lifetime Support"
      },
    
  ];
  
  const coursesContainer = document.querySelector(".courses");
  
  coursesData.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("item");
    
    courseItem.innerHTML = `
      <div class="top">
        <div>
          <img src="${course.imgSrc}" alt="${course.title}" />
        </div>
        <div class="info">
          <a href="#">${course.title}</a>
          <p>Author: ${course.author}</p>
          <p>Duration: ${course.duration}</p>
          <p>${course.support}</p>
        </div>
      </div>
      <div class="bottom">
        <div class="price">
          <h5>Price: ${course.price}</h5>
          <p>Old Price: ${course.oldPrice}</p>
        </div>
        ${course.discount ? 
          `<div class="discount">
            <div class="time">
              <p>Until</p>
              <h5>${course.discountTime}</h5>
            </div>
            <h5><span>${course.discount}</span> Discount</h5>
          </div>` : 
          `<h5 class="tag"><span>${course.students}</span> Students</h5>`
        }
      </div>
    `;
  
    coursesContainer.appendChild(courseItem);
  });
  
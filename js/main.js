(() => {

  const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p'),
        profImage = document.querySelector('#profImage'),
        courseInfoH2 = document.querySelector('.courseInfo').querySelector('h2'),
        courseDesc = document.querySelector('.courseInfo').querySelector('p'),
        courseContent = document.querySelector(".lowerPanelNav").querySelector('ul');


  // add content to paragraphs with Javascript
  function setCourseInfo(data) {
    courseInfo[0].textContent = data.coursename;
    courseInfo[0].innerHTML += ` - <span class="test-primary">${data.coursecode}</span>`;
    courseInfo[1].textContent = `Professor: ${data.profname}`;
    data.classtime.forEach(time => {
      let newTime = `<li><span class="fa fa-clock-o">${time}</span></li>`;
      courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
    });
    profImage.src = `images/${data.profimg}`;
    courseInfoH2.textContent = data.coursename;
    courseInfoH2.innerHTML += ` - <span class="test-primary">${data.coursecode}</span>`;
    courseDesc.textContent = data.coursedesc;

    data.coursecontent.forEach(content => {
      let courseCont = `<li>${content}</li>`;
      courseContent.innerHTML += courseCont;
    });
  }

  // EVENTS
  setCourseInfo(classData);


})();
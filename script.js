let sections = document.querySelector(".sections");
let time = "weekly";
let unit = "Week";

function dayChoose() {
  time = "daily";
  unit = "Day";
  document.querySelector('.day').style.color= 'white';
  document.querySelector('.week').style.color= 'hsl(236, 100%, 87%)';
  document.querySelector('.month').style.color= 'hsl(236, 100%, 87%)';
  getData();

}
function weekChoose() {
  time = "weekly";
  unit = "Week";
  document.querySelector('.day').style.color= 'hsl(236, 100%, 87%)';
  document.querySelector('.week').style.color= 'white';
  document.querySelector('.month').style.color= 'hsl(236, 100%, 87%)';
  getData();
}
function monthChoose() {
  time = "monthly";
  unit = "Month";
  document.querySelector('.day').style.color= 'hsl(236, 100%, 87%)';
  document.querySelector('.week').style.color= 'hsl(236, 100%, 87%)';
  document.querySelector('.month').style.color= 'white';
  getData();
}
document.querySelector('.week').style.color= 'white';
getData();

function getData() {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let result = "";
      data.forEach((element) => {
        result += `
      <section style="background-color:${element.color} ;  background-image:url(${element.image}) ;" >
        <div class="content">
            <div class="header">
                <div class="title">${element.title}</div>
                <img src="./images/icon-ellipsis.svg" class="ellipsis" alt="">
        </div>
             <div class="timeContainer">
            <div class="time">${element.timeframes[time].current}hrs</div>
             <div class="last">Last ${unit} - ${element.timeframes[time].previous}</div>
        </div>
        </div>

      </section>
    `;
      });
      sections.innerHTML = result;
    });
}

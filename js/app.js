'use strict';

function HornyAnimals (prop){
    this.title=prop.title;
    this.image_url=prop.image_url;
    this.description=prop.description;
    this.keyword=prop.keyword;
    this.horns=prop.horns;
} 


HornyAnimals.prototype.render = function(){
    
    let infoContainer=$('.photo-template').clone();
    infoContainer.find('h2').text(this.title);
    infoContainer.find('img').attr('src', this.image_url);
    infoContainer.find('p').text(this.description);
    
    infoContainer.removeClass('photo-template');
    infoContainer.attr('class',this.keyword);
    $('main').append(infoContainer);
    
}

const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };


  $.ajax('data/page-1.json', ajaxSettings).then((data) => {
    data.forEach(prop => {
      let hornObject=new HornyAnimals(prop);
      console.log(hornObject);
      hornObject.render();
    });
  });
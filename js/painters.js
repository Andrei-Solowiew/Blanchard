document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.catalog__accordion-name').forEach(function(catalog__accordion_name){
    catalog__accordion_name.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      
      document.querySelectorAll('.catalog__painter').forEach(function(catalog__painter) {
        catalog__painter.classList.remove("catalog__painter_active");
      })
      document.querySelectorAll(".catalog__accordion-name").forEach(function(catalog__accordion_name) {
        catalog__accordion_name.classList.remove("catalog__accordion-name_active");
      });   


      
      document.querySelector(`.catalog__bottom_active .catalog__painter[data-target="${path}"]`).classList.add('catalog__painter_active')
      document.querySelector(`.catalog__bottom_active .catalog__accordion-name[data-path="${path}"]`).classList.add("catalog__accordion-name_active");
  })
  })
  
})


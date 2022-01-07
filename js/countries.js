document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__country').forEach(function(catalog__country){
    catalog__country.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      
      document.querySelectorAll('.catalog__bottom').forEach(function(catalog__bottom) {
        catalog__bottom.classList.remove("catalog__bottom_active");
        
      })
      document.querySelectorAll(".catalog__country").forEach(function(catalog__country) {
        catalog__country.classList.remove("catalog__country_active");
      });

      
      document.querySelector(`.catalog__bottom[data-target="${path}"]`).classList.add('catalog__bottom_active')
      document.querySelector(`.catalog__country[data-path="${path}"]`).classList.add("catalog__country_active");
      document.querySelector(`.catalog__bottom_active .catalog__painter[data-target="twelve"]`).classList.add('catalog__painter_active')
  })
})
})


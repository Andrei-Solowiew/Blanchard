// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      float: "none",
      position: {
        top: "350px",
        right: "10px",
      },
    },
  });
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      float: "none",
      position: {
        top: "268px",
        right: "10px",
      },
      size: "small",
    },
  });

  // Создание карты.
  var myMap = new ymaps.Map("map1", {
    center: [55.76026356869772, 37.61446894503018],
    zoom: 14,
    controls: [zoomControl, geolocationControl],
  });

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.872185, 2.354224], // координаты точки
    },
  });

  var myPlacemark = new ymaps.Placemark(
    [55.76026356869772, 37.61446894503018],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts__ellipse.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42],
    }
  );

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
}

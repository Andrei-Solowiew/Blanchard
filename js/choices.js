const header__select = () => {
  const elements = document.querySelectorAll(".header__select");
  elements.forEach((el) => {
    const choices = new Choices(el, {
      silent: false,
      itemsitems: [],
      choiceschoices: [],
      renderChoiceLimit: -1,
      maxItemCount: -1,
      addItems: true,
      addItemFilter: null,
      removeItems: true,
      removeItemButton: false,
      editItems: false,
      duplicateItemsAllowed: true,
      delimiter: ",",
      paste: true,
      searchEnabled: false,
      searchChoices: true,
      searchFloor: 1,
      searchResultLimit: 4,
      searchFields: ["label", "value"],
      position: "bottom",
      resetScrollPosition: true,
      shouldSort: true,
      shouldSortItems: false,
      placeholder: true,
      placeholderValue: null,
      searchPlaceholderValue: null,
      prependValue: null,
      appendValue: null,
      renderSelectedChoices: "auto",
      loadingText: "Loading...",
      noResultsText: "No results found",
      noChoicesText: "No choices to choose from",
      itemSelectText: "",
    });
  });
};

header__select();

let choice = document.querySelectorAll(".choices");

choice.forEach(function (entry) {
  entry.setAttribute("tabindex", "-1");
});

let item = document.querySelectorAll(".choices__list--single .choices__item");

item.forEach(function (entry) {
  entry.setAttribute("tabindex", "0");
});



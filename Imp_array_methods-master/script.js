function loadScript(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = url;
  script.type = "module";
  head.appendChild(script);
}

// loadScript("./map_filter_sort_reduce.js");
// loadScript("./filter.js");
// loadScript("./forEach.js");
loadScript("./map.js");
// loadScript("./reduce.js");
// loadScript("./some.js");
// loadScript("./every.js");
// loadScript("./find.js");
// loadScript("./findIndex.js");
// loadScript("./object.js");
// loadScript("./array.js");
// loadScript("./charAt.js");
// loadScript("./forEach_and_map.js");
// loadScript("./map_object.js");
// loadScript("./ternary_operator.js");
// loadScript("./destructuring-arrays.js");
// loadScript("./destructuring-objects.js");
// loadScript("./optional-chaining.js");
// loadScript("./promise.js");
// loadScript("./async_await.js");
// loadScript("./event_bubbling.js");
// loadScript("./closure.js");
// loadScript("./curring.js");

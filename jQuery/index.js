$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
});

//$("h1").before("<button>New</button>");

//$("h1").after("<button>ROA</button>");

$("h1").prepend("<button>New</button>");

$("h1").append("<button>ROA</button>");

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

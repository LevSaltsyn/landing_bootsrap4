$("#checkedEssent").click(function() {
  $("#selectEssent").addClass("hide");
  $("#btnEssent").addClass("active");
  $(".card-header.essent").addClass("bg-white");
  $(".card-footer.essent").addClass("bg-white");

  $("#selectStanart").removeClass("hide");
  $("#btnStanart").removeClass("active");
  $(".card-header.standart").removeClass("bg-white");
  $(".card-footer.standart").removeClass("bg-white");

  $("#selectPremium").removeClass("hide");
  $("#btnPremium").removeClass("active");
  $(".card-header.premium").removeClass("bg-white");
  $(".card-footer.premium").removeClass("bg-white");

  $("#selectUltimate").removeClass("hide");
  $("#btnUltimate").removeClass("active");
  $(".card-header.ultimate").removeClass("bg-white");
  $(".card-footer.ultimate").removeClass("bg-white");
});

$("#checkedStanart").click(function() {
  $("#selectStanart").addClass("hide");
  $("#btnStanart").addClass("active");
  $(".card-header.standart").addClass("bg-white");
  $(".card-footer.standart").addClass("bg-white");

  $("#selectEssent").removeClass("hide");
  $("#btnEssent").removeClass("active");
  $(".card-header.essent").removeClass("bg-white");
  $(".card-footer.essent").removeClass("bg-white");

  $("#selectPremium").removeClass("hide");
  $("#btnPremium").removeClass("active");
  $(".card-header.premium").removeClass("bg-white");
  $(".card-footer.premium").removeClass("bg-white");

  $("#selectUltimate").removeClass("hide");
  $("#btnUltimate").removeClass("active");
  $(".card-header.ultimate").removeClass("bg-white");
  $(".card-footer.ultimate").removeClass("bg-white");
});

$("#checkedPremium").click(function() {
  $("#selectPremium").addClass("hide");
  $("#btnPremium").addClass("active");
  $(".card-header.premium").addClass("bg-white");
  $(".card-footer.premium").addClass("bg-white");

  $("#selectEssent").removeClass("hide");
  $("#btnEssent").removeClass("active");
  $(".card-header.essent").removeClass("bg-white");
  $(".card-footer.essent").removeClass("bg-white");

  $("#selectStanart").removeClass("hide");
  $("#btnStanart").removeClass("active");
  $(".card-header.standart").removeClass("bg-white");
  $(".card-footer.standart").removeClass("bg-white");

  $("#selectUltimate").removeClass("hide");
  $("#btnUltimate").removeClass("active");
  $(".card-header.ultimate").removeClass("bg-white");
  $(".card-footer.ultimate").removeClass("bg-white");
});

$("#checkedUltimate").click(function() {
  $("#selectUltimate").addClass("hide");
  $("#btnUltimate").addClass("active");
  $(".card-header.ultimate").addClass("bg-white");
  $(".card-footer.ultimate").addClass("bg-white");

  $("#selectEssent").removeClass("hide");
  $("#btnEssent").removeClass("active");
  $(".card-header.essent").removeClass("bg-white");
  $(".card-footer.essent").removeClass("bg-white");

  $("#selectStanart").removeClass("hide");
  $("#btnStanart").removeClass("active");
  $(".card-header.standart").removeClass("bg-white");
  $(".card-footer.standart").removeClass("bg-white");

  $("#selectPremium").removeClass("hide");
  $("#btnPremium").removeClass("active");
  $(".card-header.premium").removeClass("bg-white");
  $(".card-footer.premium").removeClass("bg-white");
});

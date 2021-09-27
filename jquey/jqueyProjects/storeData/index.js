$("#button").click(function (e) {
  let name = $("#name");
  let email = $("#email");

  let nameVal = name.val();
    let emailVal = email.val();
    e.preventDefault();
  if (nameVal == "" || emailVal == "") {
    alert("insert data in every field");
  } else {
    $("#container").append(
      '<div class="data"><span>name : ' +
        nameVal +
        "</span>,<span>Email : " +
        emailVal +
        "</span></div > "
    );
    }
    name.val("");
    email.val("");
});

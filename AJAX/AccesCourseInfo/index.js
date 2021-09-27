$("#fetch").click(() => {
    $('#fetching-box').hide(100);
  $.get("https://codingninjas.in/api/v3/courses", (data) => {
    var courses = data.data.courses;
    for (var course of courses) {
      var name = course.name;
    //   var title = course.title;
    //   var level = course.level;
      var imgUrl = course.classroom_icon_url;
      $("#container").append(
        '<div class="course"><img src="' +
          imgUrl +
          '"/><b>name</b>:"' +
          name +
          '"</div>'
      );
    }
  });
});

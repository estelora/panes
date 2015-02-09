var DetailsPage = {

  load: function() {
    var html = $('#spane-detail').html();
    $('.spane-content').html(html);

    //back button must be after html loads
    $('.back-spane1').click(function() {
      ListPage.load();
      ListPage.render();
    });


    /*
     * SYNTAX: $.get("url", function)
     * create a local server  in terminal: python -m SimpleHTTPServer
     * type "localhost:8000" in browser to use the website
     */
    $.get("template/details.html", function(template) {
      var detailTemplate = _.template(template);

      var html = editTemplate({
        appt: appt
      });

      $('.detail').html(html);

      // $('.change-details').click(function(){
      //
      //   appt.title = $(".edit-title").val();
      //   appt.date = $(".edit-date").val();
      //   appt.time = $(".edit-time").val();
      //   appt.street = $(".edit-street").val();
      //   appt.city = $(".edit-city").val();


      //load list page after editing info
      ListPage.load();
      ListPage.render();

    });
  });
},




onClickBack: function() {},

  onClickEdit: function() {},
};
var EditPage = {

  load: function(appt) {
    var html = $('#spane-edit').html();
    $('.spane-content').html(html);
    var editElement = $('.form-list');

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

    $.get("template/edit.html", function(template) {
      var editTemplate = _.template(template);
      var html = editTemplate({
        // variable: edit, value: appt
        edit: appt
      });
      $('.edit-data').html(html);

      $('.change-details').click(function() {

        appt.title = $(".edit-title").val();
        appt.date = $(".edit-date").val();
        appt.time = $(".edit-time").val();
        appt.street = $(".edit-street").val();
        appt.city = $(".edit-city").val();
        appt.state = $(".edit-state").val();
        //save to local storage
        App.appts.save();
        //load list page after editing info
        ListPage.load();
        ListPage.render();
      });

      $('.delete').click(function(){
        App.appts.delete(appt);
        ListPage.load();
        ListPage.render();
      });

    });
  },

};
  
  
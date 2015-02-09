 var CreatePage = {

   load: function() {
     var html = $('#spane-create').html();
     $('.spane-content').html(html);

     //back button must be after html loads
     $('.back-spane1').click(function() {
       ListPage.load();
       ListPage.render();
     });
     //click save, create an appt with the values from the form.
     $('.save').click(function() {

       App.appts.add({
         title: $(".create-title").val(),
         date: $(".create-date").val(),
         time: $(".create-time").val(),
         street: $(".create-street").val(),
         city: $(".create-city").val()
       });

       //load list page after saving info
       ListPage.load();
       ListPage.render();

     });
   },
 };
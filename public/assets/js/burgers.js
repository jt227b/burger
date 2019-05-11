$(function() {
    $(".add-burger").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerName").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
      
        var newDevourState = {
          devoured: 1
        };
    
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            location.reload();
          }
        );
      });
  });
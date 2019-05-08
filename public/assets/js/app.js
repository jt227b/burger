$(document).ready(function(){
    $("#burger-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        $.post("/burgers", newBurger, function(data){
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".devour-button").on("click", function(){
        var id = $(this).data("id");
        var devour = $(this).data("devour");
        console.log(id, devour);
        if(devour){
            var newState = {
                devoured: devour
            };
            $.ajax("/burgers/" + id,{
                type: "PUT",
                data: newState
            }).then(function(){
                console.log("Changed devoured to " + devour);
                location.reload();
            });
        }
        else{
            $.ajax("/burgers/" + id, {
                type: "DELETE"
            }).then(function(){
                console.log("Digested burger!");
                location.reload();
            });
        }
    });
});
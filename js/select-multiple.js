    $("select[multiple] option").mousedown(function () {
        var $self = $(this);

        if ($self.attr("selected")) {
            $self.removeAttr("selected", "");
        }
        else {
            $self.attr("selected", "selected");
        }

        return false;
    });

    $("select[multiple]").mousedown(function(e){
        e.preventDefault();

        var select = this;
        var scroll = select .scrollTop;

        e.target.selected = !e.target.selected;

        setTimeout(function(){select.scrollTop = scroll;}, 0);

        $(select ).focus();
    }).mousemove(function(e){e.preventDefault()});

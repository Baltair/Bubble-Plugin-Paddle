function(instance, properties, context) {
    if(!instance.data.init){
	if(properties.mode === "Sandbox"){Paddle.Environment.set('sandbox')}
  	Paddle.Setup({ token: context.keys["Client-side Token"],
                  eventCallback: function(data) {
                      console.log(data);
                      switch(data.name) {
                          case "checkout.completed":
                              instance.triggerEvent("checkout_complete");
                              break;
                          case "checkout.closed":
                              instance.triggerEvent("checkout_close");
                              break;
                          case "checkout.error":
                              instance.triggerEvent("checkout_error");
                              break;
                          case "checkout.loaded":
                              instance.triggerEvent("checkout_load");
                              break;
                      }
                  }});
        instance.data.init = true;
    }
    
    instance.data.displaytheme = properties.display_theme;
    instance.data.displaymethod = properties.display_method;
    instance.data.locale = properties.locale;
    instance.data.disableLogout = properties.disable_logout;
    instance.data.prefillEmail = properties.prefill_email;  
    instance.data.showaddtaxid = properties.showaddtaxid;  
    instance.data.showadddiscounts = properties.showadddiscounts;

}
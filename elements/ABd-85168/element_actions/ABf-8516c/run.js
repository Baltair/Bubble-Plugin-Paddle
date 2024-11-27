function(instance, properties, context) {
    let itemsList = [];
   	properties.items.forEach(item => itemsList.push({priceId:item.key, quantity:item.value}));
    console.log(itemsList);
    let options = {
        displayMode: instance.data.displaymethod,
        theme: instance.data.displaytheme,
        allowLogout: !instance.data.disableLogout,
        locale: instance.data.locale,
        showAddTaxId: instance.data.showaddtaxid,
        showAddDiscounts: instance.data.showadddiscounts,
    }
    let customer = {};
    if(instance.data.prefillEmail){customer.email = instance.data.prefillEmail}
    if(instance.data.displaymethod === "inline"){
    	options.frameTarget = 'paddle-checkout-container';
        options.frameStyle = 'width:100%; min-width:312px; background-color: transparent; border: none;'
    }
    console.log(options);
    console.log(itemsList);
	Paddle.Checkout.open({settings: options, items: itemsList, customer: customer});
}
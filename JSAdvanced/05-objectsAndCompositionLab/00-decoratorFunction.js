//Can add new Data and behavior to already existing object
function canPrint(device) {
  // 2/4creates the behavior
  device.print = () => {
    console.log(`${device.name} is printing a page`);
  };
}

const printer = { name: 'Acme printer' }; // 1/4 object is existing
canPrint(printer); // 3/4 calls the function on top with the device = printer

printer.print(); // 4/4 calls the newly created func in the object

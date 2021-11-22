




function sendMessage(name, phone, email, msg,pack) {


    axios.get(`https://api.telegram.org/bot2112968771:AAFGOCDsQcVLdNBqJI0OwJdQQSX3cXjItKU/sendMessage?chat_id=-679293041&text=Enquery!%0A%0AHi%2C%20Sathiya%20Studio%0A%0AName%3A%20${name}%0AEmail%3A%20${email}%0APhone%3A%20${pack}%0APackage%3A%20${phone}%0AMessage%3A%20${msg}%0A%0A-%20Powered%20by%20Latrosoft`)
        .then((r => {
            if (r.status == 200) {
                console.log("Successfully Sended");
                console.log(r);
                window.location = "/success.html";
            }

        }))
        .catch((e) => {
            console.log(e);
        })





}






function contact(name, sub, email, msg) {


    axios.get(`https://api.telegram.org/bot2112968771:AAFGOCDsQcVLdNBqJI0OwJdQQSX3cXjItKU/sendMessage?chat_id=-679293041&text=Get%20in%20Touch!%0A%0A${sub}%0A%0AName%20%20%20%20%3A%20${name}%0AEmail%20%20%20%3A%20${email}%0AMessage%20%3A%20${msg}%0A%0A-%20Powered%20by%20Latrosoft`)
        .then((r => {
            if (r.status == 200) {
                console.log("Successfully Sended");
                console.log(r);
                window.location = "/success.html";
            }

        }))
        .catch((e) => {
            console.log(e);
        })





}



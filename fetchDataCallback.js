//Creating FetchDataWithCallback function
function FetchDataWithCallback(callback) {
    setTimeout(() => {
        let error= true;

        try {
            if (error) {
                throw new Error("Fetch Failed");
            }
        callback("Data Fetched");
        } catch (err) {
            console.log("Error: " + err.message);
        }
    }, 2000);  
}
//using the function
FetchDataWithCallback((message) => {
console.log(message);
});
    

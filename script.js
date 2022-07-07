(async function() {
    document.getElementById('billTextContainer').textContent = billText;
})()
    .catch(err => {
        console.error(err);
        document.getElementById('errorMsg').textContent = err.stack; 
    });
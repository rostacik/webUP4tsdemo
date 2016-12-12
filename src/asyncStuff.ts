async function getConfirmAsync(message) {
    let promise = new Promise(function(resolve, reject) {
        let res = confirm(message);

        resolve(res);
    });

    return promise;
}

async function asyncDemo() {
    if (await getConfirmAsync("Pod na jedno")) {
        alert("Ja som to vedel, no davaj het :)");
    } else {
        if (await getConfirmAsync("Ale fakt nejdes?")) {
            alert("Gooooood");
        } else {
            if (await getConfirmAsync("kks vsak len jedno som povedal")) {
                alert("nehehe");
            } else {
                alert("OK tak v piatok bejku");
            }
        }
    }
}
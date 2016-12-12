var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
function getConfirmAsync(message) {
    return __awaiter(this, void 0, void 0, function* () {
        let promise = new Promise(function (resolve, reject) {
            let res = confirm(message);
            resolve(res);
        });
        return promise;
    });
}
function asyncDemo() {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield getConfirmAsync("Pod na jedno")) {
            alert("Ja som to vedel, no davaj het :)");
        }
        else {
            if (yield getConfirmAsync("Ale fakt nejdes?")) {
                alert("Gooooood");
            }
            else {
                if (yield getConfirmAsync("kks vsak len jedno som povedal")) {
                    alert("nehehe");
                }
                else {
                    alert("OK tak v piatok bejku");
                }
            }
        }
    });
}

//# sourceMappingURL=asyncStuff.js.map

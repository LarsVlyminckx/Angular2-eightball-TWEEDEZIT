"use strict";
var Eightball = (function () {
    function Eightball(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    Eightball.prototype.toForm = function () {
        return "question=" + this.question + "&answer=" + this.answer;
    };
    return Eightball;
}());
exports.Eightball = Eightball;
//# sourceMappingURL=eightball.js.map
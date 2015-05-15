function replacemoebelando() {
    var toReplace = 'möbelando';
    var replaceWith ='<span class="moeb">möbe</span>lando';
    document.body.innerHTML = document.body.innerHTML.replace(toReplace, replaceWith);
};
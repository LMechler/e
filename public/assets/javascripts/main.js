function scriptparent() {
var scriptTag = document.getElementsByTagName('script');
    scriptTag = scriptTag[scriptTag.length - 1];
    var parent = scriptTag.parentNode;
    return parent;
};

console.log("FontArt.loadFont(documentId,Font+Name,FontNameCSS)");
class FontArt{
  static loadFont(documentId,fontName,fontNameCSS){
    var createLink=document.createElement("link");
    createLink.setAttribute("rel","stylesheet");
    createLink.setAttribute("type","text/css")
    createLink.setAttribute("href","https://fonts.googleapis.com/css?family="+fontName);
    document.body.appendChild(createLink);
    documentId.style.fontFamily=fontNameCSS+",serif";
    return fontNameCSS+" successfully loaded";
  }
}

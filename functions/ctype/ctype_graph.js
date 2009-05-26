function ctype_graph (text) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // -    depends on: setlocale
    // *     example 1: ctype_graph('!%');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN STATIC
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END STATIC
    return this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.gr.test(text);
}
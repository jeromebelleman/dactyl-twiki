function up()
{
    var doc = content.document;
    var tbody = doc.getElementById('twTopBar').childNodes[7].childNodes[1];
    var ul = tbody.firstChild.childNodes[3].childNodes[1].childNodes[1];
    var a = ul.childNodes[11].childNodes[1];
    attr = a.getAttribute('title');
    if (attr && attr.indexOf('(parent topic)') != -1)
        a.click();
    else
        buffer.climbUrlPath(1);
}

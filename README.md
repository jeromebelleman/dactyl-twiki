Bind Pentadactyl keys to go one TWiki topic up and set editor

```javascript
au LocationChange localhost[^/]*/bin/view :map gu -js plugins.twiki.up()
au LocationChange twiki.example.com :set editor='urxvt -e vim -f +<line> +"set filetype=twiki" +"sil! call cursor(0, <column>)" <file>'
set passkeys=twiki.example.com:<A-S-s><A-S-e><A-S-p>
```

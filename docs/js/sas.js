  // Main Data source.
  // Replace pattern ^([^,]*),(.*)$ \1:[\2  

  var reps = {
    "A000055":[0,0,0,0,0,0,-3,0,-3,"Rep","Robert","Aderholt","R","AL",4,"Robert_Aderholt","RobertAderholt","19787529402"  ],
    "A000360":[0,0,0,0,0,0,0,0,0,"Sen","Lamar","Alexander","R","TN",null,"SenAlexander","lamaralexander","89927603836"  ],
    "A000367":[0,0,0,0,4,4,0,3,11,"Rep","Justin","Amash","R","MI",3,"RepJustinAmash","repjustinamash","173604349345646"  ],
    "A000368":[0,0,0,0,0,0,0,0,0,"Sen","Kelly","Ayotte","R","NH",null,"","SenatorAyotte","123436097729198"  ],
    "A000369":[0,0,0,0,4,4,-3,3,8,"Rep","Mark","Amodei","R","NV",2,"MarkAmodeiNV2","markamodeinv2","307227745970624"  ],
    "B000013":[0,0,0,0,0,4,-3,0,1,"Rep","Spencer","Bachus","R","AL",6,"BachusAL06","congressmanbachus","6769692966"  ],
    "B000213":[0,0,0,0,0,4,0,3,7,"Rep","Joe","Barton","R","TX",6,"RepJoeBarton","repjoebarton","15617630596"  ],
    "B000287":[0,0,0,0,0,4,0,3,7,"Rep","Xavier","Becerra","D","CA",34,"RepBecerra","XavierBecerra","90311772229"  ],
    "B000490":[0,0,0,0,0,0,-3,3,0,"Rep","Sanford","Bishop","D","GA",2,"SanfordBishop","RepSanfordBishop","366739521606"  ],
    "B000574":[0,0,0,4,4,4,0,3,15,"Rep","Earl","Blumenauer","D","OR",3,"BlumenauerMedia","RepBlumenauer",""  ],
    "B000575":[0,0,0,0,0,0,0,0,0,"Sen","Roy","Blunt","R","MO",null,"RoyBlunt","SenatorBlunt","142473042477322"  ],
    "B000589":[0,0,0,0,0,0,0,0,0,"Rep","John","Boehner","R","OH",8,"SpeakerBoehner","johnboehner","175082565865743"  ],
    "B000711":[0,0,0,0,0,0,0,0,0,"Sen","Barbara","Boxer","D","CA",null,"SenatorBoxer","SenatorBoxer","116513005087055"  ],
    "B000755":[0,0,0,0,0,0,-3,0,-3,"Rep","Kevin","Brady","R","TX",8,"RepKevinBrady","KBrady8","9307301412"  ],
    "B000911":[0,0,0,0,0,0,-3,3,0,"Rep","Corrine","Brown","D","FL",5,"RepCorrineBrown","CongresswomanBrown","179120958813519"  ],
    "B000944":[0,0,0,0,0,0,0,0,0,"Sen","Sherrod","Brown","D","OH",null,"SenSherrodBrown","SherrodBrownOhio",""  ],
    "B001135":[0,0,0,0,0,0,0,0,0,"Sen","Richard","Burr","R","NC",null,"SenatorBurr","SenatorRichardBurr","132653626787856"  ],
    "B001227":[0,0,0,0,0,4,0,3,7,"Rep","Robert","Brady","D","PA",1,"RepBrady","BradyPA01","118845109487"  ],
    "B001230":[0,0,4,0,0,0,0,0,4,"Sen","Tammy","Baldwin","D","WI",null,"SenatorBaldwin","witammybaldwin","7357041101"  ],
    "B001236":[0,0,0,0,0,0,0,0,0,"Sen","John","Boozman","R","AR",null,"JohnBoozman","BoozmanPressOffice","7686715735"  ],
    "B001242":[0,0,0,0,0,0,-3,3,0,"Rep","Timothy","Bishop","D","NY",1,"TimBishopNY","timbishop01","7940339401"  ],
    "B001243":[0,0,0,0,0,4,-3,3,4,"Rep","Marsha","Blackburn","R","TN",7,"MarshaBlackburn","RepMarshaBlackburn","6470828395"  ],
    "B001245":[0,0,0,0,0,0,0,0,0,"Del","Madeleine","Bordallo","D","GU",0,"","","161729837225622"  ],
    "B001248":[0,0,0,0,4,4,0,3,11,"Rep","Michael","Burgess","R","TX",26,"MichaelCBurgess","michaelcburgessmd","6916472567"  ],
    "B001250":[0,0,0,0,0,4,-3,3,4,"Rep","Rob","Bishop","R","UT",1,"RepRobBishop","CongressmanBishop","RepRobBishop"  ],
    "B001251":[0,0,0,0,0,0,-3,3,0,"Rep","George","Butterfield","D","NC",1,"GKButterfield","GKBNC01","274687979233940"  ],
    "B001252":[0,0,0,0,0,0,-3,0,-3,"Rep","John","Barrow","D","GA",12,"RepJohnBarrow","RepJohnBarrow","285483767395"  ],
    "B001255":[0,0,0,0,0,0,-3,0,-3,"Rep","Charles","Boustany","R","LA",3,"RepBoustany","boustanyla07","197407646951718"  ],
    "B001256":[0,-4,0,0,0,0,-3,0,-7,"Rep","Michele","Bachmann","R","MN",6,"MicheleBachmann","RepMicheleBachmann","7658849357"  ],
    "B001257":[0,0,0,0,0,0,-3,0,-3,"Rep","Gus","Bilirakis","R","FL",12,"RepGusBilirakis","RepGusBilirakis","135445766485586"  ],
    "B001259":[0,0,0,0,0,4,-3,3,4,"Rep","Bruce","Braley","D","IA",1,"BruceBraley","repbrucebraley","178887452188843"  ],
    "B001260":[0,0,0,0,4,4,-3,3,8,"Rep","Vern","Buchanan","R","FL",16,"VernBuchanan","vernbuchanan","67106719910"  ],
    "B001261":[0,0,0,0,0,0,0,0,0,"Sen","John","Barrasso","R","WY",null,"SenJohnBarrasso","barrassowyo","21146775942"  ],
    "B001262":[0,0,0,0,4,4,0,3,11,"Rep","Paul","Broun","R","GA",10,"RepPaulBrounMD","RepPaulBroun","123908980957273"  ],
    "B001265":[0,0,4,0,0,0,0,0,4,"Sen","Mark","Begich","D","AK",null,"SenatorBegich","USSenatorMarkBegich","121360477876652"  ],
    "B001267":[0,0,0,0,0,0,0,0,0,"Sen","Michael","Bennet","D","CO",null,"SenBennetCo","SenatorBennet","97172997732"  ],
    "B001269":[0,0,0,0,0,0,-3,0,-3,"Rep","Lou","Barletta","R","PA",11,"RepLouBarletta","reploubarletta","192357174108435"  ],
    "B001270":[0,0,0,0,4,4,0,3,11,"Rep","Karen","Bass","D","CA",37,"RepKarenBass","RepKarenBass","190867440939405"  ],
    "B001271":[0,0,0,0,0,0,-3,0,-3,"Rep","Dan","Benishek","R","MI",1,"CongressmanDan","","124163654317596"  ],
    "B001273":[0,0,0,0,0,4,-3,3,4,"Rep","Diane","Black","R","TN",6,"RepDianeBlack","RepDianeBlack","186436274719648"  ],
    "B001274":[0,0,0,0,0,0,-3,3,0,"Rep","Mo","Brooks","R","AL",5,"RepMoBrooks","RepMoBrooks","155220881193244"  ],
    "B001275":[0,0,0,0,0,0,-3,3,0,"Rep","Larry","Bucshon","R","IN",8,"RepLarryBucshon","RepLarryBucshon","135670516492974"  ],
    "B001277":[0,0,4,0,0,0,0,0,4,"Sen","Richard","Blumenthal","D","CT",null,"SenBlumenthal","SenatorBlumenthal","289987304364966"  ],
    "B001278":[0,0,0,0,4,4,0,3,11,"Rep","Suzanne","Bonamici","D","OR",1,"RepBonamici","RepSuzanneBonamici","252633384817156"  ],
    "B001279":[0,0,0,0,0,0,-3,0,-3,"Rep","Ron","Barber","D","AZ",2,"RepRonBarber","RepRonBarber","244907165625305"  ],
    "B001280":[0,0,0,0,4,4,0,3,11,"Rep","Kerry","Bentivolio","R","MI",11,"RepKerryB","repkerry","316865541750741"  ],
    "B001281":[0,0,0,0,0,0,-3,0,-3,"Rep","Joyce","Beatty","D","OH",3,"RepBeatty","","RepJoyceBeatty"  ],
    "B001282":[0,0,0,0,0,0,-3,0,-3,"Rep","Garland","Barr","R","KY",6,"RepAndyBarr","RepAndyBarr","457461137635018"  ],
    "B001283":[0,0,0,0,4,4,-3,3,8,"Rep","Jim","Bridenstine","R","OK",1,"RepJBridenstine","RepJimBridenstine","460003650715961"  ],
    "B001284":[0,0,0,0,0,0,-3,0,-3,"Rep","Susan","Brooks","R","IN",5,"SusanWBrooks","SusanWBrooks","517697358277175"  ],
    "B001285":[0,0,0,0,4,0,-3,0,1,"Rep","Julia","Brownley","D","CA",26,"JuliaBrownley26","RepJuliaBrownley","330504617051234"  ],
    "B001286":[0,0,0,0,0,0,-3,0,-3,"Rep","Cheri","Bustos","D","IL",17,"RepCheri","RepCheri","581909665168588"  ],
    "B001287":[0,0,0,0,4,0,-3,3,4,"Rep","Ami","Bera","D","CA",7,"RepBera","repamibera","528662157146886"  ],
    "B001288":[0,0,0,0,0,0,0,0,0,"Sen","Cory","Booker","D","NJ",null,"SenBookerOfc","SenCoryBooker",""  ],
    "B001289":[0,0,0,0,0,0,-3,3,0,"Rep","Bradley","Byrne","R","AL",1,"RepByrne","","1374832002773142"  ],
    "C000059":[0,0,0,0,0,0,-3,0,-3,"Rep","Ken","Calvert","R","CA",42,"KenCalvert","RepKenCalvert","70063393423"  ],
    "C000071":[0,0,0,0,0,0,-3,0,-3,"Rep","Dave","Camp","R","MI",4,"RepDaveCamp","DaveCampYT","6775033524"  ],
    "C000127":[0,0,0,0,0,0,0,0,0,"Sen","Maria","Cantwell","D","WA",null,"CantwellPress","SenatorCantwell",""  ],
    "C000141":[0,0,0,0,0,0,0,0,0,"Sen","Benjamin","Cardin","D","MD",null,"SenatorCardin","senatorcardin","120421834675191"  ],
    "C000174":[0,0,0,0,0,0,0,0,0,"Sen","Thomas","Carper","D","DE",null,"SenatorCarper","senatorcarper","124891107521733"  ],
    "C000266":[0,0,0,0,0,4,-3,3,4,"Rep","Steve","Chabot","R","OH",1,"RepSteveChabot","congressmanchabot","204705339555378"  ],
    "C000286":[0,0,0,0,0,0,0,0,0,"Sen","Saxby","Chambliss","R","GA",null,"SaxbyChambliss","SenatorChambliss","SaxbyChambliss"  ],
    "C000380":[0,0,0,0,0,0,0,0,0,"Del","Donna","Christensen","D","VI",0,"DelegateDonna","delegatedonna","138013351189"  ],
    "C000537":[0,0,0,0,0,4,-3,3,4,"Rep","James","Clyburn","D","SC",6,"Clyburn","repjamesclyburn","127744320598870"  ],
    "C000542":[0,0,0,0,0,0,0,0,0,"Sen","Daniel","Coats","R","IN",null,"SenDanCoats","SenatorCoats","180671148633644"  ],
    "C000556":[0,0,0,0,4,0,-3,0,1,"Rep","Howard","Coble","R","NC",6,"HowardCoble","","208742429162356"  ],
    "C000560":[0,0,0,0,0,0,0,0,0,"Sen","Thomas","Coburn","R","OK",null,"TomCoburn","SenatorCoburn",""  ],
    "C000567":[0,0,0,0,0,0,0,0,0,"Sen","Thad","Cochran","R","MS",null,"SenThadCochran","sencochran",""  ],
    "C000714":[0,0,0,0,4,4,-3,3,8,"Rep","John","Conyers","D","MI",13,"RepJohnConyers","JCMI14","206947066849"  ],
    "C000754":[0,0,0,0,0,0,-3,0,-3,"Rep","Jim","Cooper","D","TN",5,"RepJimCooper","RepJimCooper","JimCooper"  ],
    "C000880":[0,0,0,0,0,0,0,0,0,"Sen","Michael","Crapo","R","ID",null,"MikeCrapo","senatorcrapo","80335332266"  ],
    "C000984":[0,0,0,0,4,4,0,3,11,"Rep","Elijah","Cummings","D","MD",7,"RepCummings","ElijahECummings","291368465380"  ],
    "C001035":[0,0,0,0,0,0,0,0,0,"Sen","Susan","Collins","R","ME",null,"SenatorCollins","SenatorSusanCollins","7593313361"  ],
    "C001036":[0,0,0,0,4,4,-3,3,8,"Rep","Lois","Capps","D","CA",24,"RepLoisCapps","reploiscapps","168989481141"  ],
    "C001037":[0,0,0,0,4,4,0,3,11,"Rep","Michael","Capuano","D","MA",7,"","RepMikeCapuano","151168844937573"  ],
    "C001038":[0,0,0,0,0,4,0,3,7,"Rep","Joseph","Crowley","D","NY",14,"RepJoeCrowley","RepJoeCrowley","176197712425090"  ],
    "C001045":[0,0,0,0,0,0,-3,0,-3,"Rep","Ander","Crenshaw","R","FL",4,"AnderCrenshaw","RepAnderCrenshaw","200388204657"  ],
    "C001046":[0,0,0,0,0,0,-3,0,-3,"Rep","Eric","Cantor","R","VA",7,"GOPLeader","EricCantor",""  ],
    "C001047":[0,0,0,0,0,0,-3,3,0,"Rep","Shelley","Capito","R","WV",2,"RepShelley","RepShelleyCapito","8057864757"  ],
    "C001048":[0,0,0,0,0,0,-3,3,0,"Rep","John","Culberson","R","TX",7,"CongCulberson","johnculbersontx07","1751723339"  ],
    "C001049":[0,0,0,0,0,4,-3,3,4,"Rep","Wm.","Clay","D","MO",1,"","WilliamLacyClay","109135405838588"  ],
    "C001051":[0,0,0,0,0,0,-3,0,-3,"Rep","John","Carter","R","TX",31,"JudgeCarter","repjohncarter","1287257083"  ],
    "C001053":[0,0,0,0,0,0,-3,0,-3,"Rep","Tom","Cole","R","OK",4,"TomColeOK04","reptomcole","146497782066300"  ],
    "C001056":[0,0,0,0,0,0,0,0,0,"Sen","John","Cornyn","R","TX",null,"JohnCornyn","senjohncornyn","75755694423"  ],
    "C001059":[0,0,0,0,0,0,-3,0,-3,"Rep","Jim","Costa","D","CA",16,"RepJimCosta","RepJimCostaCA20","RepJimCosta"  ],
    "C001061":[0,0,0,0,0,4,-3,3,4,"Rep","Emanuel","Cleaver","D","MO",5,"RepCleaver","repcleaver","7954512692"  ],
    "C001062":[0,-4,0,0,0,0,-3,0,-7,"Rep","K.","Conaway","R","TX",11,"ConawayTX11","mikeconaway11","203482063021985"  ],
    "C001063":[0,0,0,0,0,0,-3,3,0,"Rep","Henry","Cuellar","D","TX",28,"RepCuellar","henrycuellar","152569121550"  ],
    "C001064":[0,0,0,0,4,0,0,3,7,"Rep","John","Campbell","R","CA",45,"RepJohnCampbell","RepJohnCampbellCA48","60546090739"  ],
    "C001066":[0,0,0,0,0,0,-3,3,0,"Rep","Kathy","Castor","D","FL",14,"USRepKCastor","RepKathyCastor","181810465190906"  ],
    "C001067":[0,0,0,0,0,4,0,3,7,"Rep","Yvette","Clarke","D","NY",9,"YvetteClarke","repyvetteclarke","135031389892682"  ],
    "C001068":[0,0,0,0,4,4,-3,3,8,"Rep","Steve","Cohen","D","TN",9,"RepCohen","repcohen","111456965545421"  ],
    "C001069":[0,0,0,0,4,4,-3,3,8,"Rep","Joe","Courtney","D","CT",2,"RepJoeCourtney","repcourtney","330408799230"  ],
    "C001070":[0,0,0,0,0,0,0,0,0,"Sen","Robert","Casey","D","PA",null,"SenBobCasey","SenatorBobCasey","107749545944874"  ],
    "C001071":[0,0,0,0,0,0,0,0,0,"Sen","Bob","Corker","R","TN",null,"SenBobCorker","senatorcorker","109251415789533"  ],
    "C001072":[0,0,0,0,4,4,-3,3,8,"Rep","André","Carson","D","IN",7,"RepAndreCarson","repandrecarson","123884330964019"  ],
    "C001075":[0,0,0,0,0,4,-3,3,4,"Rep","Bill","Cassidy","R","LA",6,"","RepBillCassidy",""  ],
    "C001076":[0,0,0,0,0,4,-3,3,4,"Rep","Jason","Chaffetz","R","UT",3,"JasonInTheHouse","JasonChaffetz","390419731073316"  ],
    "C001077":[0,0,0,0,4,4,-3,3,8,"Rep","Mike","Coffman","R","CO",6,"RepMikeCoffman","CongressmanCoffman","366142384492"  ],
    "C001078":[0,0,0,0,0,4,-3,3,4,"Rep","Gerald","Connolly","D","VA",11,"GerryConnolly","repconnolly","177164035838"  ],
    "C001080":[0,0,0,0,4,4,-3,3,8,"Rep","Judy","Chu","D","CA",27,"RepJudyChu","RepJudyChu","41228315130"  ],
    "C001083":[0,0,0,0,0,0,-3,3,0,"Rep","John","Carney","D","DE",0,"JohnCarneyde","RepJohnCarney","156024857781159"  ],
    "C001084":[0,0,0,0,4,4,-3,3,8,"Rep","David","Cicilline","D","RI",1,"RepCicilline","RepDavidCicilline","186949061341027"  ],
    "C001087":[0,0,0,0,0,0,-3,0,-3,"Rep","Eric","Crawford","R","AR",1,"RepRickCrawford","RepRickCrawford","143344975723788"  ],
    "C001088":[0,0,4,0,0,0,0,0,4,"Sen","Chris","Coons","D","DE",null,"SenCoonsOffice","senatorchriscoons","254950754518205"  ],
    "C001090":[0,0,0,0,0,4,0,3,7,"Rep","Matthew","Cartwright","D","PA",17,"RepCartwright","","248507065275406"  ],
    "C001091":[0,0,0,0,0,0,-3,3,0,"Rep","Joaquin","Castro","D","TX",20,"JoaquinCastrotx","JoaquinCastroTX","326420614138023"  ],
    "C001092":[0,0,0,0,0,0,-3,0,-3,"Rep","Chris","Collins","R","NY",27,"RepChrisCollins","RepChrisCollins","467047586692268"  ],
    "C001093":[0,0,0,0,0,0,-3,3,0,"Rep","Doug","Collins","R","GA",9,"RepDougCollins","repdougcollins","505646972800006"  ],
    "C001094":[0,0,0,0,0,0,-3,3,0,"Rep","Paul","Cook","R","CA",8,"RepPaulCook","RepPaulCook","464458413604093"  ],
    "C001095":[0,-4,0,0,0,0,-3,0,-7,"Rep","Tom","Cotton","R","AR",4,"RepTomCotton","RepTomCotton","120355701459307"  ],
    "C001096":[0,0,0,0,0,4,-3,3,4,"Rep","Kevin","Cramer","R","ND",0,"RepKevinCramer","kevincramer","498751820147706"  ],
    "C001097":[0,0,0,0,0,4,0,3,7,"Rep","Tony","Cárdenas","D","CA",29,"RepCardenas","repcardenas","485493954794945"  ],
    "C001098":[0,0,0,0,0,0,0,0,0,"Sen","Ted","Cruz","R","TX",null,"SenTedCruz","sentedcruz","315496455229328"  ],
    "C001101":[0,0,0,0,4,0,0,3,7,"Rep","Katherine","Clark","D","MA",5,"RepKClark","","1408040802774787"  ],
    "D000096":[0,0,0,0,0,4,0,3,7,"Rep","Danny","Davis","D","IL",7,"RepDannyDavis","dannykdavis07","280757931935749"  ],
    "D000191":[0,0,0,4,4,4,0,3,15,"Rep","Peter","DeFazio","D","OR",4,"RepPeterDeFazio","PeterDeFazio","94324364811"  ],
    "D000197":[0,0,0,0,4,4,0,3,11,"Rep","Diana","DeGette","D","CO",1,"RepDianaDeGette","RepDianaDeGette","110757973488"  ],
    "D000216":[0,0,0,0,4,4,-3,3,8,"Rep","Rosa","DeLauro","D","CT",3,"RosaDeLauro","rosadelauro","181302611907634"  ],
    "D000355":[0,0,0,0,0,4,-3,3,4,"Rep","John","Dingell","D","MI",12,"John_Dingell","","87490183861"  ],
    "D000399":[0,0,0,4,0,4,0,3,11,"Rep","Lloyd","Doggett","D","TX",35,"RepLloydDoggett","doggett","154050553704"  ],
    "D000482":[0,0,0,0,4,4,0,3,11,"Rep","Michael","Doyle","D","PA",14,"USRepMikeDoyle","CongressmanDoyle","79663724861"  ],
    "D000533":[0,0,0,0,4,4,-3,3,8,"Rep","John","Duncan","R","TN",2,"RepJohnDuncanJr","RepJohnDuncan","102385999834718"  ],
    "D000563":[0,0,4,0,0,0,0,0,4,"Sen","Richard","Durbin","D","IL",null,"SenatorDurbin","SenatorDurbin","180436795325335"  ],
    "D000598":[0,0,0,0,0,0,-3,3,0,"Rep","Susan","Davis","D","CA",53,"RepSusanDavis","","103767526332478"  ],
    "D000600":[0,0,0,0,0,0,-3,0,-3,"Rep","Mario","Diaz-Balart","R","FL",25,"MarioDB","MarioDiazBalart","119538428117878"  ],
    "D000604":[0,0,0,0,0,0,-3,0,-3,"Rep","Charles","Dent","R","PA",15,"","CongressmanDent","69862092533"  ],
    "D000607":[0,0,0,0,0,0,0,0,0,"Sen","Joe","Donnelly","D","IN",null,"SenDonnelly","sendonnelly","168059529893610"  ],
    "D000610":[0,0,0,0,4,4,-3,3,8,"Rep","Theodore","Deutch","D","FL",21,"RepTedDeutch","congressmanteddeutch","112179098816942"  ],
    "D000612":[0,0,0,0,0,0,-3,0,-3,"Rep","Jeff","Denham","R","CA",10,"RepJeffDenham","repjeffdenham","133714040028137"  ],
    "D000614":[0,0,0,0,4,4,0,3,11,"Rep","Sean","Duffy","R","WI",7,"RepSeanDuffy","RepSeanDuffy","119657691436457"  ],
    "D000615":[0,0,0,0,4,4,0,3,11,"Rep","Jeff","Duncan","R","SC",3,"RepJeffDuncan","congjeffduncan","187268144624279"  ],
    "D000616":[0,0,0,0,0,4,0,3,7,"Rep","Scott","DesJarlais","R","TN",4,"DesJarlaisTN04","ScottDesJarlaisTN04","ScottDesJarlaisTN04"  ],
    "D000617":[0,0,0,0,4,4,0,3,11,"Rep","Suzan","DelBene","D","WA",1,"RepDelBene","","483962224987343"  ],
    "D000618":[0,0,0,0,4,4,0,3,11,"Rep","Steve","Daines","R","MT",0,"SteveDaines","SteveDainesMT","185361254941832"  ],
    "D000619":[0,0,0,0,0,4,-3,0,1,"Rep","Rodney","Davis","R","IL",13,"RodneyDavis","RepRodneyDavis","323631667743052"  ],
    "D000620":[0,0,0,0,0,0,-3,0,-3,"Rep","John","Delaney","D","MD",6,"RepJohnDelaney","repjohndelaney","324527257655694"  ],
    "D000621":[0,0,0,0,0,4,-3,3,4,"Rep","Ron","DeSantis","R","FL",6,"RepDeSantis","RepRonDeSantis","464253846966014"  ],
    "D000622":[0,0,0,0,0,0,-3,0,-3,"Rep","Tammy","Duckworth","D","IL",8,"RepDuckworth","repduckworth","112300955610529"  ],
    "E000179":[0,0,0,0,0,0,-3,3,0,"Rep","Eliot","Engel","D","NY",16,"RepEliotEngel","engel2161","103355984852"  ],
    "E000215":[0,0,0,0,4,4,0,3,11,"Rep","Anna","Eshoo","D","CA",18,"RepAnnaEshoo","RepAnnaEshoo","174979964227"  ],
    "E000285":[0,0,0,0,0,0,0,0,0,"Sen","Michael","Enzi","R","WY",null,"SenatorEnzi","senatorenzi","23068049436"  ],
    "E000288":[0,0,0,0,4,4,0,3,11,"Rep","Keith","Ellison","D","MN",5,"KeithEllison","RepKeithEllison","7997462059"  ],
    "E000290":[0,0,0,0,0,4,0,3,7,"Rep","Donna","Edwards","D","MD",4,"RepDonnaEdwards","RepDonnaFEdwards","107297211756"  ],
    "E000291":[0,0,0,0,0,0,-3,0,-3,"Rep","Renee","Ellmers","R","NC",2,"RepReneeEllmers","repreneeellmers","167641493275000"  ],
    "E000292":[0,0,0,0,4,0,-3,3,4,"Rep","William","Enyart","D","IL",12,"RepBillEnyart","CongBillEnyart","527281100637880"  ],
    "E000293":[0,0,0,0,0,0,-3,3,0,"Rep","Elizabeth","Esty","D","CT",5,"RepEsty","RepEsty","292076514228382"  ],
    "F000010":[0,0,0,0,0,0,0,0,0,"Del","Eni","Faleomavaega","D","AS",0,"EFaleomavaega","","617466718276952"  ],
    "F000030":[0,0,0,0,4,4,0,3,11,"Rep","Sam","Farr","D","CA",20,"RepSamFarr","CongressmanSamFarr","7018136294"  ],
    "F000043":[0,0,0,0,0,4,0,3,7,"Rep","Chaka","Fattah","D","PA",2,"ChakaFattah","ChakaFattah","165961823475034"  ],
    "F000062":[-4,0,0,0,0,0,0,0,-4,"Sen","Dianne","Feinstein","D","CA",null,"SenFeinstein","SenatorFeinstein","334887279867783"  ],
    "F000372":[0,0,0,0,0,0,-3,0,-3,"Rep","Rodney","Frelinghuysen","R","NJ",11,"USRepRodney","RepFrelinghuysen","191509977669708"  ],
    "F000444":[0,0,0,0,0,0,0,0,0,"Sen","Jeff","Flake","R","AZ",null,"JeffFlake","flakeoffice","senatorjeffflake"  ],
    "F000445":[0,0,0,0,0,0,-3,0,-3,"Rep","J.","Forbes","R","VA",4,"Randy_Forbes","RepRandyForbes","356330225020"  ],
    "F000448":[0,0,0,0,0,0,-3,0,-3,"Rep","Trent","Franks","R","AZ",8,"RepTrentFranks","","209486545087"  ],
    "F000449":[0,0,0,0,0,0,-3,3,0,"Rep","Jeff","Fortenberry","R","NE",1,"JeffFortenberry","JeffFortenberry","48426842354"  ],
    "F000450":[0,0,0,0,0,0,-3,3,0,"Rep","Virginia","Foxx","R","NC",5,"VirginiaFoxx","repvirginiafoxx","RepVirginiaFoxx"  ],
    "F000451":[0,0,0,0,4,4,0,3,11,"Rep","Michael","Fitzpatrick","R","PA",8,"RepFitzpatrick","RepFitzpatrickPA8","132077153521454"  ],
    "F000454":[0,0,0,0,0,0,0,3,3,"Rep","Bill","Foster","D","IL",11,"RepBillFoster","RepBillFoster","102918290599"  ],
    "F000455":[0,0,0,0,0,4,-3,0,1,"Rep","Marcia","Fudge","D","OH",11,"RepMarciaFudge","marcialfudge","279006440801"  ],
    "F000456":[0,0,0,0,4,4,0,3,11,"Rep","John","Fleming","R","LA",4,"RepFleming","larep04","372154186772"  ],
    "F000457":[0,0,0,0,0,0,0,0,0,"Sen","Alan","Franken","D","MN",null,"","SenatorFranken",""  ],
    "F000458":[0,0,0,0,0,4,-3,3,4,"Rep","Stephen","Fincher","R","TN",8,"RepFincherTN08","CongressmanFincher","128861763849209"  ],
    "F000459":[0,0,0,0,0,4,-3,3,4,"Rep","Charles","Fleischmann","R","TN",3,"RepChuck","repchuck","189998554345168"  ],
    "F000460":[0,0,0,0,4,4,-3,3,8,"Rep","Blake","Farenthold","R","TX",27,"Farenthold","BlakeFarenthold","186894244673001"  ],
    "F000461":[0,0,0,0,0,0,-3,3,0,"Rep","Bill","Flores","R","TX",17,"RepBillFlores","RepBillFlores","146176682102245"  ],
    "F000462":[0,0,0,0,0,0,-3,0,-3,"Rep","Lois","Frankel","D","FL",22,"RepLoisFrankel","reploisfrankel","138220153003017"  ],
    "F000463":[0,0,0,0,0,0,0,0,0,"Sen","Deb","Fischer","R","NE",null,"SenatorFischer","senatordebfischer","531623656856934"  ],
    "G000289":[0,0,0,0,4,0,-3,0,1,"Rep","Bob","Goodlatte","R","VA",6,"RepGoodlatte","RepBobGoodlatte","6459789414"  ],
    "G000359":[0,0,0,0,0,0,0,0,0,"Sen","Lindsey","Graham","R","SC",null,"GrahamBlog","USSenLindseyGraham","257937783228"  ],
    "G000377":[0,0,0,0,0,0,-3,0,-3,"Rep","Kay","Granger","R","TX",12,"RepKayGranger","RepKayGranger","49640749719"  ],
    "G000386":[0,0,0,0,0,0,0,0,0,"Sen","Charles","Grassley","R","IA",null,"ChuckGrassley","senchuckgrassley","106480645796"  ],
    "G000410":[0,0,0,0,4,4,-3,3,8,"Rep","Gene","Green","D","TX",29,"RepGeneGreen","RepGeneGreen","128735131872"  ],
    "G000535":[0,0,0,0,0,0,-3,3,0,"Rep","Luis","Gutiérrez","D","IL",4,"LuisGutierrez","repluisgutierrez","91052833204"  ],
    "G000546":[0,0,0,0,0,0,-3,0,-3,"Rep","Sam","Graves","R","MO",6,"","","118514606128"  ],
    "G000548":[0,0,0,0,4,4,0,3,11,"Rep","Scott","Garrett","R","NJ",5,"RepGarrett","repscottgarrett","6756553401"  ],
    "G000549":[0,0,0,0,0,0,-3,0,-3,"Rep","Jim","Gerlach","R","PA",6,"JimGerlach","RepJimGerlach","123113211050305"  ],
    "G000550":[0,0,0,0,0,0,-3,0,-3,"Rep","Phil","Gingrey","R","GA",11,"RepPhilGingrey","RepPhilGingrey","6934467868"  ],
    "G000551":[0,0,0,4,4,4,0,3,15,"Rep","Raúl","Grijalva","D","AZ",3,"RepraulGrijalva","raulgrijalvaaz07","73539896233"  ],
    "G000552":[0,0,0,0,4,4,0,3,11,"Rep","Louie","Gohmert","R","TX",1,"RepLouieGohmert","GohmertTX01","50375006903"  ],
    "G000553":[0,0,0,0,0,0,-3,3,0,"Rep","Al","Green","D","TX",9,"RepAlGreen","RepAlGreen","136237609724391"  ],
    "G000555":[0,0,0,0,0,0,0,0,0,"Sen","Kirsten","Gillibrand","D","NY",null,"","KirstenEGillibrand",""  ],
    "G000556":[0,0,0,0,4,4,0,3,11,"Rep","Alan","Grayson","D","FL",9,"","repalangrayson",""  ],
    "G000558":[0,0,0,0,4,0,-3,3,4,"Rep","Brett","Guthrie","R","KY",2,"RepGuthrie","BrettGuthrie",""  ],
    "G000559":[0,0,0,0,4,4,-3,3,8,"Rep","John","Garamendi","D","CA",3,"RepGaramendi","garamendiCA10","182567716746"  ],
    "G000560":[0,0,0,0,4,4,0,3,11,"Rep","Tom","Graves","R","GA",14,"RepTomGraves","CongressmanGraves","104548906262119"  ],
    "G000562":[0,0,0,0,4,4,0,3,11,"Rep","Cory","Gardner","R","CO",4,"RepCoryGardner","CongressmanGardner","160924893954206"  ],
    "G000563":[0,0,0,0,0,0,-3,3,0,"Rep","Bob","Gibbs","R","OH",7,"RepBobGibbs","RepBobGibbs","191159267565100"  ],
    "G000564":[0,0,0,0,4,4,0,3,11,"Rep","Christopher","Gibson","R","NY",19,"RepChrisGibson","repchrisgibson","190238567659779"  ],
    "G000565":[0,0,0,0,4,4,0,3,11,"Rep","Paul","Gosar","R","AZ",4,"RepGosar","repgosar","104329699641957"  ],
    "G000566":[0,0,0,0,4,4,-3,3,8,"Rep","Trey","Gowdy","R","SC",4,"TGowdySC","TGowdySC","143059759084016"  ],
    "G000567":[0,0,0,0,4,4,-3,3,8,"Rep","Tim","Griffin","R","AR",2,"RepTimGriffin","",""  ],
    "G000568":[0,0,0,0,0,4,0,3,7,"Rep","H.","Griffith","R","VA",9,"RepMGriffith","RepMorganGriffith","141893975868919"  ],
    "G000569":[0,0,0,0,0,0,-3,0,-3,"Rep","Michael","Grimm","R","NY",11,"RepMichaelGrimm","",""  ],
    "G000571":[0,0,0,0,4,4,0,3,11,"Rep","Tulsi","Gabbard","D","HI",2,"TulsiPress","tulsipress","392284484191405"  ],
    "G000572":[0,0,0,0,0,0,-3,0,-3,"Rep","Pete","Gallego","D","TX",23,"RepPeteGallego","RepPeteGallego","123858487781636"  ],
    "G000573":[0,0,0,0,0,0,-3,3,0,"Rep","Joe","Garcia","D","FL",26,"RepJoeGarcia","repjoegarcia","378800468888204"  ],
    "H000067":[0,0,0,0,0,4,-3,3,4,"Rep","Ralph","Hall","R","TX",4,"RalphHallPress","","6311458773"  ],
    "H000206":[0,0,4,0,0,0,0,0,4,"Sen","Thomas","Harkin","D","IA",null,"SenatorHarkin","SenatorTomHarkin","252422916567"  ],
    "H000324":[0,0,0,0,0,4,0,3,7,"Rep","Alcee","Hastings","D","FL",20,"RepHastingsFL","RepAlceeHastings","95696782238"  ],
    "H000329":[0,0,0,0,0,0,-3,0,-3,"Rep","Doc","Hastings","R","WA",4,"DocHastings","RepDocHastings","7507129675"  ],
    "H000338":[0,0,0,0,0,0,0,0,0,"Sen","Orrin","Hatch","R","UT",null,"SenOrrinHatch","SenatorOrrinHatch",""  ],
    "H000636":[0,0,0,0,0,0,0,0,0,"Rep","Rubén","Hinojosa","D","TX",15,"USRepRHinojosa","RepRubenHinojosa","402891225161"  ],
    "H000874":[0,0,0,0,0,0,-3,0,-3,"Rep","Steny","Hoyer","D","MD",5,"WhipHoyer","LeaderHoyer","282861997886"  ],
    "H001032":[0,0,0,4,0,4,0,3,11,"Rep","Rush","Holt","D","NJ",12,"","RushHolt",""  ],
    "H001034":[0,0,0,0,4,4,0,3,11,"Rep","Michael","Honda","D","CA",17,"RepMikeHonda","RepMikeHonda","15675385380"  ],
    "H001036":[0,0,0,0,0,0,-3,3,0,"Rep","Jeb","Hensarling","R","TX",5,"RepHensarling","repjebhensarling","7875604788"  ],
    "H001038":[0,0,0,0,0,0,-3,3,0,"Rep","Brian","Higgins","D","NY",26,"RepBrianHiggins","CongressmanHiggins","88144056440"  ],
    "H001041":[0,0,4,0,0,0,0,0,4,"Sen","Dean","Heller","R","NV",null,"SenDeanHeller","SenDeanHeller","325751330177"  ],
    "H001042":[0,0,4,0,0,0,0,0,4,"Sen","Mazie","Hirono","D","HI",null,"MazieHirono","CongresswomanHirono",""  ],
    "H001045":[0,0,0,0,0,0,-3,3,0,"Rep","Gregg","Harper","R","MS",3,"GreggHarper","congressmanharper","48248435938"  ],
    "H001046":[0,0,4,0,0,0,0,0,4,"Sen","Martin","Heinrich","D","NM",null,"MartinHeinrich","SenMartinHeinrich","137523189213"  ],
    "H001047":[0,0,0,0,0,0,-3,0,-3,"Rep","James","Himes","D","CT",4,"JAHimes","congressmanhimes","85767418619"  ],
    "H001048":[0,0,0,0,4,0,-3,3,4,"Rep","Duncan","Hunter","R","CA",50,"Rep_Hunter","CongressmanHunter","79072979038"  ],
    "H001049":[0,0,0,0,0,0,0,0,0,"Sen","Kay","Hagan","D","NC",null,"SenatorHagan","SenatorHagan","7871449189"  ],
    "H001050":[0,0,0,0,4,0,0,3,7,"Rep","Colleen","Hanabusa","D","HI",1,"RepHanabusa","rephanabusa","169979129710178"  ],
    "H001051":[0,0,0,0,0,0,0,3,3,"Rep","Richard","Hanna","R","NY",22,"RepRichardHanna","reprichardhanna","172284859480630"  ],
    "H001052":[0,0,0,0,0,4,0,3,7,"Rep","Andy","Harris","R","MD",1,"RepAndyHarrisMD","RepAndyHarris","508912729153334"  ],
    "H001053":[0,0,0,0,0,0,-3,0,-3,"Rep","Vicky","Hartzler","R","MO",4,"RepHartzler","repvickyhartzler","183580061667324"  ],
    "H001055":[0,0,0,0,0,0,-3,0,-3,"Rep","Joseph","Heck","R","NV",3,"RepJoeHeck","repjoeheck","155211751194624"  ],
    "H001056":[0,0,0,0,4,0,-3,3,4,"Rep","Jaime","Herrera Beutler","R","WA",3,"HerreraBeutler","RepHerreraBeutler","177551525610164"  ],
    "H001057":[0,0,0,0,4,4,0,3,11,"Rep","Tim","Huelskamp","R","KS",1,"CongHuelskamp","congressmanhuelskamp","congressmanhuelskamp"  ],
    "H001058":[0,0,0,0,0,4,-3,3,4,"Rep","Bill","Huizenga","R","MI",2,"RepHuizenga","RepHuizenga","145764842143763"  ],
    "H001059":[0,0,0,0,0,4,-3,3,4,"Rep","Randy","Hultgren","R","IL",14,"RepHultgren","rephultgren","186221644739359"  ],
    "H001060":[0,0,0,0,0,0,-3,3,0,"Rep","Robert","Hurt","R","VA",5,"RepRobertHurt","RepRobertHurt","120068161395562"  ],
    "H001061":[0,0,0,0,0,0,0,0,0,"Sen","John","Hoeven","R","ND",null,"SenJohnHoeven","senatorjohnhoevennd","194483057244478"  ],
    "H001063":[0,0,0,0,0,4,0,3,7,"Rep","Janice","Hahn","D","CA",44,"Rep_JaniceHahn","RepJaniceHahn","256471267712118"  ],
    "H001064":[0,0,0,0,0,0,-3,3,0,"Rep","Denny","Heck","D","WA",10,"RepDennyHeck","RepDennyHeck","547907568553615"  ],
    "H001065":[0,0,0,0,0,0,-3,0,-3,"Rep","George","Holding","R","NC",13,"RepHolding","repholding","384164668340890"  ],
    "H001066":[0,0,0,0,4,0,0,3,7,"Rep","Steven","Horsford","D","NV",4,"RepHorsford","RepHorsford","321461017954658"  ],
    "H001067":[0,0,0,0,0,0,-3,3,0,"Rep","Richard","Hudson","R","NC",8,"RepRichHudson","RepRichHudson","212153802255530"  ],
    "H001068":[0,0,0,0,4,4,-3,3,8,"Rep","Jared","Huffman","D","CA",2,"RepHuffman","rephuffman","200227780116038"  ],
    "H001069":[0,0,0,0,0,0,0,0,0,"Sen","Heidi","Heitkamp","D","ND",null,"SenatorHeitkamp","senatorheidiheitkamp","501810613175643"  ],
    "I000024":[0,0,0,0,0,0,0,0,0,"Sen","James","Inhofe","R","OK",null,"InhofePress","jiminhofepressoffice","55018309421"  ],
    "I000055":[0,0,0,0,0,0,0,0,0,"Sen","John","Isakson","R","GA",null,"SenatorIsakson","SenatorIsakson",""  ],
    "I000056":[0,0,0,0,4,0,0,3,7,"Rep","Darrell","Issa","R","CA",49,"DarrellIssa","repdarrellissa","19463427992"  ],
    "I000057":[0,0,0,0,0,0,-3,0,-3,"Rep","Steve","Israel","D","NY",3,"RepSteveIsrael","repsteveisrael","RepSteveIsrael"  ],
    "J000032":[0,0,0,0,4,0,-3,3,4,"Rep","Sheila","Jackson Lee","D","TX",18,"JacksonLeeTX18","TX18SJL","169479190984"  ],
    "J000126":[0,0,0,0,0,0,-3,3,0,"Rep","Eddie","Johnson","D","TX",30,"RepEBJ","RepEddieBJohnson","84096022067"  ],
    "J000174":[0,0,0,0,0,0,-3,3,0,"Rep","Sam","Johnson","R","TX",3,"SamsPressShop","RepSamJohnson","52454091867"  ],
    "J000177":[0,0,0,0,0,0,0,0,0,"Sen","Tim","Johnson","D","SD",null,"SenJohnsonSD","senatorjohnson","181659658522485"  ],
    "J000255":[0,0,0,0,4,4,0,3,11,"Rep","Walter","Jones","R","NC",3,"RepWalterJones","RepWalterJones","15083070102"  ],
    "J000288":[0,0,0,0,4,0,-3,3,4,"Rep","Henry","Johnson","D","GA",4,"RepHankJohnson","RepHankJohnson","115356957005"  ],
    "J000289":[0,0,0,0,4,4,0,3,11,"Rep","Jim","Jordan","R","OH",4,"Jim_Jordan","RepJimJordan","35499336459"  ],
    "J000290":[0,0,0,0,0,4,-3,3,4,"Rep","Lynn","Jenkins","R","KS",2,"RepLynnJenkins","RepLynnJenkins","6974973662"  ],
    "J000291":[0,0,0,0,0,0,0,0,0,"Sen","Mike","Johanns","R","NE",null,"Mike_Johanns","SenatorMikeJohanns","399357233834"  ],
    "J000292":[0,0,0,0,0,4,-3,0,1,"Rep","Bill","Johnson","R","OH",6,"RepBillJohnson","RepBillJohnson","170477096312258"  ],
    "J000293":[0,0,0,0,0,0,0,0,0,"Sen","Ron","Johnson","R","WI",null,"SenRonJohnson","SenatorRonJohnson","186181661410703"  ],
    "J000294":[0,0,0,0,4,4,0,3,11,"Rep","Hakeem","Jeffries","D","NY",8,"RepJeffries","","118349138343701"  ],
    "J000295":[0,0,0,0,0,0,-3,0,-3,"Rep","David","Joyce","R","OH",14,"RepDaveJoyce","repdavejoyce","404318572981934"  ],
    "J000296":[0,0,0,0,0,0,-3,0,-3,"Rep","David","Jolly","R","FL",13,"USRepDavidJolly","","712496765463007"  ],
    "K000009":[0,0,0,0,0,0,0,3,3,"Rep","Marcy","Kaptur","D","OH",9,"RepMarcyKaptur","USRepMarcyKaptur","173753129419169"  ],
    "K000188":[0,0,0,0,0,0,-3,3,0,"Rep","Ron","Kind","D","WI",3,"RepRonKind","RepRonKind","89152017954"  ],
    "K000210":[0,-4,0,0,0,0,-3,0,-7,"Rep","Peter","King","R","NY",2,"RepPeteKing","RepPeterKing",""  ],
    "K000220":[0,0,0,0,4,4,0,3,11,"Rep","Jack","Kingston","R","GA",1,"JackKingston","jackkingston","6914617307"  ],
    "K000360":[0,0,0,0,0,0,0,0,0,"Sen","Mark","Kirk","R","IL",null,"SenatorKirk","SenatorKirk","116381528428230"  ],
    "K000362":[0,0,0,0,0,0,0,3,3,"Rep","Steve","King","R","IA",4,"SteveKingIA","stevekingia","134325379926458"  ],
    "K000363":[0,0,0,0,0,0,-3,0,-3,"Rep","John","Kline","R","MN",2,"RepJohnKline","repjohnkline","770135879667732"  ],
    "K000367":[0,0,0,0,0,0,0,0,0,"Sen","Amy","Klobuchar","D","MN",null,"","senatorklobuchar",""  ],
    "K000368":[0,0,0,0,0,0,-3,0,-3,"Rep","Ann","Kirkpatrick","D","AZ",1,"RepKirkpatrick","repannkirkpatrick","152493768236405"  ],
    "K000375":[0,0,0,0,4,4,0,3,11,"Rep","William","Keating","D","MA",9,"USRepKeating","RepBillKeating","183092598372008"  ],
    "K000376":[0,0,0,0,0,0,-3,0,-3,"Rep","Mike","Kelly","R","PA",3,"MikeKellyPA","repmikekelly","191056827594903"  ],
    "K000378":[0,0,0,0,0,0,-3,0,-3,"Rep","Adam","Kinzinger","R","IL",16,"RepKinzinger","RepAdamKinzinger","187811174579106"  ],
    "K000379":[0,0,0,0,4,0,-3,0,1,"Rep","Joseph","Kennedy","D","MA",4,"RepJoeKennedy","","301936109927957"  ],
    "K000380":[0,0,0,0,0,4,-3,3,4,"Rep","Daniel","Kildee","D","MI",5,"RepDanKildee","RepDanKildee","484166588292670"  ],
    "K000381":[0,0,0,0,0,0,-3,3,0,"Rep","Derek","Kilmer","D","WA",6,"RepDerekKilmer","","450819048314124"  ],
    "K000382":[0,0,0,0,4,0,-3,3,4,"Rep","Ann","Kuster","D","NH",2,"RepAnnieKuster","RepKuster","115543081952049"  ],
    "K000383":[0,0,0,0,0,0,0,0,0,"Sen","Angus","King","I","ME",null,"SenAngusKing","SenatorAngusKing","142803045874943"  ],
    "K000384":[0,0,0,0,0,0,0,0,0,"Sen","Timothy","Kaine","D","VA",null,"SenKaineOffice","SenatorTimKaine","482778861771212"  ],
    "K000385":[0,0,0,0,0,0,-3,3,0,"Rep","Robin","Kelly","D","IL",2,"RepRobinKelly","","150380975141321"  ],
    "L000111":[0,0,0,0,0,0,-3,0,-3,"Rep","Tom","Latham","R","IA",3,"TomLatham","CongressmanTomLatham","345331988887412"  ],
    "L000174":[0,0,4,0,0,0,0,0,4,"Sen","Patrick","Leahy","D","VT",null,"SenatorLeahy","SenatorPatrickLeahy","178569152181267"  ],
    "L000261":[0,0,0,0,0,0,0,0,0,"Sen","Carl","Levin","D","MI",null,"SenCarlLevin","SenCarlLevin","7481814545"  ],
    "L000263":[0,0,0,0,0,0,-3,0,-3,"Rep","Sander","Levin","D","MI",9,"RepSandyLevin","mi12yes","223726364320243"  ],
    "L000287":[0,0,0,0,4,4,0,3,11,"Rep","John","Lewis","D","GA",5,"RepJohnLewis","repjohnlewis","82737208404"  ],
    "L000397":[0,0,0,0,4,4,0,3,11,"Rep","Zoe","Lofgren","D","CA",19,"RepZoeLofgren","RepZoeLofgren","221191600719"  ],
    "L000480":[0,0,0,0,0,0,-3,3,0,"Rep","Nita","Lowey","D","NY",17,"NitaLowey","nitalowey","158290607551599"  ],
    "L000491":[0,0,0,0,0,0,-3,0,-3,"Rep","Frank","Lucas","R","OK",3,"RepFrankLucas","RepFrankLucas","7872057395"  ],
    "L000550":[0,0,0,0,0,0,0,0,0,"Sen","Mary","Landrieu","D","LA",null,"SenLandrieu","senatorlandrieu","122518851125820"  ],
    "L000551":[0,0,0,4,4,4,0,3,15,"Rep","Barbara","Lee","D","CA",13,"RepBarbaraLee","RepLee","92190287786"  ],
    "L000554":[0,-4,0,0,0,0,-3,0,-7,"Rep","Frank","LoBiondo","R","NJ",2,"RepLoBiondo","USRepFrankLoBiondo","FrankLoBiondo"  ],
    "L000557":[0,0,0,0,0,4,-3,3,4,"Rep","John","Larson","D","CT",1,"RepJohnLarson","RepJohnLarson","6352928631"  ],
    "L000559":[0,-4,0,0,0,0,-3,0,-7,"Rep","James","Langevin","D","RI",2,"JimLangevin","jimlangevin","6578978441"  ],
    "L000560":[0,0,0,0,4,0,-3,3,4,"Rep","Rick","Larsen","D","WA",2,"RepRickLarsen","congressmanlarsen","135654683137079"  ],
    "L000562":[0,0,0,0,4,4,-3,3,8,"Rep","Stephen","Lynch","D","MA",8,"RepStephenLynch","RepLynch","133720816696865"  ],
    "L000563":[0,0,0,0,0,0,-3,0,-3,"Rep","Daniel","Lipinski","D","IL",3,"RepLipinski","lipinski03","103286879730089"  ],
    "L000564":[0,0,0,0,0,4,-3,3,4,"Rep","Doug","Lamborn","R","CO",5,"RepDLamborn","CongressmanLamborn","45059452286"  ],
    "L000565":[0,0,0,0,0,4,-3,3,4,"Rep","David","Loebsack","D","IA",2,"DaveLoebsack","congressmanloebsack","291731316748"  ],
    "L000566":[0,0,0,0,0,0,-3,3,0,"Rep","Robert","Latta","R","OH",5,"BobLatta","CongressmanBobLatta","100000004848334"  ],
    "L000567":[0,0,0,0,4,0,-3,3,4,"Rep","Leonard","Lance","R","NJ",7,"RepLanceNJ7","CongressmanLance","100830109970339"  ],
    "L000569":[0,0,0,0,4,0,-3,3,4,"Rep","Blaine","Luetkemeyer","R","MO",3,"RepBlainePress","BLuetkemeyer","1358702716"  ],
    "L000570":[0,0,0,0,4,4,-3,3,8,"Rep","Ben","Luján","D","NM",3,"RepBenRayLujan","Repbenraylujan","112962521120"  ],
    "L000571":[0,0,0,0,0,4,0,3,7,"Rep","Cynthia","Lummis","R","WY",0,"CynthiaLummis","CynthiaLummis","152754318103332"  ],
    "L000573":[0,0,0,0,4,4,0,3,11,"Rep","Raúl","Labrador","R","ID",1,"Raul_Labrador","RepLabrador","180970951936493"  ],
    "L000575":[0,0,0,0,0,0,-3,0,-3,"Rep","James","Lankford","R","OK",5,"RepLankford","replankford","130873066975024"  ],
    "L000576":[0,0,0,0,4,0,-3,0,1,"Rep","Billy","Long","R","MO",7,"USRepLong","MOdistrict7","139631049438354"  ],
    "L000577":[0,0,4,0,0,0,0,0,4,"Sen","Mike","Lee","R","UT",null,"SenMikeLee","senatormikelee","178081365556898"  ],
    "L000578":[0,0,0,0,4,4,-3,3,8,"Rep","Doug","LaMalfa","R","CA",1,"RepLaMalfa","RepLaMalfa",""  ],
    "L000579":[0,0,0,0,4,4,0,3,11,"Rep","Alan","Lowenthal","D","CA",47,"RepLowenthal","RepLowenthal","392631677490897"  ],
    "L000580":[0,0,0,0,0,4,-3,0,1,"Rep","Michelle","Lujan Grisham","D","NM",1,"RepLujanGrisham","RepLujanGrisham","191640657646128"  ],
    "M000087":[0,0,0,0,4,4,-3,3,8,"Rep","Carolyn","Maloney","D","NY",12,"RepMaloney","","397176447066236"  ],
    "M000133":[0,0,4,0,0,0,0,0,4,"Sen","Edward","Markey","D","MA",null,"MarkeyMemo","RepMarkey","6846731378"  ],
    "M000303":[0,0,0,0,0,0,0,0,0,"Sen","John","McCain","R","AZ",null,"SenJohnMcCain","SenatorJohnMcCain","6425923706"  ],
    "M000309":[0,0,0,0,0,0,-3,0,-3,"Rep","Carolyn","McCarthy","D","NY",4,"RepMcCarthyNY","CarolynMcCarthy",""  ],
    "M000312":[0,0,0,4,4,4,0,3,15,"Rep","James","McGovern","D","MA",2,"RepMcGovern","repjimmcgovern","148299805224565"  ],
    "M000355":[0,0,0,0,0,0,0,0,0,"Sen","Mitch","McConnell","R","KY",null,"McConnellPress","","mitchmcconnell"  ],
    "M000404":[0,0,0,0,4,4,-3,3,8,"Rep","Jim","McDermott","D","WA",7,"RepJimMcDermott","RepJimMcDermott","246418928093"  ],
    "M000485":[0,0,0,0,0,0,-3,3,0,"Rep","Mike","McIntyre","D","NC",7,"RepMikeMcIntyre","RepMikeMcIntyre","340903514856"  ],
    "M000508":[0,0,0,0,0,0,-3,0,-3,"Rep","Howard","McKeon","R","CA",25,"BuckMcKeon","BuckMcKeon","8138529578"  ],
    "M000639":[0,0,4,0,0,0,0,0,4,"Sen","Robert","Menéndez","D","NJ",null,"SenatorMenendez","SenatorMenendezNJ","349744811357"  ],
    "M000689":[0,0,0,0,4,4,-3,3,8,"Rep","John","Mica","R","FL",7,"","RepJohnMica","JohnMica"  ],
    "M000702":[0,0,0,0,0,0,0,0,0,"Sen","Barbara","Mikulski","D","MD",null,"SenatorBarb","senatormikulski","142890125771427"  ],
    "M000725":[0,0,0,0,0,4,0,3,7,"Rep","George","Miller","D","CA",11,"AskGeorge","RepGeorgeMiller","75298637905"  ],
    "M000933":[0,0,0,0,4,4,-3,3,8,"Rep","James","Moran","D","VA",8,"Jim_Moran","RepJamesPMoran","100123453059"  ],
    "M000934":[0,0,0,0,0,0,0,0,0,"Sen","Jerry","Moran","R","KS",null,"JerryMoran","senatorjerrymoran","171578807105"  ],
    "M001111":[0,0,0,0,0,0,0,0,0,"Sen","Patty","Murray","D","WA",null,"PattyMurray","SenatorPattyMurray",""  ],
    "M001137":[0,0,0,0,0,0,-3,3,0,"Rep","Gregory","Meeks","D","NY",5,"GregoryMeeks","gwmeeks","1557025818"  ],
    "M001139":[0,0,0,0,0,4,0,0,4,"Rep","Gary","Miller","R","CA",31,"RepGaryMiller","GaryGMiller","105352226181045"  ],
    "M001142":[0,0,0,0,0,0,-3,0,-3,"Rep","Jim","Matheson","D","UT",4,"RepJimMatheson","RepJimMatheson","131888123517015"  ],
    "M001143":[0,0,0,4,4,4,0,3,15,"Rep","Betty","McCollum","D","MN",4,"BettyMcCollum04","","153386471383393"  ],
    "M001144":[0,-4,0,0,0,0,-3,0,-7,"Rep","Jeff","Miller","R","FL",1,"","RepJeffMiller","66367876671"  ],
    "M001149":[0,0,0,0,4,4,-3,3,8,"Rep","Michael","Michaud","D","ME",2,"RepMikeMichaud","repmikemichaud","131279995382"  ],
    "M001150":[0,0,0,0,0,0,-3,3,0,"Rep","Candice","Miller","R","MI",10,"CandiceMiller","candicemi10","210401648605"  ],
    "M001151":[0,0,0,0,0,0,-3,0,-3,"Rep","Tim","Murphy","R","PA",18,"RepTimMurphy","TimMurphyPA18","105769762798552"  ],
    "M001153":[0,0,4,0,0,0,0,0,4,"Sen","Lisa","Murkowski","R","AK",null,"LisaMurkowski","senatormurkowski","25271170290"  ],
    "M001156":[0,0,0,0,0,4,-3,3,4,"Rep","Patrick","McHenry","R","NC",10,"PatrickMcHenry","CongressmanMcHenry","8045519803"  ],
    "M001157":[0,0,0,0,0,0,-3,0,-3,"Rep","Michael","McCaul","R","TX",10,"McCaulPressShop","MichaelTMcCaul","6355254859"  ],
    "M001158":[0,0,0,0,4,4,0,3,11,"Rep","Kenny","Marchant","R","TX",24,"RepKenMarchant","RepKennyMarchant","6349487899"  ],
    "M001159":[0,0,0,0,0,4,-3,3,4,"Rep","Cathy","McMorris Rodgers","R","WA",5,"CathyMcMorris","mcmorrisrodgers","321618789771"  ],
    "M001160":[0,0,0,0,4,4,-3,3,8,"Rep","Gwen","Moore","D","WI",4,"RepGwenMoore","RepGwenMoore","58864029545"  ],
    "M001163":[0,0,0,0,4,4,0,3,11,"Rep","Doris","Matsui","D","CA",6,"DorisMatsui","RepDorisMatsui","doris.matsui"  ],
    "M001165":[0,0,0,0,0,0,-3,0,-3,"Rep","Kevin","McCarthy","R","CA",23,"GOPWhip","repkevinmccarthy","51052893175"  ],
    "M001166":[0,0,0,0,0,0,-3,3,0,"Rep","Jerry","McNerney","D","CA",9,"RepMcNerney","RepJerryMcNerney","215241308510238"  ],
    "M001169":[0,0,0,0,0,0,0,0,0,"Sen","Christopher","Murphy","D","CT",null,"ChrisMurphyCT","senchrismurphy","19437978960"  ],
    "M001170":[0,0,0,0,0,0,0,0,0,"Sen","Claire","McCaskill","D","MO",null,"McCaskillOffice","SenatorMcCaskill","131498087618"  ],
    "M001171":[0,0,0,0,0,4,0,3,7,"Rep","Daniel","Maffei","D","NY",24,"RepDanMaffei","repdanmaffei","470842942980263"  ],
    "M001176":[0,0,4,0,0,0,0,0,4,"Sen","Jeff","Merkley","D","OR",null,"SenJeffMerkley","SenatorJeffMerkley","74374931545"  ],
    "M001177":[0,0,0,0,4,4,0,3,11,"Rep","Tom","McClintock","R","CA",4,"RepMcClintock","McClintockCA04","81125319109"  ],
    "M001179":[0,0,0,0,0,0,-3,0,-3,"Rep","Tom","Marino","R","PA",10,"RepTomMarino","RepMarino","144408762280226"  ],
    "M001180":[0,0,0,0,0,0,-3,3,0,"Rep","David","McKinley","R","WV",1,"RepMcKinley","RepDavidMcKinley","130377260362609"  ],
    "M001181":[0,0,0,0,0,0,-3,0,-3,"Rep","Patrick","Meehan","R","PA",7,"RepMeehan","repmeehan","136000283132824"  ],
    "M001182":[0,0,0,0,4,4,0,0,8,"Rep","Mick","Mulvaney","R","SC",5,"RepMickMulvaney","RepMickMulvaney","188649667827713"  ],
    "M001183":[0,0,0,0,0,0,0,0,0,"Sen","Joe","Manchin","D","WV",null,"Sen_JoeManchin","SenatorJoeManchin","10150135395755161"  ],
    "M001184":[0,0,0,0,4,4,0,3,11,"Rep","Thomas","Massie","R","KY",4,"RepThomasMassie","repthomasmassie","452480994776070"  ],
    "M001185":[0,0,0,0,0,0,-3,3,0,"Rep","Sean","Maloney","D","NY",18,"RepSeanMaloney","","551199354892891"  ],
    "M001187":[0,0,0,0,0,4,0,3,7,"Rep","Mark","Meadows","R","NC",11,"RepMarkMeadows","RepMarkMeadows","409882952423501"  ],
    "M001188":[0,0,0,0,0,0,-3,3,0,"Rep","Grace","Meng","D","NY",6,"RepGraceMeng","","195734010571362"  ],
    "M001189":[0,0,0,0,4,0,-3,0,1,"Rep","Luke","Messer","R","IN",6,"RepLukeMesser","RepLukeMesser","367444640018564"  ],
    "M001190":[0,0,0,0,4,4,-3,3,8,"Rep","Markwayne","Mullin","R","OK",2,"RepMullin","","453637624684399"  ],
    "M001191":[0,0,0,0,0,0,-3,0,-3,"Rep","Patrick","Murphy","D","FL",18,"RepMurphyFL","RepPatrickMurphyFL","317735028342371"  ],
    "M001192":[0,0,0,0,0,0,-3,3,0,"Rep","Vance","McAllister","R","LA",5,"RepMcAllister","","218352868343621"  ],
    "N000002":[0,0,0,0,4,4,-3,3,8,"Rep","Jerrold","Nadler","D","NY",10,"RepJerryNadler","congressmannadler","78291598977"  ],
    "N000015":[0,0,0,4,4,4,0,3,15,"Rep","Richard","Neal","D","MA",1,"RepRichardNeal","RepRichardENeal","325642654132598"  ],
    "N000032":[0,0,0,0,0,0,0,0,0,"Sen","Bill","Nelson","D","FL",null,"SenBillNelson","senbillnelson",""  ],
    "N000127":[0,0,0,0,0,4,0,3,7,"Rep","Richard","Nolan","D","MN",8,"USRepRickNolan","USRepRickNolan","388085277945339"  ],
    "N000147":[0,0,0,0,4,0,0,0,4,"Del","Eleanor","Norton","D","DC",0,"EleanorNorton","EleanorHNorton","61731840657"  ],
    "N000179":[0,0,0,0,4,4,-3,3,8,"Rep","Grace","Napolitano","D","CA",32,"GraceNapolitano","RepGraceNapolitano","163108420409412"  ],
    "N000181":[0,-4,0,0,0,0,-3,0,-7,"Rep","Devin","Nunes","R","CA",22,"Rep_DevinNunes","RepDevinNunes",""  ],
    "N000182":[0,0,0,0,0,0,-3,3,0,"Rep","Randy","Neugebauer","R","TX",19,"RandyNeugebauer","RandyNeugebauer","64137294987"  ],
    "N000184":[0,0,0,0,4,0,-3,3,4,"Rep","Kristi","Noem","R","SD",0,"RepKristiNoem","RepKristiNoem",""  ],
    "N000185":[0,0,0,0,4,4,-3,3,8,"Rep","Richard","Nugent","R","FL",11,"RepRichNugent","RepRichNugent","183541871674897"  ],
    "N000186":[0,0,0,0,0,0,-3,0,-3,"Rep","Alan","Nunnelee","R","MS",1,"RepAlanNunnelee","congressmannunnelee","144919278895639"  ],
    "N000187":[0,0,0,0,0,0,0,3,3,"Rep","Gloria","Negrete McLeod","D","CA",35,"RepMcLeod","NegreteMcLeod","282772691776629"  ],
    "O000168":[0,0,0,0,0,0,-3,3,0,"Rep","Pete","Olson","R","TX",22,"OlsonPressShop","","20718168936"  ],
    "O000169":[0,0,0,0,0,4,0,3,7,"Rep","William","Owens","D","NY",21,"BillOwensNY","RepBillOwens","132985523396856"  ],
    "O000170":[0,0,0,0,4,4,0,3,11,"Rep","Beto","O'Rourke","D","TX",16,"RepBetoORourke","betoorourketx16","460776160654909"  ],
    "P000034":[0,0,0,0,0,0,0,3,3,"Rep","Frank","Pallone","D","NJ",6,"FrankPallone","repfrankpallone","6517277731"  ],
    "P000096":[0,0,0,0,0,4,-3,3,4,"Rep","Bill","Pascrell","D","NJ",9,"BillPascrell","RepPascrell","303312929155"  ],
    "P000099":[0,0,0,0,0,4,-3,3,4,"Rep","Ed","Pastor","D","AZ",7,"","",""  ],
    "P000197":[0,0,0,0,0,0,-3,3,0,"Rep","Nancy","Pelosi","D","CA",12,"NancyPelosi","nancypelosi","86574174383"  ],
    "P000258":[0,0,0,0,0,0,-3,0,-3,"Rep","Collin","Peterson","D","MN",7,"","","6595227967"  ],
    "P000265":[0,0,0,0,4,4,-3,3,8,"Rep","Thomas","Petri","R","WI",6,"","TomPetri","thomaspetri"  ],
    "P000373":[0,0,0,0,0,0,-3,0,-3,"Rep","Joseph","Pitts","R","PA",16,"RepJoePitts","congressmanjoepitts","94156528752"  ],
    "P000449":[0,0,0,0,0,0,0,0,0,"Sen","Robert","Portman","R","OH",null,"RobPortman","SenRobPortman","45243961073"  ],
    "P000523":[0,0,0,0,0,0,-3,3,0,"Rep","David","Price","D","NC",4,"RepDavidEPrice","RepDavidPrice",""  ],
    "P000588":[0,0,0,0,4,4,-3,0,5,"Rep","Stevan","Pearce","R","NM",2,"RepStevePearce","NMStevePearce","180280568662135"  ],
    "P000590":[0,0,0,0,0,0,0,0,0,"Sen","Mark","Pryor","D","AR",null,"SenMarkPryor","senatorpryor","9248638978"  ],
    "P000591":[0,0,0,0,0,4,-3,3,4,"Rep","Tom","Price","R","GA",6,"RepTomPrice","RepTomPrice","172032960420"  ],
    "P000592":[0,0,0,0,4,4,0,3,11,"Rep","Ted","Poe","R","TX",2,"JudgeTedPoe","CongressmanTedPoe","106631626049851"  ],
    "P000593":[0,0,0,0,0,4,-3,3,4,"Rep","Ed","Perlmutter","D","CO",7,"RepPerlmutter","RepPerlmutter","86174496459"  ],
    "P000594":[0,0,0,0,0,0,-3,3,0,"Rep","Erik","Paulsen","R","MN",3,"RepErikPaulsen","reperikpaulsen","128558293848160"  ],
    "P000595":[0,0,0,0,4,0,-3,3,4,"Rep","Gary","Peters","D","MI",14,"RepGaryPeters","RepGaryPeters","88851604323"  ],
    "P000596":[0,0,0,0,0,0,0,0,0,"Com","Pedro","Pierluisi","D","PR",0,"PedroPierluisi","PierluisiCongress","55139978107"  ],
    "P000597":[0,0,0,0,4,4,0,3,11,"Rep","Chellie","Pingree","D","ME",1,"ChelliePingree","congresswomanpingree","91529332807"  ],
    "P000598":[0,0,0,0,4,4,0,0,8,"Rep","Jared","Polis","D","CO",2,"JaredPolis","JaredPolis31275","53481427529"  ],
    "P000599":[0,0,0,0,0,4,0,3,7,"Rep","Bill","Posey","R","FL",8,"CongBillPosey","CongressmanPosey","100000080395369"  ],
    "P000601":[0,0,0,0,0,0,-3,3,0,"Rep","Steven","Palazzo","R","MS",4,"CongPalazzo","CongressmanPalazzo","186908658003781"  ],
    "P000602":[0,-4,0,0,0,0,-3,0,-7,"Rep","Mike","Pompeo","R","KS",4,"RepMikePompeo","congressmanpompeo","101965369880683"  ],
    "P000603":[0,0,0,0,0,0,0,0,0,"Sen","Rand","Paul","R","KY",null,"SenRandPaul","SenatorRandPaul","161355253917286"  ],
    "P000604":[0,0,0,0,0,0,-3,3,0,"Rep","Donald","Payne","D","NJ",10,"RepDonaldPayne","","360976767343741"  ],
    "P000605":[0,0,0,0,4,4,0,3,11,"Rep","Scott","Perry","R","PA",4,"RepScottPerry","RepScottPerry","376801102416184"  ],
    "P000606":[0,0,0,0,0,0,-3,0,-3,"Rep","Robert","Pittenger","R","NC",9,"RepPittenger","CongressmanPittenger","376142742468386"  ],
    "P000607":[0,0,0,4,4,4,-3,3,12,"Rep","Mark","Pocan","D","WI",2,"RepMarkPocan","repmarkpocan","436881033058309"  ],
    "P000608":[0,0,0,0,0,0,-3,0,-3,"Rep","Scott","Peters","D","CA",52,"RepScottPeters","","449337038470352"  ],
    "Q000023":[0,0,0,0,4,0,-3,3,4,"Rep","Mike","Quigley","D","IL",5,"RepMikeQuigley","RepMikeQuigley","158963645688"  ],
    "R000011":[0,0,0,0,0,4,-3,3,4,"Rep","Nick","Rahall","D","WV",3,"","NRAHALLWV03","357958026910"  ],
    "R000053":[0,0,0,0,0,4,-3,0,1,"Rep","Charles","Rangel","D","NY",13,"CBRangel","RepRangel","7390589055"  ],
    "R000122":[0,0,0,0,0,0,0,0,0,"Sen","John","Reed","D","RI",null,"SenJackReed","SenatorReed","213866375370646"  ],
    "R000146":[0,0,0,0,0,0,0,0,0,"Sen","Harry","Reid","D","NV",null,"SenatorReid","SenatorReid","360249323990357"  ],
    "R000307":[0,0,0,0,0,0,0,0,0,"Sen","Pat","Roberts","R","KS",null,"SenPatRoberts","SenPatRoberts","205694792808927"  ],
    "R000361":[0,0,0,0,0,0,0,0,0,"Sen","John","Rockefeller","D","WV",null,"SenRockefeller","SenatorRockefeller","134189283320639"  ],
    "R000395":[0,0,0,0,0,0,-3,0,-3,"Rep","Harold","Rogers","R","KY",5,"RepHalRogers","RepHalRogers","6722039085"  ],
    "R000409":[0,0,0,0,4,4,0,3,11,"Rep","Dana","Rohrabacher","R","CA",48,"","","78476240421"  ],
    "R000435":[0,0,0,0,0,0,-3,0,-3,"Rep","Ileana","Ros-Lehtinen","R","FL",27,"RosLehtinen","IleanaRosLehtinen","286546974761109"  ],
    "R000486":[0,0,0,0,0,4,-3,3,4,"Rep","Lucille","Roybal-Allard","D","CA",40,"RepRoybalAllard","RepRoybalAllard","139773069370563"  ],
    "R000487":[0,0,0,0,0,0,-3,0,-3,"Rep","Edward","Royce","R","CA",39,"RepEdRoyce","RepEdRoyce","6460640558"  ],
    "R000515":[0,0,0,0,0,4,0,0,4,"Rep","Bobby","Rush","D","IL",1,"RepBobbyRush","CongressmanRush","230753786936538"  ],
    "R000570":[0,0,0,0,0,0,-3,3,0,"Rep","Paul","Ryan","R","WI",1,"RepPaulRyan","reppaulryan","7123827676"  ],
    "R000572":[0,-4,0,0,0,0,-3,0,-7,"Rep","Mike","Rogers","R","MI",8,"RepMikeRogers","RepMikeRogers","168209963203416"  ],
    "R000575":[0,0,0,0,0,0,-3,0,-3,"Rep","Mike","Rogers","R","AL",3,"RepMikeRogersAL","MikeRogersAL03","171770326187035"  ],
    "R000576":[0,-4,0,0,0,0,-3,0,-7,"Rep","C.","Ruppersberger","D","MD",2,"Call_Me_Dutch","ruppersberger","184756771570504"  ],
    "R000577":[0,0,0,0,0,0,0,0,0,"Rep","Tim","Ryan","D","OH",13,"RepTimRyan","timryanvision","121560497865"  ],
    "R000578":[0,0,0,0,0,0,-3,0,-3,"Rep","David","Reichert","R","WA",8,"DaveReichert","repdavereichert","91504302598"  ],
    "R000580":[0,0,0,0,0,0,-3,0,-3,"Rep","Peter","Roskam","R","IL",6,"PeterRoskam","RoskamIL06","118777661469195"  ],
    "R000582":[0,0,0,0,4,4,0,3,11,"Rep","David","Roe","R","TN",1,"DrPhilRoe","drphilroe","130725126985966"  ],
    "R000583":[0,0,0,0,0,0,-3,3,0,"Rep","Thomas","Rooney","R","FL",17,"TomRooney","CongressmanRooney","117697790448"  ],
    "R000584":[0,0,0,0,0,0,0,0,0,"Sen","James","Risch","R","ID",null,"SenatorRisch","SenatorJamesRisch",""  ],
    "R000585":[0,0,0,0,0,0,-3,3,0,"Rep","Tom","Reed","R","NY",23,"RepTomReed","CongressmanTomReed","102449199835273"  ],
    "R000586":[0,0,0,0,0,0,-3,0,-3,"Rep","James","Renacci","R","OH",16,"RepJimRenacci","repjimrenacci","187639524595278"  ],
    "R000587":[0,0,0,0,4,4,0,3,11,"Rep","Reid","Ribble","R","WI",8,"RepRibble","RepRibble","157169920997203"  ],
    "R000588":[0,0,0,0,4,4,0,0,8,"Rep","Cedric","Richmond","D","LA",2,"RepRichmond","","197737020257085"  ],
    "R000589":[0,0,0,0,0,0,-3,0,-3,"Rep","Edward","Rigell","R","VA",2,"RepScottRigell","RepScottRigell","167851429918010"  ],
    "R000591":[0,0,0,0,0,0,-3,0,-3,"Rep","Martha","Roby","R","AL",2,"RepMarthaRoby","reproby","174519582574426"  ],
    "R000592":[0,0,0,0,4,0,0,3,7,"Rep","Todd","Rokita","R","IN",4,"ToddRokita","reptoddrokita","183180288372896"  ],
    "R000593":[0,0,0,0,0,4,-3,3,4,"Rep","Dennis","Ross","R","FL",15,"RepDennisRoss","RepDennisRoss","469477579757018"  ],
    "R000594":[0,0,0,0,0,0,-3,3,0,"Rep","Jon","Runyan","R","NJ",3,"RepJonRunyan","RepRunyan","177208315676754"  ],
    "R000595":[0,0,0,0,0,0,0,0,0,"Sen","Marco","Rubio","R","FL",null,"SenRubioPress","SenatorMarcoRubio","178910518800987"  ],
    "R000597":[0,0,0,0,0,4,-3,3,4,"Rep","Tom","Rice","R","SC",7,"RepTomRice","RepTomRice","403403083083104"  ],
    "R000598":[0,0,0,0,0,4,0,3,7,"Rep","Keith","Rothfus","R","PA",12,"KeithRothfus","reprothfus","133803223451004"  ],
    "R000599":[0,0,0,0,0,0,-3,3,0,"Rep","Raul","Ruiz","D","CA",36,"CongressmanRuiz","repraulruiz","245244468941114"  ],
    "S000018":[0,0,0,0,4,4,0,3,11,"Rep","Matt","Salmon","R","AZ",5,"RepMattSalmon","repmattsalmon","149561218527414"  ],
    "S000030":[0,0,0,0,0,4,0,3,7,"Rep","Loretta","Sanchez","D","CA",46,"LorettaSanchez","LorettaSanchezLive","90966961167"  ],
    "S000033":[0,0,0,0,0,0,0,0,0,"Sen","Bernard","Sanders","I","VT",null,"SenSanders","senatorsanders","9124187907"  ],
    "S000051":[0,0,0,0,4,4,0,3,11,"Rep","Marshall","Sanford","R","SC",1,"RepSanfordSC","RepSanfordSC","118387985037658"  ],
    "S000148":[0,0,0,0,0,0,0,0,0,"Sen","Charles","Schumer","D","NY",null,"ChuckSchumer","SenatorSchumer","15771239406"  ],
    "S000185":[0,0,0,0,4,4,-3,3,8,"Rep","Robert","Scott","D","VA",3,"RepBobbyScott","repbobbyscott","123839200978190"  ],
    "S000244":[0,0,0,0,4,4,-3,3,8,"Rep","F.","Sensenbrenner","R","WI",5,"JimPressOffice","RepSensenbrenner","RepSensenbrenner"  ],
    "S000248":[0,0,0,0,4,4,0,3,11,"Rep","José","Serrano","D","NY",15,"RepJoseSerrano","","273446508512"  ],
    "S000250":[0,0,0,0,0,0,-3,3,0,"Rep","Pete","Sessions","R","TX",32,"PeteSessions","PeteSessions","367963843082"  ],
    "S000320":[0,0,0,0,0,0,0,0,0,"Sen","Richard","Shelby","R","AL",null,"SenShelby","SenatorRichardShelby","50850514797"  ],
    "S000344":[0,0,0,0,4,4,-3,3,8,"Rep","Brad","Sherman","D","CA",30,"BradSherman","shermanca27","63158229861"  ],
    "S000364":[0,0,0,0,0,0,-3,3,0,"Rep","John","Shimkus","R","IL",15,"RepShimkus","repshimkus","123916254317516"  ],
    "S000480":[0,0,0,0,0,0,0,3,3,"Rep","Louise","Slaughter","D","NY",25,"LouiseSlaughter","louiseslaughter","82424647700"  ],
    "S000510":[0,0,0,0,0,0,0,3,3,"Rep","Adam","Smith","D","WA",9,"RepAdamSmith","CongressmanAdamSmith","288586617834523"  ],
    "S000522":[0,0,0,0,4,4,-3,3,8,"Rep","Christopher","Smith","R","NJ",4,"RepChrisSmith","USRepChrisSmith","371621772908416"  ],
    "S000583":[0,0,0,0,0,0,-3,0,-3,"Rep","Lamar","Smith","R","TX",21,"LamarSmithTX21","lamarsmithtexas21","107736785195"  ],
    "S000770":[0,0,0,0,0,0,0,0,0,"Sen","Debbie","Stabenow","D","MI",null,"StabenowPress","senatorstabenow",""  ],
    "S000937":[0,0,0,0,4,4,0,3,11,"Rep","Steve","Stockman","R","TX",36,"SteveWorks4You","SteveStockmanTX","316293171806077"  ],
    "S001141":[0,0,0,0,0,0,0,0,0,"Sen","Jefferson","Sessions","R","AL",null,"SenatorSessions","SenatorSessions","23444159584"  ],
    "S001145":[0,0,0,0,4,0,-3,3,4,"Rep","Janice","Schakowsky","D","IL",9,"JanSchakowsky","repschakowsky","160143957118"  ],
    "S001148":[0,0,0,0,0,0,-3,0,-3,"Rep","Michael","Simpson","R","ID",2,"CongMikeSimpson","CongMikeSimpson","96007744606"  ],
    "S001150":[0,0,0,0,0,4,-3,0,1,"Rep","Adam","Schiff","D","CA",28,"RepAdamSchiff","adamschiff","9086721830"  ],
    "S001154":[0,0,0,0,0,0,-3,3,0,"Rep","Bill","Shuster","R","PA",9,"RepBillShuster","repshuster","54386677806"  ],
    "S001156":[0,0,0,0,0,4,-3,3,4,"Rep","Linda","Sánchez","D","CA",38,"RepLindaSanchez","LindaTSanchez","110685735673141"  ],
    "S001157":[0,0,0,0,0,0,-3,3,0,"Rep","David","Scott","D","GA",13,"RepDavidScott","RepDavidScott","113303673339"  ],
    "S001162":[0,0,0,0,0,0,0,3,3,"Rep","Allyson","Schwartz","D","PA",13,"","repallysonschwartz","244000962363116"  ],
    "S001165":[0,0,0,0,0,0,-3,3,0,"Rep","Albio","Sires","D","NJ",8,"Rep_Albio_Sires","RepSiresNJ13","81058818750"  ],
    "S001168":[0,0,0,0,0,4,-3,3,4,"Rep","John","Sarbanes","D","MD",3,"RepJohnSarbanes","",""  ],
    "S001170":[0,0,0,0,4,4,0,3,11,"Rep","Carol","Shea-Porter","D","NH",1,"RepSheaPorter","RepCarolSheaPorter","422460677824474"  ],
    "S001172":[0,0,0,0,0,0,-3,3,0,"Rep","Adrian","Smith","R","NE",3,"RepAdrianSmith","RepAdrianSmith",""  ],
    "S001175":[0,0,0,0,4,4,0,3,11,"Rep","Jackie","Speier","D","CA",14,"RepSpeier","jackiespeierca12","99332606976"  ],
    "S001176":[0,0,0,0,0,4,-3,3,4,"Rep","Steve","Scalise","R","LA",1,"SteveScalise","RepSteveScalise","50936151681"  ],
    "S001177":[0,0,0,0,0,0,0,0,0,"Del","Gregorio","Sablan","D","MP",0,"","CongressmanSablan","153423912663"  ],
    "S001179":[0,0,0,0,0,0,-3,3,0,"Rep","Aaron","Schock","R","IL",18,"RepAaronSchock","repaaronschock","70882853544"  ],
    "S001180":[0,0,0,0,4,4,-3,3,8,"Rep","Kurt","Schrader","D","OR",5,"RepSchrader","repkurtschrader","94978896695"  ],
    "S001181":[0,0,0,0,0,0,0,0,0,"Sen","Jeanne","Shaheen","D","NH",null,"SenatorShaheen","senatorshaheen","127503767282103"  ],
    "S001183":[0,0,0,0,4,4,0,3,11,"Rep","David","Schweikert","R","AZ",6,"RepDavid","RepDavidSchweikert","150338151681908"  ],
    "S001184":[0,0,0,0,0,0,0,0,0,"Sen","Tim","Scott","R","SC",null,"SenatorTimScott","SenatorTimScott","163207553711385"  ],
    "S001185":[0,-4,0,0,0,0,-3,0,-7,"Rep","Terri","Sewell","D","AL",7,"RepTerriSewell","RepSewell","117758198297225"  ],
    "S001186":[0,0,0,0,0,4,-3,3,4,"Rep","Steve","Southerland","R","FL",2,"Rep_Southerland","RepSteveSoutherland","156234611092438"  ],
    "S001187":[0,0,0,0,0,0,-3,0,-3,"Rep","Steve","Stivers","R","OH",15,"RepSteveStivers","RepSteveStivers","116058275133542"  ],
    "S001188":[0,0,0,0,0,0,0,3,3,"Rep","Marlin","Stutzman","R","IN",3,"RepStutzman","repstutzman","109067049164902"  ],
    "S001189":[0,0,0,0,4,0,-3,3,4,"Rep","Austin","Scott","R","GA",8,"AustinScottGA08","RepAustinScott","131177916946914"  ],
    "S001190":[0,0,0,0,0,0,-3,3,0,"Rep","Bradley","Schneider","D","IL",10,"RepSchneider","RepBradSchneider","401029529980053"  ],
    "S001191":[0,0,0,0,0,0,-3,0,-3,"Rep","Kyrsten","Sinema","D","AZ",9,"RepSinema","repsinema","233846963416149"  ],
    "S001192":[0,0,0,0,4,4,-3,3,8,"Rep","Chris","Stewart","R","UT",2,"RepChrisStewart","repchrisstewart","242042855928904"  ],
    "S001193":[0,0,0,0,4,4,0,3,11,"Rep","Eric","Swalwell","D","CA",15,"RepSwalwell","ericswalwell","450130878375355"  ],
    "S001194":[0,0,4,0,0,0,0,0,4,"Sen","Brian","Schatz","D","HI",null,"SenBrianSchatz","senbrianschatz","357806137657533"  ],
    "S001195":[0,0,0,0,4,4,-3,3,8,"Rep","Jason","Smith","R","MO",8,"RepJasonSmith","RepJasonSmith","544741092252764"  ],
    "T000193":[0,0,0,0,4,4,0,0,8,"Rep","Bennie","Thompson","D","MS",2,"BennieGThompson","RepBennieThompson","7259193379"  ],
    "T000238":[0,0,0,0,0,0,-3,0,-3,"Rep","Mac","Thornberry","R","TX",13,"MacTXPress","RepMacThornberry","7760165627"  ],
    "T000250":[0,0,0,0,0,0,0,0,0,"Sen","John","Thune","R","SD",null,"SenJohnThune","johnthune",""  ],
    "T000266":[0,0,0,4,4,4,0,3,15,"Rep","John","Tierney","D","MA",6,"RepTierney","CongressmanTierney","203760666318846"  ],
    "T000459":[0,0,0,0,4,0,0,3,7,"Rep","Lee","Terry","R","NE",2,"LEETERRYNE","NebraskaTerry","393886975960"  ],
    "T000460":[0,-4,0,0,0,0,-3,0,-7,"Rep","Mike","Thompson","D","CA",5,"RepThompson","CongressmanMThompson","7109195747"  ],
    "T000461":[0,0,0,0,0,0,0,0,0,"Sen","Patrick","Toomey","R","PA",null,"SenToomey","sentoomey","189274047751251"  ],
    "T000462":[0,0,0,0,0,0,-3,0,-3,"Rep","Patrick","Tiberi","R","OH",12,"TiberiPress","PatTiberi","90452932937"  ],
    "T000463":[0,0,0,0,0,0,-3,0,-3,"Rep","Michael","Turner","R","OH",10,"RepMikeTurner","CongressmanTurner","9275036647"  ],
    "T000464":[0,0,4,0,0,0,0,0,4,"Sen","Jon","Tester","D","MT",null,"TesterPress","senatorjontester","210573031664"  ],
    "T000465":[0,0,0,0,4,4,-3,3,8,"Rep","Niki","Tsongas","D","MA",3,"NikiInTheHouse","RepTsongas","131079823624873"  ],
    "T000467":[0,0,0,0,4,4,-3,0,5,"Rep","Glenn","Thompson","R","PA",5,"CongressmanGT","CongressmanGT","14463006747"  ],
    "T000468":[0,0,0,0,0,0,-3,3,0,"Rep","Dina","Titus","D","NV",1,"RepDinaTitus","CongresswomanTitus","120660834778561"  ],
    "T000469":[0,0,0,0,4,4,0,3,11,"Rep","Paul","Tonko","D","NY",20,"RepPaulTonko","reppaultonko","30671144824"  ],
    "T000470":[0,0,0,0,0,4,0,3,7,"Rep","Scott","Tipton","R","CO",3,"RepTipton","RepScottTipton","191428784201721"  ],
    "T000472":[0,0,0,0,0,4,0,3,7,"Rep","Mark","Takano","D","CA",41,"RepMarkTakano","RepMarkTakano","262447300551014"  ],
    "U000031":[0,0,0,0,0,0,-3,0,-3,"Rep","Fred","Upton","R","MI",6,"RepFredUpton","RepFredUpton","212027388827797"  ],
    "U000038":[0,0,4,0,0,0,0,0,4,"Sen","Mark","Udall","D","CO",null,"MarkUdall","senatormarkudall","17204170252"  ],
    "U000039":[0,0,4,0,0,0,0,0,4,"Sen","Tom","Udall","D","NM",null,"SenatorTomUdall","senatortomudall","106433512869"  ],
    "V000081":[0,0,0,0,0,4,0,3,7,"Rep","Nydia","Velázquez","D","NY",7,"NydiaVelazquez","nydiavelazquez","8037068318"  ],
    "V000108":[0,0,0,0,0,0,0,0,0,"Rep","Peter","Visclosky","D","IN",1,"RepVisclosky","PeteVisclosky1","118723661514709"  ],
    "V000127":[0,0,0,0,0,0,0,0,0,"Sen","David","Vitter","R","LA",null,"","SenatorVitter",""  ],
    "V000128":[0,0,0,0,0,0,-3,3,0,"Rep","Chris","Van Hollen","D","MD",8,"ChrisVanHollen","RepChrisVanHollen","109304033877"  ],
    "V000129":[0,0,0,0,0,0,-3,0,-3,"Rep","David","Valadao","R","CA",21,"RepDavidValadao","congressmanvaladao","105596689621089"  ],
    "V000130":[0,0,0,0,0,0,-3,3,0,"Rep","Juan","Vargas","D","CA",51,"RepJuanVargas","RepJuanVargas","176942192453747"  ],
    "V000131":[0,0,0,0,0,0,-3,3,0,"Rep","Marc","Veasey","D","TX",33,"RepVeasey","marcveasey","394849110600016"  ],
    "V000132":[0,0,0,0,4,4,-3,3,8,"Rep","Filemon","Vela","D","TX",34,"RepFilemonVela","","510462622331477"  ],
    "W000187":[0,0,0,0,0,4,-3,3,4,"Rep","Maxine","Waters","D","CA",43,"MaxineWaters","MaxineWaters","117483585008"  ],
    "W000215":[0,0,0,0,0,4,0,3,7,"Rep","Henry","Waxman","D","CA",33,"WaxmanClimate","RepHenryWaxman","129514917081997"  ],
    "W000413":[0,0,0,0,0,0,-3,0,-3,"Rep","Ed","Whitfield","R","KY",1,"RepEdWhitfield","WhitfieldKY01","91115765425"  ],
    "W000437":[0,0,0,0,0,0,0,0,0,"Sen","Roger","Wicker","R","MS",null,"SenatorWicker","SenatorWicker","SenatorWicker"  ],
    "W000672":[0,0,0,0,0,0,-3,0,-3,"Rep","Frank","Wolf","R","VA",10,"RepWOLFPress","repfrankwolf","335759964938"  ],
    "W000779":[0,0,4,0,0,0,0,0,4,"Sen","Ron","Wyden","D","OR",null,"RonWyden","senronwyden",""  ],
    "W000791":[0,0,0,0,0,0,-3,0,-3,"Rep","Greg","Walden","R","OR",2,"RepGregWalden","RepGregWalden","313301365382225"  ],
    "W000795":[0,0,0,0,4,4,-3,0,5,"Rep","Joe","Wilson","R","SC",2,"","RepJoeWilson","70150469414"  ],
    "W000796":[0,-4,0,0,0,0,-3,0,-7,"Rep","Lynn","Westmoreland","R","GA",3,"RepWestmoreland","RepLynnWestmoreland","71389451419"  ],
    "W000797":[0,0,0,0,0,0,-3,0,-3,"Rep","Debbie","Wasserman Schultz","D","FL",23,"RepDWStweets","RepWassermanSchultz","88904724121"  ],
    "W000798":[0,0,0,0,0,0,-3,0,-3,"Rep","Tim","Walberg","R","MI",7,"RepWalberg","RepWalberg","187654104587692"  ],
    "W000799":[0,0,0,0,0,4,0,0,4,"Rep","Timothy","Walz","D","MN",1,"RepTimWalz","1529tjw",""  ],
    "W000800":[0,0,0,0,4,4,0,3,11,"Rep","Peter","Welch","D","VT",0,"PeterWelch","reppeterwelch","72680720883"  ],
    "W000802":[0,0,0,0,0,0,0,0,0,"Sen","Sheldon","Whitehouse","D","RI",null,"SenWhitehouse","SenatorWhitehouse","194172833926853"  ],
    "W000804":[0,0,0,0,4,0,-3,0,1,"Rep","Robert","Wittman","R","VA",1,"RobWittman","RobWittman","38932542633"  ],
    "W000805":[0,0,0,0,0,0,0,0,0,"Sen","Mark","Warner","D","VA",null,"MarkWarner","SenatorMarkWarner","7935122852"  ],
    "W000806":[0,0,0,0,0,0,-3,0,-3,"Rep","Daniel","Webster","R","FL",10,"RepWebster","repdanwebster","188572961157305"  ],
    "W000808":[0,0,0,0,0,0,-3,3,0,"Rep","Frederica","Wilson","D","FL",24,"RepWilson","repfredericawilson","162327487151626"  ],
    "W000809":[0,0,0,0,0,0,-3,0,-3,"Rep","Steve","Womack","R","AR",3,"Rep_SteveWomack","CongressmanWomack","135898413136490"  ],
    "W000810":[0,0,0,0,0,0,-3,3,0,"Rep","Rob","Woodall","R","GA",7,"","RobWoodallGA07","172573036140374"  ],
    "W000812":[0,0,0,0,0,0,-3,3,0,"Rep","Ann","Wagner","R","MO",2,"RepAnnWagner","","215485388588143"  ],
    "W000813":[0,0,0,0,0,0,0,3,3,"Rep","Jackie","Walorski","R","IN",2,"RepWalorski","repwalorski","466876036704525"  ],
    "W000814":[0,0,0,0,4,4,0,3,11,"Rep","Randy","Weber","R","TX",14,"TXRandy14","TXRandy14","128891177274584"  ],
    "W000815":[0,0,0,0,0,0,-3,3,0,"Rep","Brad","Wenstrup","R","OH",2,"RepBradWenstrup","repbradwenstrup","124462944390458"  ],
    "W000816":[0,0,0,0,0,4,-3,3,4,"Rep","Roger","Williams","R","TX",25,"RepRWilliams","","322383274535068"  ],
    "W000817":[0,0,4,0,0,0,0,0,4,"Sen","Elizabeth","Warren","D","MA",null,"SenWarren","senelizabethwarren","131559043673264"  ],
    "W000818":[0,0,4,0,0,0,0,0,4,"Sen","John","Walsh","D","MT",null,"SenWalshOffice","","582461281840409"  ],
    "Y000033":[0,0,0,0,4,4,-3,0,5,"Rep","Don","Young","R","AK",0,"RepDonYoung","RepDonYoung","7476269851"  ],
    "Y000062":[0,0,0,0,0,4,0,3,7,"Rep","John","Yarmuth","D","KY",3,"RepJohnYarmuth","RepJohnYarmuth","214258646163"  ],
    "Y000063":[0,0,0,0,4,4,-3,3,8,"Rep","Kevin","Yoder","R","KS",3,"RepKevinYoder","RepYoder","154026694650252"  ],
    "Y000064":[0,0,0,0,0,0,-3,0,-3,"Rep","Todd","Young","R","IN",9,"RepToddYoung","RepToddYoung","186203844738421"  ],
    "Y000065":[0,0,0,0,4,4,0,3,11,"Rep","Ted","Yoho","R","FL",3,"RepTedYoho","RepTedYoho","563532937006022"  ],
  }
  
  // I found some accounts which seem most likely to belong to a rep w/o any
  // other handle. This is the fallback.
  var repTwitterBackup = {
    "A000368":[ "KellyAyotte"],
    "B001245":[ ""],
    "C001037":[ "mikecapuano"],
    "C001049":[ "LacyClayMO1"],
    "C001075":[ "BillCassidy"],
    "D000604":[ "DentPressShop"],
    "F000457":[ "alfranken"],
    "G000546":[ "SmallBizGOP"],
    "G000555":[ "SenGillibrand"],
    "G000556":[ "AlanGrayson"],
    "H001032":[ "RushHolt"],
    "K000367":[ "amyklobuchar"],
    "M000689":[ "micaforcongress"],
    "M001144":[ "RepJeffMiller"],
    "P000099":[ "PastorForAZ"],
    "P000258":[ ""],
    "P000265":[ ""],
    "R000011":[ "HouseTransInf"],
    "R000409":[ "DanaRohrabacher"],
    "S001162":[ "allysonschwartz"],
    "S001177":[ ""],
    "V000127":[ "DavidVitter"],
    "W000795":[ "CongJoeWilson"],
    "W000810":[ "votewoodall"],
  }

  var partnerFilter = {
    'gp': ['Greenpeace', 'http://www.greenpeace.org/usa/en/about/Privacy-Policy/', 'greenpeaceusa'],
    'sf': ['Fight for the Future', 'http://sunlightfoundation.com/legal/privacy/', 'sunfoundation'],
    'fp': ['Free Press Action Fund', 'http://www.freepress.net/privacy-copyright', 'freepress'],
    'fftf': ['Sunlight Foundation', 'http://www.fightforthefuture.org/privacy/', 'fightfortheftr'],
    'dp': ['Demand Progress', 'http://www.demandprogress.org/privacy/', 'demandprogress'],
    'lp': ['Libertarian Party', 'http://www.lp.org/privacy-policy', 'lpnational'],
    'fw': ['FreedomWorks', 'http://freedomworksforamerica.org/privacy-policy', 'fwforamerica'],
    'tf': ['TechFreedom', 'http://techfreedom.org/privacypolicy', 'techfreedom'],
  }
  
  // Partner codes for twitter
  var recommendations = 'eff,greenpeaceusa,sunfoundation,freepress,fightfortheftr,demandprogress,lpnational,fwforamerica,techfreedom';
  
  // Sunlight API
  var sunlightKey = '3d4faf1bbaf64fa4906c6d9f9ce8c2cc';
  var sunlightURL = 'https://congress.api.sunlightfoundation.com/';
  
  // Smarty Streets API
  var smartyAuthToken = '3808417605462137740';
  var smartyURL = 'https://api.smartystreets.com/';
  
  // EFF API
  var effURL = 'https://act.eff.org/petition/43/recent_signatures';
  
  // Smarty Streets API helper functions.
  function smartyGetGeo(street, zip) {
    $('#lookup-controls').toggle();
    $('#reps-lookup-loader').toggle();
    sasSpinner('reps-lookup-loader');
    var req = smartyURL + 'street-address?auth-token=' + smartyAuthToken + '&street=' + street + '&zipcode=' + zip;
	  $.ajax({
      url: 'https://api.smartystreets.com/street-address',
      dataType: 'JSONP',
      data: {
        'auth-token': smartyAuthToken,
        'street': street,
        'zipCode': zip,
        'candidates': 1
      },
      success: function (data, status, xhr) {
        if (data[0] !=  null) {
          var long = data[0]['metadata']['longitude'];
          var lat = data[0]['metadata']['latitude'];
          sunlightGetDistricts(long, lat);
        }
        else {
          $('#lookup-error').html("No district found for that address.");
          $('#lookup-controls').toggle();
          $('#reps-lookup-loader').toggle();
        }
      },
    });
  }
  
  // Sunlight API helper functions.
  function sunlightGetDistricts(long, lat) {
    var html = '';
    var req = sunlightURL + '/legislators/locate?latitude=' + lat + '&longitude=' + long + '&apikey=' + sunlightKey;
    $.getJSON(req, function(data) {
      var results = data['results'];
      for (var i in results) {
        repCode = results[i]['bioguide_id'];
        html += sasRenderRep(repCode, results[i]);
      }
      // Write scorecards, hide lookup, show scorecard.
      $('#lookup-controls').toggle();
      $('#reps-lookup-loader').toggle();
      $('#reps-list-mine-scorecards').html(html);
      // Add Click event after .tweet-scorecard is in the DOM.
      addTwitterWindowEvent();
      $('#reps-lookup').toggle();
      $('#reps-list-mine').toggle();
      
    });
  }
  
  // EFF Recent Signers
  function effRecentSigners() {
    // Let's generate all html, so if there's a failure nothing displays.
    var html = '<h3>Recent Signatories</h3>';
    var req = effURL;
    $.ajax({
      url: effURL,
      success: function (data, status, xhr) {
        var sigsTotal = data.signatures_total;
        for (var i in data.signatories) {
          var fullName = '<div class="recent-sign-name">' + escapeHtml(data.signatories[i]['first_name']) + ' ' + escapeHtml(data.signatories[i]['last_name']) + '</div>';
          var country = '<div class="recent-sign-country">' + escapeHtml(data.signatories[i]['country_code']) + '</div>';
          var time = '<div class="recent-sign-time">' + escapeHtml(data.signatories[i]['time_ago']) + '</div>';
          var left = '<div class="recent-sign-left">' + fullName + country + '</div>';
          var right = '<div class="recent-sign-right">' + time + '</div>';
          html += '<div class="recent-sign-item">' + left + right + '</div>';
        }
        $('#recent-signatories').html(html);
      },
    });
  }
  
  // SAS Functions
  function sasGetFullName(repCode) {
    return reps[repCode][9] + '. ' + reps[repCode][10] + ' <span>' + reps[repCode][11] + '</span>';
  }
  function sasGetScore(repCode) {
    score = reps[repCode][8];
    var grade = '';
    
    if (score >= 4) {
      grade = 'A';
    }
    else if (score == 3.5){
      grade = 'B+';
    }
    else if (score == 3){
      grade = 'B';
    }
    else if (score == 2.5){
      grade = 'C+';
    }
    else if (score == 2){
      grade = 'C';
    }
    else if (score == 1.5){
      grade = 'D+';
    }
    else if (score == 1){
      grade = 'D';
    }
    else if (score <= .5){
      grade = 'F';
    }
    // Check for Senators w/ score of 0. @todo Architect better later
    if ((score == 0) && reps[repCode][9] == "Sen") {
      grade = '?';
    }
    return grade;
  }
  
  function sasGetTweetMessage(repCode) {
    score = reps[repCode][8];
    var handle = reps[repCode][15];
    var message = '';
    if (score >= 3) {
      message = 'Hi, @' + handle + '. Thank you for standing against NSA spying. Please ask your colleagues to join you.';
    }
    else if (score <= 2.5){
      message = 'Dear @' + handle + ': Your record on NSA reform is poor, but there’s still time. Stand against mass spying today.';
    }
    // Check for Senators w/ score of 0. @todo Architect better later
    if ((score == 0) && reps[repCode][9] == "Sen") {
      message = 'Dear @' + handle + ': please take a stand against NSA spying. We need you to champion real reform.';
    }
    message += ' https://eff.org/score';
    return message;
  }
  
  function sasRenderRep(repCode, sunlightResults) {
    var html = '<div class="rep-individual col-md-4 col-lg-4">';
    html += '<div class="row">';
    html += '<img src="images/congress/' + repCode + '.jpg">';
    html += '<span class="grade">' + sasGetScore(repCode) + '</span>';
    html += '</div>';
    html += '<div class="row">';
    html += '<h3>' + sasGetFullName(repCode) + '</h3>';
    html += '<span class="tweet-scorecard">Tweet @' + getTwitterHandle(repCode) + '</span>';
    html += sasDisplayRepDetails(reps[repCode]);
    html += '</div>';
    html += '</div>';
    
    // Wrap the whole think in a twitter link
    html = renderTweet(html, sasGetTweetMessage(repCode), 'rep-tweet');
    return html;
  }
  
  function getTwitterHandle(repCode) {
    var handle = reps[repCode][15];
    if (handle == '') {
      handle = repTwitterBackup[repCode];
    }
    return handle;
  }
  
  // :( - Used for Full Scorecard.
  function sasTwitterRenderRep(repCode) {
    var handle = getTwitterHandle(repCode);
    var html = '';
    if (handle != '') {
      var message = sasGetTweetMessage(repCode)
      html = renderTweet('Tweet this', message, 'tweet-scorecard');
    }
    return html;
  }
  
  function renderTweet(anchorText, tweetText, anchorClass) {
    var tweet = '<a data-network="twitter" target="_blank" ';
    if (anchorClass != null) {
      tweet += 'class="' + anchorClass + '" ';
    }
    tweet += 'href="https://twitter.com/intent/tweet?status=' + encodeURIComponent(tweetText);
    tweet += '&amp;related=' + encodeURIComponent(recommendations);
    tweet += '">';
    tweet += anchorText + '</a>';
    
    return tweet;
  }

  // 0: sponsor/cosponsor of FISA Improvements Act (-4)
  // 1: sponsor/cosponsor of FISA Transparency & Modernization Act (-4)
  // 2: sponsor/cosponsor of Senate version of USA FREEDOM (+4)
  // 3: sponsor/cosponsor of Surveillance State Repeal Act (+4)
  // 4: sponsor/cosponsor of USA FREEDOM prior to 2014-05-18 (+4)
  // 5: voted for Conyers/Amash amendment (+4)
  // 6: voted for House version of USA Freedom (-3)
  // 7: voted for Massie-Lofgren amendment (+3)
  // 8: total

  function sasDisplayAllReps() {
    var html = '';
    for (var i in reps) {
      var details = sasDisplayRepDetails(reps[i]);
      html += '<tr>';
      html +=   '<td valign="top" style="padding-top: 0.65em" class="name">' + sasGetFullName(i) + details + '</td>';
      html +=   '<td valign="top" style="padding-top: 1.2em">' + reps[i][12] + '</td>';
      html +=   '<td valign="top" style="padding-top: 1.2em">' + reps[i][13] + '</td>';
      html +=   '<td valign="top" class="grade">' + sasGetScore(i) + '</td>';
      html +=   '<td valign="top" style="padding-top: 1.2em">' + sasTwitterRenderRep(i) + '</td>';
      html += '</tr>';
    }
    return html;
  }

  function sasDisplayRepDetails(rep) {
    var details = '<div style="font-size: smaller; " class="details">';
    if (rep[9] == 'Sen') {
      details += '<div class="odd">USA FREEDOM Act: <span class="score">' + rep[2] + '</span></div>';
      details += '<div>FISA Improvements Act: <span class="score">' + rep[0] + '</span></div>';
    }
    else {
      details += '<div class="odd">Surveillance State Repeal Act: <span class="score">' + rep[3] + '</span></div>';
      details += '<div>USA FREEDOM Act (original): <span class="score">' + rep[4] + '</span></div>';
      details += '<div class="odd">Conyers-Amash Amendment: <span class="score">' + rep[5] + '</span></div>';
      details += '<div>Massie-Lofgren Amendment: <span class="score">' + rep[7] + '</span></div>';
      details += '<div class="odd">USA Freedom Act: (House passed) <span class="score">' + rep[6] + '</span></div>';
      details += '<div>FISA Transparency &amp; Modernization Act: <span class="score">' + rep[1] + '</span></div>';
    }
    details += '<div class="odd total">Total score: <span class="score">' + rep[8] + '</span></div> </div>';
    return details;
  }
  
  function sasSpinner(div) {
    var opts = {
      lines: 9, // The number of lines to draw
      length: 10, // The length of each line
      width: 10, // The line thickness
      radius: 15, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#007EFF', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 100, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '50%', // Top position relative to parent
      left: '50%' // Left position relative to parent
    };
    var target = document.getElementById(div);
    var spinner = new Spinner(opts).spin(target);
  }

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&\/#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function effSignupParter() {
    // Default to Greenpeace
    var partner = 'Greenpeace';
    var pCode = getParameterByName('r');
    if (pCode == '') {
      pCode = 'gp';
    }
    if (partnerFilter[pCode]) {
      partner = partnerFilter[pCode][0];
    }
    $('#partner-newsletter-checkbox').val(pCode);
    $('#partner-newsletter-text').text(partner);
    $('#partner-privacy-policy').html('<a target="_blank" href="' + partnerFilter[pCode][1] + '">Privacy Policy</a>');
  }
  
  function addTwitterWindowEvent() {
    $(".rep-tweet, .tweet-scorecard, .tweet-thanks").click(function() {
      var url = $(this).attr("href");
      window.open(url,"Twitter","width=550,height=420");
      return false;
    });
    // Show score details.
    $('.rep-tweet').hover(function() {
      $('.details', this).slideToggle();
    });
  }

  function escapeHtml(text) {
    var escapedValue = $('<div/>').text(text).html();
    return escapedValue;
  }

  function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts= url.split('?');   
    if (urlparts.length>=2) {

        var prefix= encodeURIComponent(parameter)+'=';
        var pars= urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i= pars.length; i-- > 0;) {    
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                pars.splice(i, 1);
            }
        }
        url= urlparts[0]+'?'+pars.join('&');
        return url;
    }
    else {
        return url;
    }
  }

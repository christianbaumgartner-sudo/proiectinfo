// ==========================================================================
// SOCIALSPHERE - LOGICĂ APLICAȚIE (JAVASCRIPT VANILLA v7.16)
// ==========================================================================

// Configurare Niveluri & Ranguri Sociale (Piramida EQ)
const RANGURI_CONFIG = [
    {
        nivel: 1,
        nume: "Inițiat Social",
        minXp: 0,
        maxXp: 200,
        descriere: "Faza de conștientizare. Începi să observi dinamicile subtile din grupuri și înveți să depășești ezitările și timiditatea inițială.",
        deblocheaza: "Deblochează: Analiza primelor impresii și contactul vizual conștient."
    },
    {
        nivel: 2,
        nume: "Practicant Empatic",
        minXp: 200,
        maxXp: 450,
        descriere: "Ai dezvoltat o capacitate rară de a asculta profund fără să întrerupi. Oamenii se simt în siguranță în prezența ta și se deschid cu ușurință.",
        deblocheaza: "Deblochează: Tehnica Ecou & Etichetarea emoțională a partenerului de discuție."
    },
    {
        nivel: 3,
        nume: "Comunicator Asertiv",
        minXp: 450,
        maxXp: 800,
        descriere: "Știi să spui «NU» politicos dar de neclintit, fără să inventezi scuze și fără să te simți vinovat. Îți exprimi nevoile prin formula «EU» fără agresivitate.",
        deblocheaza: "Deblochează: Imunitate la presiunea de grup și refuzul curat."
    },
    {
        nivel: 4,
        nume: "Strateg Relațional",
        minXp: 800,
        maxXp: 1200,
        descriere: "Citești micro-expresiile și indiciile non-verbale ascunse ale celor din jur. Știi să dezamorsezi tensiunile și să construiești acorduri de tip win-win.",
        deblocheaza: "Deblochează: Decodificarea posturii și manevre diplomatice avansate."
    },
    {
        nivel: 5,
        nume: "Maestru Diplomat",
        minXp: 1200,
        maxXp: 2500,
        descriere: "Carismă naturală autentică. Reușești să inspiri, să impui respect fără frică și să navighezi cele mai delicate crize umane cu un calm imperturbabil.",
        deblocheaza: "Deblochează: Arta negocierii la cel mai înalt nivel și leadership empatic."
    }
];

// Baza de date Piloni Teoretici
const PILONI_DATA = {
    carisma: {
        titlu: "Carismă & Prima Impresie",
        categorie: "Dimensiunea 01 • Conexiune Inițială",
        continut: `
            <h4>Secretul Magnetismului Personal</h4>
            <p>Carisma nu înseamnă să fii zgomotos sau să monopolizezi discuția. Psihologia modernă demonstrează că magnetismul personal este rezultatul echilibrului dintre <strong>Căldură (Warmth)</strong> și <strong>Competență (Competence)</strong>.</p>
            <br>
            <h4>3 Tehnici Imediate de Aplicat:</h4>
            <ul style="padding-left: 1.25rem; line-height: 1.7;">
                <li><strong>Zâmbetul Lent (The Flooding Smile):</strong> Nu zâmbi instantaneu când întâlnești pe cineva. Privește persoana o fracțiune de secundă, apoi lasă un zâmbet autentic să-ți lumineze fața. Transmite că zâmbetul este dedicat <em>exclusiv ei</em>.</li>
                <li><strong>Contactul Vizual Triunghiular:</strong> Mută privirea relaxat între ochiul stâng, ochiul drept și baza nasului. Transmite căldură și atenție fără senzația agresivă de holbare fixă.</li>
                <li><strong>Coborârea Tonului la Final de Frază:</strong> Nesiguranța se trădează prin tonul ascendent la finalul propoziției (cerșirea aprobării). Vorbește calm, cu o ușoară coborâre a intonației la sfârșitul fiecărei idei.</li>
            </ul>
        `
    },
    ascultare: {
        titlu: "Ascultare Activă & Empatie Profundă",
        categorie: "Dimensiunea 02 • Conexiune Emoțională",
        continut: `
            <h4>Dincolo de Simpla Tăcere</h4>
            <p>Majoritatea oamenilor doar așteaptă să le vină rândul la vorbă. Când asculți pentru a înțelege și nu pentru a judeca, creezi o conexiune rară și de neuitat.</p>
            <br>
            <h4>Ghidul Ascultării de Nivel Avansat:</h4>
            <ul style="padding-left: 1.25rem; line-height: 1.7;">
                <li><strong>Regula celor 80/20:</strong> Într-o conversație memorabilă, lasă interlocutorul să vorbească 80% din timp, în timp ce tu ghidezi discuția prin 20% întrebări deschise inteligente.</li>
                <li><strong>Tehnica Ecou & Etichetare:</strong> Repetă ultimele 2-3 cuvinte ale celuilalt cu intonație caldă sau numește emoția: <em>„Pare că situația aceea te-a frustrat destul de mult, corect?”</em>.</li>
                <li><strong>Eliminarea Sfatului Necerecut:</strong> Întreabă mai întâi: <em>„Ai nevoie doar să te descarci și să te ascult, sau vrei să căutăm împreună o soluție practică?”</em>.</li>
            </ul>
        `
    },
    asertivitate: {
        titlu: "Asertivitate & Limite Personale Sănătoase",
        categorie: "Dimensiunea 03 • Demnitate & Respect",
        continut: `
            <h4>Curajul de a fi Autentic</h4>
            <p>Asertivitatea este capacitatea de a-ți comunica nevoile clar, calm și ferm, fără să jignești, dar și fără să te scuzi inutil sau să cedezi la presiune.</p>
            <br>
            <h4>Instrumente Practice:</h4>
            <ul style="padding-left: 1.25rem; line-height: 1.7;">
                <li><strong>Formula „EU” în 3 Pași:</strong> „Când se întâmplă [Faptul concret], mă simt [Emoția mea], iar pentru viitor propun să [Soluția].” Elimină acuzațiile toxice de tipul „Tu mereu...”.</li>
                <li><strong>Refuzul Curat (Fără Minciuni):</strong> Nu inventa scuze complicate. Spune ferm: <em>„Apreciez că te-ai gândit la mine, însă momentan nu pot prelua acest angajament.”</em>.</li>
                <li><strong>Tehnica Discului Zgâriat:</strong> Dacă cineva insistă sau încearcă să te manipuleze emoțional, repetă aceeași frază neutră și politicoasă, pe un ton calm și egal.</li>
            </ul>
        `
    },
    conflicte: {
        titlu: "Rezolvarea Tensiunilor & Diplomația",
        categorie: "Dimensiunea 04 • Relații Pe Termen Lung",
        continut: `
            <h4>Transformă Opoziția în Colaborare</h4>
            <p>În orice dezacord, obiectivul nu este să câștigi o ceartă și să pierzi relația, ci să găsești numitorul comun împotriva problemei, nu împotriva omului.</p>
            <br>
            <h4>Principii Diplomatice de Bază:</h4>
            <ul style="padding-left: 1.25rem; line-height: 1.7;">
                <li><strong>Schimbă „Dar” cu „Și”:</strong> Cuvântul „dar” anulează tot ce ai spus înainte. Înlocuiește-l cu: <em>„Înțeleg perspectiva ta și, în același timp, trebuie să ținem cont de...”</em>.</li>
                <li><strong>De-escaladarea Tonului:</strong> Când cineva ridică tonul, dacă tu cobori ușor volumul și tempoul vocii, forțezi creierul celuilalt să se calibreze inconștient la calmul tău.</li>
                <li><strong>Podul de Aur (Salvarea Aparențelor):</strong> Lasă-i întotdeauna celuilalt o cale demnă de retragere: „Înțeleg perfect de ce ai procedat așa dat fiind contextul greu...”</li>
            </ul>
        `
    }
};

// Baza de date Scenarii Interactive (FĂRĂ etichete care dau răspunsul pe butoane!)
const SCENARII_DATA = [
    {
        id: 0,
        titlu: "Integrarea într-un grup nou la o petrecere / școală",
        categorie: "Dinamica de Grup",
        dificultate: "Nivel: Începător",
        avatar: "👥",
        context: "Ajungi la o întâlnire unde 3 colegi discută cu entuziasm despre un film recent, râzând. Tu cunoști doar pe unul din vedere și vrei să intri în conversație fără să pari stânjenitor.",
        dialog: "„...și faza de la sfârșit a fost pur și simplu genială, nu mă așteptam deloc!”",
        optiuni: [
            {
                text: "Stai tăcut lângă ei, zâmbind timid și așteptând să te bage cineva în seamă de la sine.",
                stilDetectat: "Comportament Pasiv / Evitant",
                corect: false,
                xpDiff: -10,
                explicatie: "Comportamentul pasiv creează o atmosferă stânjenitoare. Ceilalți s-ar putea simți urmăriți dacă stai doar lângă ei fără să te prezinți sau să contribui."
            },
            {
                text: "Întrerupi energic: „Despre ce vorbiți? Oricum cel mai bun film din an e altul, n-aveți dreptate!”",
                stilDetectat: "Comportament Agresiv / Confruntativ",
                corect: false,
                xpDiff: -15,
                explicatie: "A contrazice un grup din prima secundă este o barieră socială majoră. Creează defensivă și te poziționează ca o persoană arogantă sau dornică de atenție."
            },
            {
                text: "Te apropii relaxat, zâmbești și spui: „Salut! Am auzit că vorbiți de finalul filmului — chiar sunt curios despre ce film este vorba?”",
                stilDetectat: "Comportament Asertiv & Curios (Optim)",
                corect: true,
                xpDiff: 50,
                explicatie: "Excelent! Ai validat energia pozitivă a grupului, te-ai arătat curios și le-ai dat oportunitatea facilă de a te include prin simplul act de a-ți spune numele filmului."
            }
        ]
    },
    {
        id: 1,
        titlu: "Refuzul unui coleg care îți cere tema / proiectul complet",
        categorie: "Asertivitate & Limite",
        dificultate: "Nivel: Mediu",
        avatar: "🛑",
        context: "Un coleg de clasă care nu a lucrat deloc te contactează la ora 22:00 cu o cerere insistentă, punând presiune pe tine.",
        dialog: "„Hei! Trimite-mi și mie proiectul tău la info complet te rog mult, că n-am apucat deloc să fac și iau 4 dacă nu trimit acum!”",
        optiuni: [
            {
                text: "Îi trimiți proiectul complet de teamă să nu se supere sau să nu te bârfească cu ceilalți.",
                stilDetectat: "Comportament Pasiv (People Pleaser)",
                corect: false,
                xpDiff: -15,
                explicatie: "Cedezi la presiune din frica de respingere. Acest comportament invită la abuzuri viitoare și îți devalorizează efortul propriu."
            },
            {
                text: "Răspunzi revoltat: „Ești nesimțit! Ai stat toată săptămâna degeaba și acum te trezești? Nu-ți dau nimic!”",
                stilDetectat: "Comportament Agresiv",
                corect: false,
                xpDiff: -10,
                explicatie: "Deși ai dreptate pe fond, atacul la persoană escaladează inutil un conflict deschis și îți consumă energia emoțională."
            },
            {
                text: "Răspunzi calm: „Salut! Proiectul complet nu ți-l pot trimite pentru că profa verifică asemănările, dar pot să-ți explic în 2 minute ideea de bază ca să-l începi.”",
                stilDetectat: "Comportament Asertiv & Diplomatic (Optim)",
                corect: true,
                xpDiff: 50,
                explicatie: "Răspuns asertiv de manual. Ai stabilit o limită clară fără să te justifici defensiv, oferind în același timp un ajutor constructiv de bun simț."
            }
        ]
    },
    {
        id: 2,
        titlu: "Conflict de echipă: un coleg nu își face partea din proiect",
        categorie: "Negociere & Diplomație",
        dificultate: "Nivel: Avansat",
        avatar: "🔥",
        context: "Termenul limită este mâine. Colegul tău de echipă nu a trimis slide-urile promise, iar dacă proiectul este incomplet, nota întregii echipe va scădea.",
        dialog: "„A intervenit ceva și n-am apucat. Hai că prezentați voi ce aveți și spunem că am făcut toți!”",
        optiuni: [
            {
                text: "„Înțeleg că a intervenit ceva neprevăzut, dar pentru nota comună avem nevoie de partea ta. Ce secțiune specifică poți termina în următoarea oră?”",
                stilDetectat: "Comportament Asertiv & Orientat pe Soluție (Optim)",
                corect: true,
                xpDiff: 50,
                explicatie: "Briliant! Separi empatia de responsabilitate. Nu accepți minciuna la prezentare, dar ajuți colegul să livreze măcar o parte concretă prin concentrare pe soluție."
            },
            {
                text: "Îi spui furios: „Nu prezint nimic cu tine, mâine îi zic profei că ești un leneș și că nu meriți nicio notă!”",
                stilDetectat: "Comportament Agresiv & Distructiv",
                corect: false,
                xpDiff: -15,
                explicatie: "Amenințarea directă blochează orice colaborare de urgență pentru mâine și creează tensiuni toxice pe termen lung."
            },
            {
                text: "Taci din gură, stai toată noaptea să-i faci tu partea, dar acumulezi o mare frustrare interioară.",
                stilDetectat: "Comportament Pasiv / Martiric",
                corect: false,
                xpDiff: -10,
                explicatie: "Sacrificiul martiric duce la epuizare și resentimente. Îi înveți pe ceilalți că pot profita de pe urma muncii tale fără consecințe."
            }
        ]
    },
    {
        id: 3,
        titlu: "Un prieten este foarte abătut după un eșec",
        categorie: "Empatie & Suport",
        dificultate: "Nivel: Mediu",
        avatar: "💬",
        context: "Prietenul tău tocmai a picat un examen important la care învățase și stă pe o bancă complet descurajat, cu ochii în pământ.",
        dialog: "„Simt că sunt cel mai prost... toți au luat în afară de mine. Nu mai are niciun sens să încerc.”",
        optiuni: [
            {
                text: "„Hai măi, nu mai fi așa dramatic! Nu e sfârșitul lumii, viața merge înainte, hai să mâncăm o înghețată!”",
                stilDetectat: "Pozitivitate Toxică / Invalidare",
                corect: false,
                xpDiff: -10,
                explicatie: "Pozitivitatea toxică minimizează durerea celuilalt. Îl face să se simtă neînțeles și vinovat că este trist."
            },
            {
                text: "Te așezi lângă el, lași o pauză caldă și spui: „Îmi pare atât de rău... Știu cât de mult ai muncit pentru asta. E normal să fii supărat acum. Sunt aici cu tine.”",
                stilDetectat: "Empatie Pură & Prezență (Optim)",
                corect: true,
                xpDiff: 50,
                explicatie: "Empatie autentică la cel mai înalt nivel. Nu încerci să repari starea imediat, ci îi validezi sentimentul și îi oferi prezență necondiționată."
            },
            {
                text: "„Ți-am zis eu că trebuia să mai repeți capitolul 4 și să nu mai stai pe telefon aseară!”",
                stilDetectat: "Critică Inoportună",
                corect: false,
                xpDiff: -15,
                explicatie: "Să spui «Ți-am zis eu» în momentul de maximă vulnerabilitate este cel mai rapid mod de a distruge încrederea într-o prietenie."
            }
        ]
    },
    {
        id: 4,
        titlu: "Gestionarea unei jigniri mascate în „glumă” de față cu alții",
        categorie: "Autoprotecție Asertivă",
        dificultate: "Nivel: Avansat",
        avatar: "🎯",
        context: "În timpul unei pauze, cineva face o remarcă usturătoare despre ținuta sau ideea ta, iar ceilalți încep să chicotească.",
        dialog: "„Doamne, ce freză ai azi, zici că te-a lovit trăsnetul! Glumesc și eu, nu te supăra, ce sensibil ești!”",
        optiuni: [
            {
                text: "Râzi forțat și spui: „Da, haha, chiar așa e...”, simțindu-te umilit pe dinăuntru.",
                stilDetectat: "Pasivitate / Autodevalorizare",
                corect: false,
                xpDiff: -15,
                explicatie: "Validarea propriei umiliri îi semnalează agresorului că ești o țintă ușoară pentru glume pe socoteala ta."
            },
            {
                text: "Îl privești drept în ochi, zâmbești neutru și întrebi pe un ton calm: „Poți să-mi explici gluma? N-am înțeles ce este amuzant.”",
                stilDetectat: "Asertivitate Strategică (Optim)",
                corect: true,
                xpDiff: 50,
                explicatie: "Cea mai elegantă armă psihologică! Cerându-i să explice gluma răutăcioasă, îl forțezi să-și recunoască penibilitatea atacului fără ca tu să fii agresiv."
            },
            {
                text: "Sari furios: „Uită-te la tine cum arăți, schelet ambulant ce ești!”",
                stilDetectat: "Agresivitate Reactivă",
                corect: false,
                xpDiff: -15,
                explicatie: "Căderea în capcana agresivității te coboară la nivelul lui și transformă scena într-o ceartă vulgară."
            }
        ]
    },
    {
        id: 5,
        titlu: "Refuzul unei ieșiri în oraș la care nu vrei să mergi (Fără minciuni)",
        categorie: "Limite & Energie Personală",
        dificultate: "Nivel: Mediu",
        avatar: "🛋️",
        context: "Ești epuizat după o săptămână grea și vrei să te odihnești. Un grup de prieteni insistă să ieșiți în club/cafenea diseară.",
        dialog: "„Haide măi, vii și tu! Dacă nu vii ești plictisitor rău, nu poți să stai în casă vineri seara!”",
        optiuni: [
            {
                text: "Inventezi o minciună complicată că ești bolnav sau că te-a pedepsit familia.",
                stilDetectat: "Evitant / Minciună",
                corect: false,
                xpDiff: -10,
                explicatie: "Minciuna creează anxietate de a fi prins și denotă lipsă de încredere în dreptul tău legitim de a alege."
            },
            {
                text: "Răspunzi cald: „Mulțumesc mult de invitație! Săptămâna asta am nevoie de o seară de liniște să mă reîncarc. Distracție faină și ne vedem luni!”",
                stilDetectat: "Asertivitate Autentică (Optim)",
                corect: true,
                xpDiff: 50,
                explicatie: "Perfect! Ai apreciat intenția lor, ai afirmat dreptul tău la odihnă fără să te justifici defensiv și ai deschis ușa pentru data viitoare."
            },
            {
                text: "Te duci în silă, stai îmbufnat toată seara pe telefon și le strici și celorlalți buna dispoziție.",
                stilDetectat: "Pasiv-Agresivitate",
                corect: false,
                xpDiff: -15,
                explicatie: "Prezența fizică fără disponibilitate emoțională creează resentimente și frustrare pentru toată lumea."
            }
        ]
    },
    {
        id: 6,
        titlu: "Spargerea unei tăceri stânjenitoare (Awkward Silence)",
        categorie: "Carismă & Prezență",
        dificultate: "Nivel: Începător",
        avatar: "🧊",
        context: "Ești în lift sau la o coadă cu un coleg cu care ai schimbat doar 2 cuvinte. S-a așternut o liniște grea și amândoi vă uitați în podea stânjeniți.",
        dialog: "„... (liniște apăsătoare de 15 secunde, priviri în telefon) ...”",
        optiuni: [
            {
                text: "Te uiți pe tavan și oftezi zgomotos sperând să spună celălalt ceva.",
                stilDetectat: "Pasivitate Stângace",
                corect: false,
                xpDiff: -5,
                explicatie: "Ofensarea pasivă crește stânjeneala din spațiu."
            },
            {
                text: "Privești relaxat în jur, zâmbești și faci o remarcă contextuală simplă: „Ce bine prinde o pauză după ziua de azi! Cum ți s-au părut orele de dimineață?”",
                stilDetectat: "Conexiune Caldă & Curioasă (Optim)",
                corect: true,
                xpDiff: 50,
                explicatie: "Maestru al conversației! O remarcă simplă despre contextul comun este cea mai ușoară punte pentru a sparge gheața."
            },
            {
                text: "Pui o întrebare mult prea personală și bizară: „Tu de ce ești așa tăcut? Ai probleme în familie?”",
                stilDetectat: "Intruzivitate Neadecvată",
                corect: false,
                xpDiff: -20,
                explicatie: "Încălcarea intruzivă a spațiului intim creează alarmă și disconfort major celuilalt."
            }
        ]
    }
];

// Laboratorul de Reformulări
const REFORMULARI_DATA = [
    {
        categorie: "scoala",
        gresit: "„Nu-mi pasă, faceți cum vreți voi proiectul.”",
        corect: "„Am încredere în judecata voastră pe această secțiune. Eu mă voi concentra pe partea de cercetare.”",
        motiv: "Înlocuiește indiferența pasiv-agresivă cu încredere și asumarea unui rol concret."
    },
    {
        categorie: "scoala",
        gresit: "„De ce nu mi-ai zis mai devreme că e gata tema?!”",
        corect: "„Pe viitor m-ar ajuta mult dacă am putea stabili un termen intermediar ca să apuc să verific la timp.”",
        motiv: "Formularea orientată spre viitor elimină acuzațiile legate de trecut și oferă o regulă constructivă."
    },
    {
        categorie: "limite",
        gresit: "„Scuze enorme că te deranjez, știu că n-ai timp deloc de mine, dar aș avea o mică întrebare dacă se poate...”",
        corect: "„Salut! Când ai 2 minute libere astăzi, aș aprecia perspectiva ta pe un subiect scurt.”",
        motiv: "Elimină cerșirea scuzelor și atitudinea de inferioritate. Arată respect atât pentru timpul tău, cât și pentru al celuilalt."
    },
    {
        categorie: "limite",
        gresit: "„Aș veni cu mare drag la voi, dar chiar nu pot că am o problemă medicală gravă...” (Minciună)",
        corect: "„Mulțumesc mult de invitație! Seara asta am alt plan stabilit și nu pot ajunge, dar vă doresc distracție maximă!”",
        motiv: "Autenticitatea fără justificări excesive este semnul unei stime de sine solide."
    },
    {
        categorie: "prieteni",
        gresit: "„Tu mereu întârzii și nu-ți pasă de timpul meu!”",
        corect: "„Când întârzii mai mult de 20 de minute fără să mă anunți, mă simt nerespectat. Pentru mine punctualitatea este importantă.”",
        motiv: "Folosește formula «EU»: vorbește despre sentimentul tău, nu etichetează toxic caracterul celuilalt."
    },
    {
        categorie: "prieteni",
        gresit: "„Nu știu, mie mi-e indiferent, alege tu orice film / mâncare.”",
        corect: "„Azi aș avea poftă de ceva lejer — fie o comedie, fie mâncare italiană. Ce variantă dintre acestea te atrage mai mult?”",
        motiv: "Oferi direcție fără a forța, evitând povara obositoare ca celălalt să decidă totul singur."
    },
    {
        categorie: "tensiuni",
        gresit: "„Calmează-te! De ce te enervezi așa din orice prostie?”",
        corect: "„Văd că subiectul acesta te apasă mult. Vreau să te ascult și să înțeleg ce te deranjează cel mai tare.”",
        motiv: "A-i spune cuiva nervos să «se calmeze» este ca și cum ai turna benzină pe foc. Validarea este singurul extinctor emoțional."
    },
    {
        categorie: "tensiuni",
        gresit: "„Ai dreptate, dar nu se poate face cum zici tu.”",
        corect: "„Înțeleg logica ta și, în același timp, hai să luăm în calcul și constrângerile pe care le avem.”",
        motiv: "Înlocuirea lui «DAR» cu «ȘI» păstrează ușa deschisă colaborării diplomatice."
    }
];

// Decodorul de Limbaj Non-Verbal
const NONVERBAL_DATA = [
    {
        icon: "🦶",
        titlu: "Picioarele orientate spre ieșire",
        semnificatie: "Subconștientul persoanei își dorește să plece sau se grăbește, chiar dacă fața și trunchiul par atente.",
        reactie: "Observă semnalul și oferă-i o portiță elegantă: «Văd că s-ar putea să te grăbești, hai să reluăm când ai timp liber!»."
    },
    {
        icon: "🛡️",
        titlu: "Brațele încrucișate strâns + retragere",
        semnificatie: "Barieră defensivă psihologică. Persoana se simte inconfortabil, criticată sau nu este de acord cu ceea ce spui.",
        reactie: "Fă o pauză, oferă-i o băutură sau pune-i o întrebare deschisă ca să-și desfacă postura corporală."
    },
    {
        icon: "😊",
        titlu: "Zâmbetul Duchenne (Ochii zâmbitori)",
        semnificatie: "Zâmbet autentic. Mușchii orbiculari din jurul ochilor se contractă formând mici riduri («laba gâștei»).",
        reactie: "Răspunde cu aceeași căldură. Este un semn clar de simpatie și deschidere emoțională reală."
    },
    {
        icon: "🧣",
        titlu: "Atingerea gâtului sau a adânciturii jugulare",
        semnificatie: "Comportament de autoliniștire (pacifying gesture). Denotă nesiguranță acută, stres sau emoții puternice ascunse.",
        reactie: "Coborâți presiunea conversației, zâmbiți cald și validați-i opinia pentru a-i reda sentimentul de siguranță."
    },
    {
        icon: "🪞",
        titlu: "Efectul de Oglindire Involuntară (Mirroring)",
        semnificatie: "Dacă interlocutorul îți preia discret postura, gesturile sau tempoul vocii, sunteți într-o stare de profund raport psihologic.",
        reactie: "Continuă să construiești conversația cu încredere — barierele sociale au căzut complet."
    },
    {
        icon: "👐",
        titlu: "Palmele deschise la vedere",
        semnificatie: "Semnal străvechi de sinceritate și non-amenințare. Indică transparență și lipsa intențiilor ascunse.",
        reactie: "Folosește și tu gesturi deschise cu palmele pentru a transmite instantaneu credibilitate și bune intenții."
    }
];

// Scutul Anti-Manipulare (NOU!)
const SHIELD_DATA = [
    {
        icon: "🎭",
        tactica: "Victimizarea Falsă & Răsturnarea Vinovăției (DARVO)",
        cumArata: "„După tot ce am făcut eu pentru tine, tu mă refuzi? Îmi dau seama cât de puțin însemn pentru tine!”",
        antidot: "„Țin la prietenia noastră, însă refuzul meu este legat exclusiv de programul de azi, nu de sentimentele mele pentru tine.”",
        sfat: "Nu te apăra de acuzația falsă. Separează ferm refuzul de valoarea relației."
    },
    {
        icon: "⏳",
        tactica: "Presiunea Falsă de Urgență („Acum ori niciodată”)",
        cumArata: "„Dacă nu îmi spui DA chiar acum în secunda asta, înseamnă că nu te interesează deloc!”",
        antidot: "„Dacă ai nevoie de un răspuns chiar în această secundă, atunci răspunsul este NU. Dacă îmi lași 2 ore să mă organizez, mă pot uita peste.”",
        sfat: "Regulă de aur: Orice decizie forțată pe loc trebuie să primească un refuz asertiv."
    },
    {
        icon: "🕯️",
        tactica: "Gaslighting („Ești nebun, n-am zis niciodată asta”)",
        cumArata: "„Inventezi lucruri, ții minte greșit tot timpul, ești prea paranoic!”",
        antidot: "„Îmi amintesc foarte clar termenii pe care i-am discutat. Pentru a nu mai avea neînțelegeri, hai să notăm totul în scris.”",
        sfat: "Nu intra în dezbateri despre memoria ta. Mută comunicarea pe dovezi scrise clare."
    },
    {
        icon: "🥶",
        tactica: "Tăcerea Punitivă (The Silent Treatment)",
        cumArata: "Se supără brusc, te ignoră ostentativ și refuză să spună de ce: «Nu am nimic!» (pe un ton de gheață).",
        antidot: "„Observ că ești supărat. Când ești pregătit să discutăm deschis despre ce s-a întâmplat, sunt aici să te ascult.”",
        sfat: "Nu te ruga de celălalt și nu te umili cerșind iertare. Dă-i spațiu și pune responsabilitatea comunicării pe el."
    }
];

// Întrebări Diagnostic EQ Radar (8 Întrebări Complexe)
const RADAR_QUESTIONS = [
    {
        intrebare: "1. Cum reacționezi când cineva te întrerupe în mod repetat în timp ce îți susții ideea?",
        optiuni: [
            { text: "Mă opresc din vorbit și renunț să-mi mai spun ideea.", carisma: 5, empatie: 15, asertivitate: 5, calm: 10 },
            { text: "Ridic vocea peste el și spun nervos «Lasă-mă să termin!»", carisma: 10, empatie: 5, asertivitate: 15, calm: 5 },
            { text: "Aștept o fracțiune de secundă, zâmbesc calm și zic: «Aș vrea să-mi termin ideea într-o secundă, apoi sunt foarte curios de părerea ta.»", carisma: 20, empatie: 20, asertivitate: 20, calm: 20 }
        ]
    },
    {
        intrebare: "2. La o întâlnire unde nu cunoști aproape pe nimeni, ce faci de obicei?",
        optiuni: [
            { text: "Stau pe telefon într-un colț sperând să treacă timpul mai repede.", carisma: 5, empatie: 10, asertivitate: 5, calm: 10 },
            { text: "Mă apropii de o persoană relaxată și fac un comentariu simplu de deschidere contextual.", carisma: 20, empatie: 20, asertivitate: 20, calm: 20 },
            { text: "Încerc să atrag atenția făcând glume gălăgioase ca să fiu remarcat cu orice preț.", carisma: 12, empatie: 5, asertivitate: 15, calm: 10 }
        ]
    },
    {
        intrebare: "3. Un coleg îți cere o favoare care îți dă peste cap tot programul personal. Ce alegi?",
        optiuni: [
            { text: "Accept deși sunt epuizat, de frică să nu se supere sau să mă considere neprietenos.", carisma: 10, empatie: 15, asertivitate: 5, calm: 10 },
            { text: "Îi spun politicos și direct că nu pot de această dată, fără să inventez scuze mincinoase.", carisma: 20, empatie: 15, asertivitate: 20, calm: 20 },
            { text: "Îi dau seen și nu-i mai răspund câteva ore sperând să rezolve cu altcineva.", carisma: 5, empatie: 5, asertivitate: 5, calm: 5 }
        ]
    },
    {
        intrebare: "4. Cineva îți împărtășește o supărare profundă. Care este primul tău impuls?",
        optiuni: [
            { text: "Îi ofer imediat 3 soluții practice și îi spun ce greșeli a făcut.", carisma: 10, empatie: 10, asertivitate: 15, calm: 15 },
            { text: "Îl ascult cu răbdare, îi validez trăirea și îl întreb dacă vrea doar să fie ascultat sau dorește un sfat.", carisma: 20, empatie: 20, asertivitate: 20, calm: 20 },
            { text: "Schimb subiectul spre ceva vesel pentru că mă simt inconfortabil cu tristețea lui.", carisma: 8, empatie: 5, asertivitate: 10, calm: 8 }
        ]
    },
    {
        intrebare: "5. Într-o discuție aprinsă, celălalt se enervează și devine pasiv-agresiv. Cum abordezi situația?",
        optiuni: [
            { text: "Îi răspund cu aceeași ironie tăioasă.", carisma: 8, empatie: 5, asertivitate: 12, calm: 5 },
            { text: "Cobor calm tonul vocii și spun: «Observ că discuția a devenit tensionată. Hai să facem o scurtă pauză și să continuăm când suntem liniștiți.»", carisma: 20, empatie: 20, asertivitate: 20, calm: 20 },
            { text: "Îmi cer scuze repede doar ca să închei momentul, chiar dacă aveam dreptate.", carisma: 5, empatie: 10, asertivitate: 5, calm: 10 }
        ]
    },
    {
        intrebare: "6. Cum primești o critică sau un feedback dur despre munca ta?",
        optiuni: [
            { text: "Trec imediat în defensivă și încep să caut greșelile celuilalt pentru a mă apăra.", carisma: 5, empatie: 5, asertivitate: 10, calm: 5 },
            { text: "Respir calm, separ tonul de mesaj și spun: «Mulțumesc pentru perspectivă. Ce anume aș putea îmbunătăți concret?»", carisma: 20, empatie: 20, asertivitate: 20, calm: 20 },
            { text: "Mă demoralizez complet și cred că nu sunt bun de nimic.", carisma: 5, empatie: 10, asertivitate: 5, calm: 5 }
        ]
    },
    {
        intrebare: "7. Când cineva îți face un compliment sincer, cum reacționezi?",
        optiuni: [
            { text: "Îl resping din modestie falsă: «A, nu e mare lucru, oricine putea să facă asta, a fost noroc.»", carisma: 8, empatie: 10, asertivitate: 8, calm: 10 },
            { text: "Păstrez contactul vizual, zâmbesc sincer și spun simplu: «Îți mulțumesc mult, chiar a însemnat mult efort și mă bucur că ai observat!»", carisma: 20, empatie: 20, asertivitate: 20, calm: 20 },
            { text: "Mă simt stânjenit și schimb subiectul rapid fără să mulțumesc.", carisma: 5, empatie: 8, asertivitate: 5, calm: 8 }
        ]
    },
    {
        intrebare: "8. Cât de des reușești să păstrezi o tăcere de 2 secunde înainte de a răspunde într-o conversație importantă?",
        optiuni: [
            { text: "Aproape niciodată, răspund pe loc sau chiar întrerup din grabă.", carisma: 8, empatie: 8, asertivitate: 10, calm: 5 },
            { text: "Adesea — folosesc pauza pentru a respira, a procesa și a vorbi așezat.", carisma: 20, empatie: 20, asertivitate: 20, calm: 20 },
            { text: "Doar dacă sunt speriat sau nu știu ce să spun.", carisma: 8, empatie: 10, asertivitate: 8, calm: 10 }
        ]
    }
];

// Misiuni Zilnice
const INITIAL_MISSIONS = [
    { id: 1, text: "Fă un compliment sincer și specific unei persoane azi (legat de efort, gândire sau idee)", xp: 30, completed: false, category: "Carismă" },
    { id: 2, text: "Ascultă un coleg fără să-l întrerupi deloc timp de 3 minute întregi", xp: 25, completed: false, category: "Ascultare" },
    { id: 3, text: "Spune un „NU” politicos și asertiv la o cerere pe care nu vrei să o faci, fără scuze inventate", xp: 40, completed: false, category: "Asertivitate" },
    { id: 4, text: "Păstrează contact vizual cald de 3 secunde cu zâmbet atunci când saluți pe cineva", xp: 20, completed: false, category: "Prezență" },
    { id: 5, text: "Folosește tehnica «Ecou & Etichetare» într-o conversație din pauză", xp: 35, completed: false, category: "Empatie" },
    { id: 6, text: "Identifică un semnal non-verbal subtil (ex: orientarea picioarelor) la cineva din jur", xp: 30, completed: false, category: "Observație" }
];

const ICEBREAKERS = [
    { quote: "„Observ că citești cartea aceea / lucrezi la acel proiect. Ce te-a atras cel mai mult la el?”", context: "Școală / Bibliotecă" },
    { quote: "„Salut! Sunt [Nume]. Încerc să cunosc oameni noi azi — cum ți se pare atmosfera de aici până acum?”", context: "Eveniment / Petrecere" },
    { quote: "„Mi-a plăcut mult ideea pe care ai menționat-o mai devreme la oră. Cum ți-a venit perspectiva asta?”", context: "După o prezentare / oră" },
    { quote: "„Ai recomanda cafeneaua / playlistul acesta? Caut ceva nou și pari să ai gusturi foarte bune.”", context: "Pauză / Social Casual" },
    { quote: "„Dacă ai putea teleporta săptămâna asta oriunde fără griji, unde ai merge prima dată?”", context: "Spărgător de gheață lejer" }
];

// Starea Globală a Aplicației
let appState = {
    xp: 120,
    currentScenarioIndex: 0,
    completedScenarios: {},
    radarStep: 0,
    radarScores: { carisma: 0, empatie: 0, asertivitate: 0, calm: 0 },
    missions: []
};

// ==========================================================================
// INIȚIALIZARE & PERSISTENȚĂ
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
    incarcaDateLocale();
    actualizeazaUIStats();
    genereazaTaburiScenarii();
    randeazaScenariu(appState.currentScenarioIndex);
    randeazaReformulari("toate");
    randeazaDecodorNonverbal();
    randeazaScutAntiManipulare();
    randeazaRadarPas(0);
    randeazaMisiuni();
});

function incarcaDateLocale() {
    try {
        const savedXp = localStorage.getItem("socialsphere_xp_v716") || localStorage.getItem("socialsphere_xp_v35");
        const savedMissions = localStorage.getItem("socialsphere_missions_v716") || localStorage.getItem("socialsphere_missions_v35");
        const savedScenarios = localStorage.getItem("socialsphere_scenarios_v716") || localStorage.getItem("socialsphere_scenarios_v35");

        appState.xp = savedXp !== null ? Number(savedXp) : 120;
        appState.missions = savedMissions ? JSON.parse(savedMissions) : JSON.parse(JSON.stringify(INITIAL_MISSIONS));
        appState.completedScenarios = savedScenarios ? JSON.parse(savedScenarios) : {};
    } catch (e) {
        appState.xp = 120;
        appState.missions = JSON.parse(JSON.stringify(INITIAL_MISSIONS));
        appState.completedScenarios = {};
    }
}

function salveazaDateLocale() {
    try {
        localStorage.setItem("socialsphere_xp_v716", String(appState.xp));
        localStorage.setItem("socialsphere_missions_v716", JSON.stringify(appState.missions));
        localStorage.setItem("socialsphere_scenarios_v716", JSON.stringify(appState.completedScenarios));
    } catch (e) {}
}

function reseteazaTotulDemo() {
    if (confirm("Sigur vrei să resetezi toate datele demo (XP, simulări, test diagnostic)?")) {
        localStorage.removeItem("socialsphere_xp_v716");
        localStorage.removeItem("socialsphere_missions_v716");
        localStorage.removeItem("socialsphere_scenarios_v716");
        localStorage.removeItem("socialsphere_xp_v35");
        localStorage.removeItem("socialsphere_missions_v35");
        localStorage.removeItem("socialsphere_scenarios_v35");

        appState.xp = 120;
        appState.currentScenarioIndex = 0;
        appState.completedScenarios = {};
        appState.missions = JSON.parse(JSON.stringify(INITIAL_MISSIONS));
        appState.radarStep = 0;
        appState.radarScores = { carisma: 0, empatie: 0, asertivitate: 0, calm: 0 };

        actualizeazaUIStats();
        genereazaTaburiScenarii();
        randeazaScenariu(0);
        randeazaRadarPas(0);
        randeazaMisiuni();

        document.getElementById("radarQuizContainer").classList.remove("hidden");
        document.getElementById("radarResultContainer").classList.add("hidden");

        afiseazaToast("Toate datele demonstrației au fost resetate la zero!");
    }
}

// ==========================================================================
// SISTEMUL AVANSAT DE XP (GAINS & PENALTIES)
// ==========================================================================
function calculeazaRang(xp) {
    for (let r of RANGURI_CONFIG) {
        if (xp < r.maxXp) return r;
    }
    return RANGURI_CONFIG[RANGURI_CONFIG.length - 1];
}

function modificaXP(cantitate, motiv) {
    const xpVechi = appState.xp;
    const rangVechi = calculeazaRang(xpVechi);

    appState.xp = Math.max(0, appState.xp + cantitate);
    salveazaDateLocale();
    actualizeazaUIStats();

    const rangNou = calculeazaRang(appState.xp);

    if (cantitate > 0) {
        afiseazaToast(`+${cantitate} XP: ${motiv}`, "gain");
        redaSunet(true);
    } else if (cantitate < 0) {
        afiseazaToast(`${cantitate} XP: ${motiv}`, "penalty");
        redaSunet(false);
    }

    if (rangNou.nivel > rangVechi.nivel) {
        afiseazaToast(`🎉 FELICITĂRI! Ai avansat la ${rangNou.nume} (Nivel ${rangNou.nivel})!`, "gain");
    }
}

function actualizeazaUIStats() {
    const xp = appState.xp;
    const rang = calculeazaRang(xp);

    document.getElementById("headerLevelTag").textContent = `Nivel ${rang.nivel}`;
    document.getElementById("headerRankName").textContent = rang.nume;

    const spanInLevel = rang.maxXp - rang.minXp;
    const progressInLevel = Math.max(0, xp - rang.minXp);
    const pct = Math.min(100, Math.round((progressInLevel / spanInLevel) * 100));

    document.getElementById("headerXpBar").style.width = `${pct}%`;
    document.getElementById("headerXpRatio").textContent = `${xp} / ${rang.maxXp} XP`;
}

// Sintetizator Audio nativ Web Audio API
function redaSunet(estePozitiv) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (estePozitiv) {
            osc.frequency.setValueAtTime(520, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.18);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.22);
        } else {
            osc.frequency.setValueAtTime(320, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(180, audioCtx.currentTime + 0.22);
            gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.26);
        }
    } catch (e) {}
}

// ==========================================================================
// MODAL PIRAMIDA RANGURILOR & CE ÎNSEAMNĂ FIECARE NIVEL
// ==========================================================================
function deschideModalRanguri() {
    const userXp = appState.xp;
    const currentRang = calculeazaRang(userXp);
    const container = document.getElementById("ranksModalBody");

    container.innerHTML = `
        <div style="margin-bottom: 1.5rem; text-align: center; background: rgba(99, 102, 241, 0.12); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">
            <span class="badge-tag">Scor Curent</span>
            <h3 style="font-size: 1.8rem; margin: 0.35rem 0; color: var(--accent-cyan);">${userXp} XP acumulate</h3>
            <p style="color: #cbd5e1; font-size: 0.92rem;">Te afli la <strong>Nivelul ${currentRang.nivel}: ${currentRang.nume}</strong>. Fiecare nivel atins reflectă o maturizare a modului în care comunici și gestionezi oamenii.</p>
        </div>

        <div class="ranks-pyramid-list">
            ${RANGURI_CONFIG.map(r => {
                const isUserTier = r.nivel === currentRang.nivel;
                return `
                    <div class="rank-tier-card ${isUserTier ? 'active-user-tier' : ''}">
                        ${isUserTier ? '<span class="current-tier-tag">Nivelul Tău Activ</span>' : ''}
                        <div class="tier-number-badge">${r.nivel}</div>
                        <div class="tier-info-wrap">
                            <div class="tier-header-row">
                                <h4>Nivel ${r.nivel}: ${r.nume}</h4>
                                <span class="tier-xp-span">${r.minXp} - ${r.maxXp} XP</span>
                            </div>
                            <p class="tier-desc-text">${r.descriere}</p>
                            <span class="tier-unlocked-features">🔓 ${r.deblocheaza}</span>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;

    document.getElementById("ranksModal").classList.remove("hidden");
}

// ==========================================================================
// NAVIGARE SPA
// ==========================================================================
function schimbaSectiune(sectionId) {
    document.querySelectorAll(".content-view").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));

    const targetView = document.getElementById(`section-${sectionId}`);
    const targetNav = document.getElementById(`nav-${sectionId}`);

    if (targetView) targetView.classList.add("active");
    if (targetNav) targetNav.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// 1. GENERATOR SPĂRGĂTOR DE GHEAȚĂ (ICEBREAKERS)
// ==========================================================================
function genereazaIcebreaker() {
    const randomIndex = Math.floor(Math.random() * ICEBREAKERS.length);
    const item = ICEBREAKERS[randomIndex];

    const quoteEl = document.getElementById("icebreakerQuote");
    const contextEl = document.getElementById("icebreakerContext");

    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.textContent = item.quote;
        contextEl.textContent = `Context: ${item.context}`;
        quoteEl.style.opacity = 1;
    }, 180);
}

// ==========================================================================
// 2. MODAL PILONI DETALII
// ==========================================================================
function deschidePilonDetalii(cheiePilon) {
    const pilon = PILONI_DATA[cheiePilon];
    if (!pilon) return;

    document.getElementById("modalPillarCategory").textContent = pilon.categorie;
    document.getElementById("modalPillarTitle").textContent = pilon.titlu;
    document.getElementById("modalPillarBody").innerHTML = pilon.continut;

    document.getElementById("pillarModal").classList.remove("hidden");
}

// ==========================================================================
// ANTRENORUL DE PAUZĂ STRATEGICĂ DE 2 SECUNDE (POWER PAUSE TRAINER)
// ==========================================================================
let pauseTrainerStartTime = 0;
let pauseTrainerTimerId = null;

function incepeTestPauza() {
    const btnStart = document.getElementById("btnStartPauseGame");
    const circle = document.getElementById("pauseCircle");
    const circleText = document.getElementById("pauseCircleText");
    const btnRespond = document.getElementById("btnRespondPauseGame");
    const feedback = document.getElementById("pauseResultFeedback");

    feedback.classList.add("hidden");
    feedback.className = "pause-feedback-msg hidden";
    circle.classList.remove("ready");
    circle.classList.remove("hidden");
    circleText.textContent = "Așteaptă...";

    btnStart.classList.add("hidden");
    btnRespond.classList.remove("hidden");

    pauseTrainerStartTime = Date.now();

    if (pauseTrainerTimerId) clearTimeout(pauseTrainerTimerId);
    pauseTrainerTimerId = setTimeout(() => {
        circle.classList.add("ready");
        circleText.textContent = "ACUM!";
    }, 2000);
}

function finalizeazaTestPauza() {
    if (!pauseTrainerStartTime) return;
    const elapsedMs = Date.now() - pauseTrainerStartTime;
    const elapsedSec = (elapsedMs / 1000).toFixed(2);

    if (pauseTrainerTimerId) clearTimeout(pauseTrainerTimerId);

    const btnStart = document.getElementById("btnStartPauseGame");
    const circle = document.getElementById("pauseCircle");
    const btnRespond = document.getElementById("btnRespondPauseGame");
    const feedback = document.getElementById("pauseResultFeedback");

    btnRespond.classList.add("hidden");
    btnStart.classList.remove("hidden");
    btnStart.textContent = "↻ Încearcă Din Nou";
    circle.classList.add("hidden");

    feedback.classList.remove("hidden");

    if (elapsedMs < 1800) {
        feedback.className = "pause-feedback-msg feedback-early";
        feedback.innerHTML = `⚠️ <strong>Reacție Impulsivă (${elapsedSec} secunde)!</strong> Ai răspuns prea repede. În conversațiile reale, a răspunde sub 1.8 secunde denotă grabă și nesiguranță. Lasă tăcerea să lucreze!`;
        modificaXP(-5, "Reacție impulsivă sub 1.8 secunde");
    } else if (elapsedMs <= 3200) {
        feedback.className = "pause-feedback-msg feedback-success";
        feedback.innerHTML = `🌟 <strong>Calibrare Excelentă (${elapsedSec} secunde)!</strong> Ai lăsat exact pauza optimă de 2 secunde pentru a respira și a formula un răspuns calm și stăpân pe sine.`;
        modificaXP(25, "Pauză strategică de 2 secunde stăpânită impecabil!");
    } else {
        feedback.className = "pause-feedback-msg feedback-late";
        feedback.innerHTML = `⏳ <strong>Pauză cam lungă (${elapsedSec} secunde).</strong> Este bine că nu te-ai grăbit, însă o tăcere peste 3.5 secunde poate fi percepută ca ezitare. Țintește intervalul de 2-3 secunde!`;
        modificaXP(10, "Exercițiu de răbdare finalizat");
    }

    pauseTrainerStartTime = 0;
}

// ==========================================================================
// 3. SIMULATORUL DE SCENARII (FĂRĂ SCROLLBAR, FĂRĂ ETICHETE DATE PE FAȚĂ)
// ==========================================================================
function genereazaTaburiScenarii() {
    const container = document.getElementById("scenarioTabsWrap");
    if (!container) return;

    // Generăm taburile pe o grilă de 2 rânduri fără scrollbar orizontal
    container.innerHTML = SCENARII_DATA.map((item, idx) => {
        const isSolved = appState.completedScenarios[item.id] ? "✓ " : "";
        const activeClass = idx === appState.currentScenarioIndex ? "active" : "";
        return `
            <button class="scenario-tab ${activeClass}" onclick="alegeScenariu(${idx}, this)">
                <span class="tab-icon">${item.avatar}</span>
                <span>${isSolved}${idx + 1}. ${item.titlu}</span>
            </button>
        `;
    }).join("");
}

function alegeScenariu(index, tabEl) {
    appState.currentScenarioIndex = index;
    document.querySelectorAll(".scenario-tab").forEach((t, i) => {
        t.classList.toggle("active", i === index);
    });
    randeazaScenariu(index);
}

function randeazaScenariu(index) {
    const item = SCENARII_DATA[index];
    if (!item) return;

    document.getElementById("scenarioCategoryBadge").textContent = item.categorie;
    document.getElementById("scenarioDifficulty").textContent = item.dificultate;
    document.getElementById("scenarioAvatar").textContent = item.avatar;
    document.getElementById("scenarioTitle").textContent = item.titlu;
    document.getElementById("scenarioContextText").textContent = item.context;
    document.getElementById("scenarioDialogue").textContent = item.dialog;
    document.getElementById("scenarioGainedXp").textContent = "+0 XP";

    document.getElementById("scenarioFeedbackPanel").classList.add("hidden");

    // Important: Fără etichete ca "asertiv" sau "agresiv" pe butoane, pentru a nu trăda răspunsul!
    const optionsContainer = document.getElementById("scenarioOptionsList");
    optionsContainer.innerHTML = item.optiuni.map((opt, i) => `
        <button class="option-button" onclick="alegeOptiuneScenariu(${index}, ${i}, this)">
            <span>${opt.text}</span>
        </button>
    `).join("");
}

function alegeOptiuneScenariu(scenariuIndex, optiuneIndex, buttonEl) {
    const item = SCENARII_DATA[scenariuIndex];
    const alegere = item.optiuni[optiuneIndex];

    const allButtons = document.querySelectorAll(".option-button");
    allButtons.forEach(btn => btn.disabled = true);

    if (alegere.corect) {
        buttonEl.classList.add("correct");
        appState.completedScenarios[item.id] = true;
        salveazaDateLocale();
        genereazaTaburiScenarii();

        modificaXP(alegere.xpDiff, "Decizie asertivă excelentă!");
        document.getElementById("scenarioGainedXp").textContent = `+${alegere.xpDiff} XP`;
        afiseazaFeedback(true, "Răspuns Optim & Empatic", alegere.explicatie, alegere.stilDetectat);
    } else {
        buttonEl.classList.add("suboptimal");
        modificaXP(alegere.xpDiff, "Penalizare: Reacția a escaladat tensiunea / lipsă de asertivitate");
        document.getElementById("scenarioGainedXp").textContent = `${alegere.xpDiff} XP`;
        afiseazaFeedback(false, "Abordare cu Risc de Blocaj", alegere.explicatie, alegere.stilDetectat);
    }
}

function afiseazaFeedback(esteOptim, titlu, explicatie, stilDetectat) {
    const panel = document.getElementById("scenarioFeedbackPanel");
    const iconEl = document.getElementById("feedbackResultIcon");
    const titleEl = document.getElementById("feedbackResultTitle");
    const subEl = document.getElementById("feedbackResultSub");
    const textEl = document.getElementById("feedbackExplanationText");

    iconEl.textContent = esteOptim ? "✓" : "!";
    iconEl.style.background = esteOptim ? "var(--accent-emerald)" : "var(--accent-red)";
    titleEl.textContent = titlu;
    titleEl.style.color = esteOptim ? "#a7f3d0" : "#fca5a5";
    subEl.textContent = `Stil identificat: ${stilDetectat}`;
    textEl.textContent = explicatie;

    panel.classList.remove("hidden");
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function urmatorulSauReiaScenariu() {
    let nextIndex = appState.currentScenarioIndex + 1;
    if (nextIndex >= SCENARII_DATA.length) nextIndex = 0;
    alegeScenariu(nextIndex);
}

function reincearcaScenariulCurent() {
    randeazaScenariu(appState.currentScenarioIndex);
    afiseazaToast("Scenariul a fost deblocat pentru o nouă încercare!");
}

// ==========================================================================
// 4. LABORATORUL DE REFORMULĂRI
// ==========================================================================
function randeazaReformulari(categorieFiltru) {
    const container = document.getElementById("rephraseGrid");
    if (!container) return;

    const filtrate = categorieFiltru === "toate"
        ? REFORMULARI_DATA
        : REFORMULARI_DATA.filter(item => item.categorie === categorieFiltru);

    container.innerHTML = filtrate.map(item => `
        <div class="rephrase-card">
            <div class="rephrase-block block-wrong">
                <span class="rephrase-label label-wrong">✕ Cum spunem de obicei (Toxic / Pasiv):</span>
                <p class="rephrase-text">${item.gresit}</p>
            </div>
            <div class="rephrase-block block-right">
                <span class="rephrase-label label-right">✓ Cum reformulezi asertiv:</span>
                <p class="rephrase-text">${item.corect}</p>
            </div>
            <div class="rephrase-why">
                💡 <em>De ce funcționează:</em> ${item.motiv}
            </div>
        </div>
    `).join("");
}

function filtreazaReformulari(cat, btnEl) {
    document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    randeazaReformulari(cat);
}

// ==========================================================================
// 5. DECODORUL NON-VERBAL
// ==========================================================================
function randeazaDecodorNonverbal() {
    const container = document.getElementById("nonverbalGrid");
    if (!container) return;

    container.innerHTML = NONVERBAL_DATA.map(item => `
        <div class="nv-card">
            <div class="nv-icon-header">
                <span class="nv-icon">${item.icon}</span>
                <span class="badge-subtle">Semnal Corporal</span>
            </div>
            <h3>${item.titlu}</h3>
            <div class="nv-meaning-box">
                <span class="nv-meaning-label">Decodare Psihologică:</span>
                <p>${item.semnificatie}</p>
            </div>
            <p class="nv-reaction-tip">🎯 <strong>Cum reacționezi:</strong> ${item.reactie}</p>
        </div>
    `).join("");
}

// ==========================================================================
// 6. SCUTUL ANTI-MANIPULARE (NOU!)
// ==========================================================================
function randeazaScutAntiManipulare() {
    const container = document.getElementById("shieldGrid");
    if (!container) return;

    container.innerHTML = SHIELD_DATA.map(item => `
        <div class="shield-card">
            <div class="shield-top">
                <span class="shield-icon">${item.icon}</span>
                <span class="badge-subtle" style="color: var(--accent-pink);">Armă Psihologică</span>
            </div>
            <h3>${item.tactica}</h3>
            <div class="shield-hook-box">
                <strong>Cum sună manipularea:</strong>
                <p>${item.cumArata}</p>
            </div>
            <div class="shield-antidote-box">
                <strong>Replica Ta Asertivă (Antidotul):</strong>
                <p>${item.antidot}</p>
            </div>
            <p class="shield-meta-tip">🛡️ <strong>Regulă de aur:</strong> ${item.sfat}</p>
        </div>
    `).join("");
}

// ==========================================================================
// 7. DIAGNOSTICUL RADAR (EQ MATRIX - 8 ÎNTREBĂRI)
// ==========================================================================
function randeazaRadarPas(pasIndex) {
    appState.radarStep = pasIndex;

    const totalSteps = RADAR_QUESTIONS.length;
    document.getElementById("radarCurrentStep").textContent = pasIndex + 1;
    document.getElementById("radarProgressBar").style.width = `${((pasIndex + 1) / totalSteps) * 100}%`;

    const q = RADAR_QUESTIONS[pasIndex];
    document.getElementById("radarQuestionText").textContent = q.intrebare;

    const optionsWrap = document.getElementById("radarOptionsWrap");
    optionsWrap.innerHTML = q.optiuni.map((opt, i) => `
        <button class="quiz-choice-btn" onclick="inregistreazaAlegereRadar(${pasIndex}, ${i})">
            ${opt.text}
        </button>
    `).join("");
}

function inregistreazaAlegereRadar(pasIndex, optIndex) {
    const alegere = RADAR_QUESTIONS[pasIndex].optiuni[optIndex];

    appState.radarScores.carisma += alegere.carisma;
    appState.radarScores.empatie += alegere.empatie;
    appState.radarScores.asertivitate += alegere.asertivitate;
    appState.radarScores.calm += alegere.calm;

    const nextStep = pasIndex + 1;
    if (nextStep < RADAR_QUESTIONS.length) {
        randeazaRadarPas(nextStep);
    } else {
        calculeazaSiAfiseazaRadarRezultat();
    }
}

function calculeazaSiAfiseazaRadarRezultat() {
    document.getElementById("radarQuizContainer").classList.add("hidden");
    const resContainer = document.getElementById("radarResultContainer");
    resContainer.classList.remove("hidden");

    const maxPoss = RADAR_QUESTIONS.length * 20;
    const c = Math.min(100, Math.round((appState.radarScores.carisma / maxPoss) * 100));
    const e = Math.min(100, Math.round((appState.radarScores.empatie / maxPoss) * 100));
    const a = Math.min(100, Math.round((appState.radarScores.asertivitate / maxPoss) * 100));
    const k = Math.min(100, Math.round((appState.radarScores.calm / maxPoss) * 100));

    document.getElementById("meterCarismaVal").textContent = `${c}%`;
    document.getElementById("meterCarismaBar").style.width = `${c}%`;

    document.getElementById("meterEmpatieVal").textContent = `${e}%`;
    document.getElementById("meterEmpatieBar").style.width = `${e}%`;

    document.getElementById("meterAsertivitateVal").textContent = `${a}%`;
    document.getElementById("meterAsertivitateBar").style.width = `${a}%`;

    document.getElementById("meterCalmVal").textContent = `${k}%`;
    document.getElementById("meterCalmBar").style.width = `${k}%`;

    const nameEl = document.getElementById("profileArchetypeName");
    const descEl = document.getElementById("profileArchetypeDesc");
    const tipEl = document.getElementById("profileCustomTip");

    if (a >= 75 && e >= 75) {
        nameEl.textContent = "Arhetip: Liderul Diplomat și Empatic";
        descEl.textContent = "Echilibru optim între căldură umană și limite ferme. Reușești să asculți profund fără să fii călcat în picioare.";
        tipEl.textContent = "Continuă să inspiri prin exemplul tău. Antrenează-te pe medierea conflictelor complexe.";
    } else if (e > a) {
        nameEl.textContent = "Arhetip: Empaticul Protector (Risc People-Pleaser)";
        descEl.textContent = "Îți pasă profund de sentimentele celorlalți, dar ai tendința să spui DA atunci când ai dori să spui NU, acumulând epuizare.";
        tipEl.textContent = "Prioritatea ta este Pilonul 3 (Asertivitatea). Exersează refuzul politicos de cel puțin 2 ori săptămâna aceasta.";
    } else {
        nameEl.textContent = "Arhetip: Comunicatorul Direct și Ferm";
        descEl.textContent = "Ești foarte clar în cerințe și orientat spre acțiune, însă poți părea prea tranșant sau grăbit în ochii persoanelor mai sensibile.";
        tipEl.textContent = "Exersează Pilonul 2: Ascultarea Activă și pauza de 2 secunde înainte de a da replica.";
    }

    modificaXP(80, "Completare Diagnostic EQ!");
}

function reseteazaTestDiagnostic() {
    appState.radarStep = 0;
    appState.radarScores = { carisma: 0, empatie: 0, asertivitate: 0, calm: 0 };
    document.getElementById("radarQuizContainer").classList.remove("hidden");
    document.getElementById("radarResultContainer").classList.add("hidden");
    randeazaRadarPas(0);
}

// ==========================================================================
// 8. MISIUNI ZILNICE
// ==========================================================================
function randeazaMisiuni() {
    const container = document.getElementById("missionsList");
    if (!container) return;

    let completate = 0;
    container.innerHTML = appState.missions.map(m => {
        if (m.completed) completate++;
        return `
            <div class="mission-item-card ${m.completed ? 'completed' : ''}">
                <div class="mission-left">
                    <button class="mission-checkbox" onclick="comutaStatusMisiune(${m.id})">
                        ${m.completed ? '✓' : ''}
                    </button>
                    <div class="mission-details">
                        <h4>${m.text}</h4>
                        <div class="mission-meta-info">
                            <span class="badge-subtle">${m.category}</span>
                            <span class="mission-xp-tag">+${m.xp} XP</span>
                        </div>
                    </div>
                </div>
                <button class="btn-clean" onclick="stergeMisiune(${m.id})" title="Șterge misiunea">✕</button>
            </div>
        `;
    }).join("");

    document.getElementById("streakCount").textContent = `${completate} Misiuni`;
}

function comutaStatusMisiune(id) {
    const misiune = appState.missions.find(m => m.id === id);
    if (!misiune) return;

    misiune.completed = !misiune.completed;
    if (misiune.completed) {
        modificaXP(misiune.xp, `Misiune completată: „${misiune.text.slice(0, 25)}...”`);
    } else {
        modificaXP(-misiune.xp, `Misiune debifată`);
    }

    salveazaDateLocale();
    randeazaMisiuni();
}

function adaugaMisiunePersonalizata(event) {
    event.preventDefault();
    const input = document.getElementById("customMissionInput");
    const text = input.value.trim();
    if (!text) return;

    appState.missions.push({
        id: Date.now(),
        text: text,
        xp: 30,
        completed: false,
        category: "Personalizat"
    });

    salveazaDateLocale();
    randeazaMisiuni();
    input.value = "";
    afiseazaToast("Provocare nouă adăugată în agendă!", "gain");
}

function stergeMisiune(id) {
    const m = appState.missions.find(x => x.id === id);
    if (m && m.completed) {
        modificaXP(-m.xp, "Ștergere misiune finalizată");
    }
    appState.missions = appState.missions.filter(x => x.id !== id);
    salveazaDateLocale();
    randeazaMisiuni();
}

// ==========================================================================
// HELPERE MODALE & TOASTS
// ==========================================================================
function inchideModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add("hidden");
}

function inchideModalExterior(event, modalId) {
    if (event.target.id === modalId) {
        inchideModal(modalId);
    }
}

// ==========================================================================
// CERTIFICAT DIGITAL OFICIAL
// ==========================================================================
let numeCertificatSalvat = "Alexandru Popescu";

function deschideCertificatModal() {
    try {
        const savedName = localStorage.getItem("socialsphere_cert_name");
        if (savedName) numeCertificatSalvat = savedName;
    } catch(e) {}

    const rang = calculeazaRang(appState.xp);
    
    const nameEl = document.getElementById("certUserName");
    const rankEl = document.getElementById("certRankDisplay");
    const dateEl = document.getElementById("certIssueDate");

    if (nameEl) nameEl.textContent = numeCertificatSalvat;
    if (rankEl) rankEl.textContent = `${rang.nume} (Nivel ${rang.nivel} • ${appState.xp} XP)`;
    
    // Formatăm data curentă în limba română
    const azi = new Date();
    const optiuniData = { year: 'numeric', month: 'long', day: 'numeric' };
    if (dateEl) {
        try {
            dateEl.textContent = azi.toLocaleDateString('ro-RO', optiuniData);
        } catch(e) {
            dateEl.textContent = `${azi.getDate()}.${azi.getMonth() + 1}.${azi.getFullYear()}`;
        }
    }

    document.getElementById("certificateModal").classList.remove("hidden");
}

function editeazaNumeCertificat() {
    const numeNou = prompt("Introdu numele tău complet pentru a apărea pe certificat:", numeCertificatSalvat);
    if (numeNou && numeNou.trim()) {
        numeCertificatSalvat = numeNou.trim();
        try {
            localStorage.setItem("socialsphere_cert_name", numeCertificatSalvat);
        } catch(e) {}
        const nameEl = document.getElementById("certUserName");
        if (nameEl) nameEl.textContent = numeCertificatSalvat;
        afiseazaToast("Numele a fost actualizat pe certificat!", "gain");
    }
}

function printeazaCertificatul() {
    window.print();
}

// ==========================================================================
// MODAL DESPRE PROIECT / FIȘĂ TEHNICĂ PENTRU EVALUATORI
// ==========================================================================
function deschideModalDespreProiect() {
    document.getElementById("aboutProjectModal").classList.remove("hidden");
}

function afiseazaToast(mesaj, tip = "normal") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast-item ${tip === 'gain' ? 'toast-gain' : (tip === 'penalty' ? 'toast-penalty' : '')}`;
    toast.textContent = mesaj;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.25s ease";
        setTimeout(() => toast.remove(), 260);
    }, 3200);
}

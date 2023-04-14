interface Movie {
    type: "film" | "serie";
    id: number;
    name: string;
    image1: string;
    year: string;
    description: string;
    favorite: boolean;
  }
  
export const films : Movie[]=[

    {
        id: 0,
        type: "film",
        name: "El Padrino",
        favorite: true,
        year: "1972",
        image1: "https://cartelera.elpais.com/assets/uploads/2018/11/12120508/C_04445.jpg",
        description: "Don Vito Corleone, conocido dentro de los círculos del hampa como 'El Padrino', es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años cuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado."
    },
    {
        id: 1,
        type: "film",
        name: "El Padrino II",
        favorite: true,
        year: "1974",
        image1: "https://1.bp.blogspot.com/-4bbnfSjO5t0/XQp-1Cc1hwI/AAAAAAAAMM8/aorJYsQQGdsMjijpY_lGbigkCVtRtx7lgCLcBGAs/s1600/MV5BMDM1YzUyY2UtMDM1ZC00OTRhLWIxNTktNzA4Mzg3ODlhNmZhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTMxMjgxMzA%2540._V1_SY1000_CR0%252C0%252C666%252C1000_AL_.jpg",
        description: "Continuación de la historia de los Corleone por medio de dos historias paralelas: la elección de Michael como jefe de los negocios familiares y los orígenes del patriarca, Don Vito Corleone, primero en su Sicilia natal y posteriormente en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York."
    },
    {
        id: 2,        
        type: "film",
        favorite: false,
        name: "El Padrino III",
        year: "1990",
        image1: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/715RS5SFMvL._SY445_.jpg",
        description: "Michael Corleone, heredero del imperio de don Vito Corleone, intenta rehabilitarse socialmente y legitimar todas las posesiones de la familia negociando con el Vaticano. Después de luchar toda su vida se encuentra cansado y centra todas sus esperanzas en encontrar un sucesor que se haga cargo de los negocios. Vincent, el hijo ilegítimo de su hermano Sonny, parece ser el elegido."
    },
    {
        name: "Spiderman",
        type: "film",
        favorite: false,
        year: "2002",
        image1: "https://es.web.img2.acsta.net/medias/nmedia/18/90/04/41/20078157.jpg",
        description: "Spider-Man (conocida en Hispanoamérica como El Hombre Araña) es una película de superhéroes estadounidense de 2002 basada en el personaje del mismo nombre de Marvel Comics. Dirigida por Sam Raimi a partir de un guion de David Koepp, es la primera entrega de la trilogía de Spider-Man de Raimi y está protagonizada por Tobey Maguire como el personaje principal, junto a Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson y Rosemary Harris. La película narra la historia del origen de Spider-Man y su carrera temprana de superhéroe. Después de ser mordido por una araña alterada genéticamente, el adolescente marginado Peter Parker desarrolla habilidades sobrehumanas similares a las de una araña y adopta una identidad de superhéroe enmascarado para luchar contra el crimen y la injusticia en la ciudad de Nueva York, enfrentándose al siniestro Duende Verde (Dafoe) en el proceso.",
        id: 3
    },
    {
        name: "Lost",
        type: "serie",
        favorite: true,
        year: "2010",
        image1: "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        description: "El vuelo 815 se estrella en una isla desierta, exuberante y misteriosa. Enseguida, los sobrevivientes deben encontrar la forma de adaptarse al nuevo ambiente, a la vez que descubren un extraño sistema de seguridad, refugios subterráneos y un violento grupo de supervivientes",
        id: 4
    }
]
	

import { LangState } from '../interfaces/redux-interfaces/langInterfaces';

export const langEs: LangState = {
    currentLang: 'es',
    strings: {
        commons: {},
        navStrings: {
            toHomeTxt: 'Home',
            toProjectsTxt: 'Mis Proyectos',
            toBlogTxt: 'Blog',
            toContactTxt: 'Contacto',
        },
        footerStrings: {
            rightsTxt: 'Página desarrollada por mi utilizando React — Mendoza, Argentina (2021)',
        },
        homePageStrings: {
            toContact: 'Cómo contactarme',
            toGithub: 'Ver mi GitHub',
            toProjects: 'Ver mis proyectos',
            frameworksTitle: 'Frameworks',
            languagesTitle: 'Languajes',
            otherToolsTitle: 'Otras herramientas',
            reactAclarationTxt:'Si, React es en realidad una librería, no un framework, lo sé!'
        },
        contactPageStrings: {
            aboutMeComponent: {
                mainTitle: "Acerca de mi",
                paragraphs: [
                    'Soy un desarrollador.. fullstack? Te lo dejo a tu criterio. De la programación me gustan el front, el back y el desarro mobile también. Con esto se podría decir que soy "fullstack", pero creo que un sistema complejo es mucho más que solo estas 3 áreas, por lo que para "full" quizás me falte un poco.',
                    'Siempre ando buscando algo nuevo que aprender, sobre todo de programacion, buenas prácticas de desarrollo, y, por qué no, algun idioma (por ahora me quiero centrar en Inglés).',
                    'Fuera de la programación, me gusta mucho el cine, soy fan de Star Wars (no le digas "La Guerra de las Galaxias" por favor) tanto de las peliculas como de las novelas (sobre todo el universo de "Legends").. para nada nerd (?)',
                    'En fin, cree esta página con el objetivo que fuera mi CV web y mi portfolio, toda la web está creada con React, no utilicé plantillas de internet pero si busco ideas en otras páginas similares.',
                    'Normalmente estoy abierto a trabajos freelance, por lo que si quieres contactarme, abajo te dejo los medios para hacerlo!',
                    'Saludos! Juan.'
                ]
            }
        }
    },
};
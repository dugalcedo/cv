const qsa = s => document.querySelectorAll(s)
const qs = s => document.querySelector(s)

const enBtn = qs('#en-btn')
const svBtn = qs('#sv-btn')

enBtn.addEventListener('click', ()=>{translate(0)})
svBtn.addEventListener('click', ()=>{translate(1)})



const strings = {
    subtitle: [
        "Freelance web developer and tutor",
        "Frilans webbutvecklare och handledare"
    ],
    about: [
        "Info",
        "Uppgifter"
    ],
    email: [
        "Email",
        "E-Post"
    ],
    phone: [
        "Phone number",
        "Telefonnummer"
    ],
    stockholmcounty: [
        "Stockholm county",
        "Stockholms län"
    ],
    sweden: [
        "Sweden",
        "Sverige"
    ],
    webdevskills: [
        "Related skills",
        "Relaterade färdigheter"
    ],
    otherskills: [
        "Other skills",
        'Övriga färdigheter'
    ],
    teamwork: [
        "Teamwork",
        'Teamarbete'
    ],
    teamleadership: [
        "Team leadership",
        "Teamledning"
    ],
    logistics: [
        "Logistics",
        "Logistik"
    ],
    teaching: [
        "Teaching",
        "Undervisning"
    ],
    communication: [
        "Communication",
        "Kommunikation"
    ],
    timemanagement: [
        "Time management",
        "Tidshantering"
    ],
    fastlearning: [
        'Fast learning',
        'Snabblärning'
    ],
    adaptability: [
        "Adaptability",
        'Anpassningsförmåga'
    ],
    fluenten: [
        "Fluent English",
        'Flytande engelska'
    ],
    fluentsv: [
        'Fluent Swedish',
        'Flytande svenska'
    ],
    experience: [
        'Relevant experience',
        'Relevant erfarenhet'
    ],
    otherexp: [
        'Other experience',
        'Övrig erfarenhet'
    ],
    courier: [
        'Courier',
        'Kurir'
    ],
    bus: [
        'Bus driver',
        'Busschaufför'
    ],
    pizza: [
        'Pizza delivery',
        'Pizza leverans'
    ],
    deptmgr: [
        'Department manager',
        'Avdelningschef'
    ],
    frzndry: [
        'Frozen/dairy',
        'Frysen/mejeri'
    ],
    hygiene: ['Hygiene', 'Hygien'],
    food: ['Food', 'mat'],
    qc: ['Quality control', 'Kvalitetskontroll'],
    edu: ['Education', 'Utbildning'],
    svandpr: ['Swedish and programming', 'Svenska och programmering'],
    journal: ['Journalism', 'Journalistik'],
    hs: ['High school', 'Gymnasium'],
    references: ['References', 'Referenser'],
    examples: ['Examples', 'Exempel'],
    myport: ['My portfolio site', 'Min portfolio webbsida'],
    backend: ['Backend job simulation', 'Backend jobbsimulation']
}

if (location.search) {
    let queries = location.search.replace('?','').split('&')
    queries = queries.map(x => x.split('='))
    queries = Object.fromEntries(queries)
    if (queries.lang) {
        translate(queries.lang)
        setLang(queries.lang)
    }
    if (queries.pdf) {
        const langBtns = document.querySelector(`#lang-buttons`)
        const cv = document.querySelector(`#cv`)
        langBtns.style.display = 'none'
        cv.style.width = '100%'
        cv.style.borderRadius = 0
        document.body.style.padding = 0
    }
}

function translate(lang) {
    const els = qsa('[data-lang]')
    els.forEach(el => {
        const key = el.getAttribute('data-lang')
        el.innerText = strings[key][lang]
    })
    setLang(lang)
}

function getLang() {
    let lang = localStorage.getItem('dug-cv-lang')
    return lang || 0
}

function setLang(x) {
    localStorage.setItem('dug-cv-lang', x)
}

translate(getLang())
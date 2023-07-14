const skills = [
    {
        name: 'HTML/CSS/JavaScript',
        icon: 'hcj'
    },
    {
        name: 'Github',
    },
    {
        name: ['MVC Architecture', 'MVC Arkitektur'],
        icon: 'mvc'
    },
    {
        name: 'MongoDB',
        icon: 'mdb'
    },
    {
        name: 'Node',
    },
    {
        name: ['Object-oriented programming', 'Objektorienterad programmering'],
        icon: 'oop'
    },
    {
        name: 'Python',
        icon: 'py'
    },
    {
        name: 'React'
    },
    {
        name: ['Responsive design', 'Responsiv design'],
        icon: 'responsive'
    },
    {
        name: 'Sass'
    },
    {
        name: 'Svelte'
    },
    {
        name: 'Typescript',
        icon: 'ts'
    },
]

const skillsEl = qs('#skills .body')

function renderSkills() {
    skillsEl.innerHTML = ""
    let lang = getLang()
    skills.forEach(({name, icon}) => {
        if (Array.isArray(name)) {
            name = name[lang]
        }
        icon = icon || name.toLowerCase()
        let alt = `${name} ${lang == '1' ? 'ikon':'icon'}`
        skillsEl.innerHTML += `
            <div class="skill">
                <img src="./icons/${icon}.png" alt="${alt}">
                <div>${name}</div>
            </div>
        `
    })
}

renderSkills()
enBtn.addEventListener('click', renderSkills)
svBtn.addEventListener('click', renderSkills)
const deptmgr = ['Department manager', 'Avdelningschef']

const exp = {
    main: [
        {
            employer: ['Preply/self', 'Preply/själv'],
            title: ['Webdev tutor', 'Webbutvecklingshandledare'],
            span: [2023],
            desc: ['Helping web developers improve their skills in the workplace by teaching HTML, CSS, JavaScript and related concepts and assisting with projects.', 'Hjälper webbutvecklare att förbättra sina färdigheter på arbetsplatsen genom att lära ut HTML, CSS, JavaScript och relaterade koncept och hjälper till med projekt.']
        },
        {
            employer: ['Self','Själv'],
            title: ['Freelance web developer', 'Frilans webbutvecklare'],
            span: [2021],
            desc: ["Creating visually stunning and functional websites for clients' specific needs.", "Skapa visuellt fantastiska och funktionella webbplatser för kunders specifika behov."]
        },
    ],
    other: [
        {
            employer: 'Fedex',
            title: ['Courier', 'Kurir'],
            span: '2018-2021',
            loc: 'Denver, CO, USA'
        },
        {
            employer: 'Transdev',
            title: ['Bus driver', 'Bussförare'],
            span: '2018-2020',
            loc: 'Denver, CO, USA'
        },
        {
            employer: 'Pizza Hut',
            title: ['Pizza delivery', 'Pizza leverans'],
            span: '2016-2018',
            loc: 'Cathedral City, CA, USA'
        },
        {
            employer: 'Kmart',
            title: deptmgr,
            span: '2014-2016',
            loc: 'Asheville, NC & Indio, CA, USA'
        },
        {
            employer: 'Ingles',
            title: deptmgr,
            span: '2013-2014',
            loc: 'Asheville, NC, USA'
        },
        {
            employer: 'Walmart',
            title: deptmgr,
            span: '2011-2013',
            loc: 'Murrieta & San Diego, CA, USA'
        },
        {
            employer: 'R.R. Donnelly',
            title: ['Quality Control', 'Kvalitetskontroll'],
            span: '2010-2011',
            loc: 'Temecula, CA, USA'
        }
    ]
}

const expEl = qs('#exp .body')

function word(en, sv) {
    return getLang() == '0' ? en : sv
}

function wordIfArray(arr) {
    return Array.isArray(arr) ? 
        arr[getLang()] :
        arr
}

function renderExp() {
    const lang = getLang()
    expEl.innerHTML = ""
    exp.main.forEach(({
        employer,
        title,
        span,
        desc
    }) => {
        const start = span[0]
        const end = span[1] || word('present', 'nu')
        employer = wordIfArray(employer)
        title = wordIfArray(title)
        desc = desc[lang]
        expEl.innerHTML += `
            <div class="experience">
                <h4 aria-description="job title">${title}</h4>
                <div class="sub">
                    <h5 aria-description="employer">${employer}</h5>
                    <span aria-description="timespan">${start} - ${end}</span>
                </div>
                <p aria-description="job description">${desc}</p>
            </div>
        `
    })
    expEl.innerHTML += `<h4>${wordIfArray(['Other experience', 'Övriga erfarenheter'])}</h4>`
    let otherExpEl = document.createElement('section')
    otherExpEl.setAttribute('id', 'other-experiences')
    exp.other.forEach(({
        employer,
        title,
        span,
        loc
    })=>{
        title = wordIfArray(title)
        otherExpEl.innerHTML += `
            <div class="other-experience">
                <h5 aria-description="job title">${title}</h5>
                <h6 aria-description="employer">${employer}</h6>
                <div class="sub">
                    <span aria-description="timespan">${span}</span>
                    <span aria-description="job location">${loc}</span>
                </div>
            </div>
        `
    })
    expEl.append(otherExpEl)
}

renderExp()

enBtn.addEventListener('click', renderExp)
svBtn.addEventListener('click', renderExp)
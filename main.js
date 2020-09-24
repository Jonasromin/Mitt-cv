console.log("Nothing to see here");

fetch('https://api.github.com/users/jonasromin/repos')
.then(response => response.json())
.then (myRepos => {
    console.log(myRepos)

    let gitHubRepos = document.getElementById('gitHubRepos');

    for(i = 0; i < myRepos.length; i++){
        gitHubRepos.insertAdjacentHTML("beforeend", "<a href='" + myRepos[i].html_url + "' target='_blank'><div class='gitHubRepo'>" + myRepos[i].name + "</div></a>")
    }
})
document.getElementById('myContent').innerHTML = "";

document.getElementById('experience').addEventListener('click', showExperience);
document.getElementById('education').addEventListener('click', showEducation);
document.getElementById('skills').addEventListener('click', showSkills);

function showExperience(){
    
    let experience = '<h2>Experience</h2>'; 
    experience += ` 
        <div id="experience">
        <br>
            <h4><Strong>Taktisk inköpare</Strong></h4>
            <br>
            <strong>Domsjö Fabriker AB</strong> 
            <br>
            2019-02 - Nuvarande
            <br>
            <br>
                <ul>
                    <li>Beställa och planera leveranser av processkemikalier och emballagematerial</li>
                    <li>Utföra beställningar vid interna behov av tjänster och ej förrådslagt material</li>
                    <li>Ta in offerter vid inköp av material</li>
                    <li>Leveransbevakning</li>
                </ul>
            <br>
            <h4><Strong>Förrådsavropare</Strong></h4>
            <br>
            <strong>Domsjö Fabriker AB</strong> 
            <br>
            2016-05 - 2019-02
            <br>
            <br>
                <ul>
                    <li>Beställa förrådslagda reservdelar</li>
                    <li>Leveransbevaka </li>
                    <li>Kontakta leverantörer vid returer, reklamationer och problemlösning</li>
                    <li>Hjälpa till med beställningar vid interna behov</li>
                </ul>
            <br>
            <h4><Strong>Produktionsplanerare</Strong></h4>
            <br>
            <strong>BAE Systems Hägglunds</strong> 
            <br>
            2015-05 - 2016-05
            <br>
            <br>
                <ul>
                    <li>Planera tillverkningsordrar för serieproduktion</li>
                    <li>Skapa omarbetsordrar</li>
                    <li>Köpa op-lego från underleverantörer</li>
                    <li>Administrera och färdigställa tillverkningsordrar</li>
                </ul>
            <br>
            <h4><Strong>Lageradministratör</Strong></h4>
            <br>
            <strong>BAE Systems Hägglunds</strong> 
            <br>
            2014-05 - 2015-04
            <br>
            <br>
                <ul>
                    <li>Inventera</li>
                    <li>Utföra saldoutredningar</li>
                    <li>Verkställa skrotning av material i SAP</li>
                    <li>Supporta lager & inköpspersonal vid lagerfrågor</li>
                </ul>
            <br>
            <h4><Strong> Golvläggare</Strong></h4>
            <br>
            <strong>BL Interiör AB Umeå</strong> 
            <br>
            2010-10 - 2012-07
            <br>
            <br>
                <ul>
                    <li>Montera plastmattor som ytskikt</li>
                    <li>Underarbeta ytor vid behov</li>
                    <li>Montera trägolv</li>
                    <li>Arbeta fram lösningar med kunden mot deras vision</li>
                </ul>
                <a class="returnLink display-4" href="#mainHeader"><i class="fas fa-reply"></i> Back</a>
        </div>
        
                        `;
    document.getElementById('myContent').innerHTML = experience;
};

function showEducation(){
    
    let education = '<h2>Education</h2>'; 
    education += ` 
        <div id="education">
            <h5><Strong>Webbutvecklare.net</Strong></h3>
            <br>
            Campus Värnamo
            <br>
            2020-07 - 2022-05
            <br>
            <br>
            <h5> <Strong>Kvalificerad inköpare med inriktning mot logistik</Strong></h3>
            <br>
            Norrlands yrkeshögskola
            <br>
            2012-08 - 2014-05
            <br>
            <br>
            <h5><Strong>Byggutbildning med inriktning mot golvläggning och plattsättning</Strong></h3>
            <br>
            Yrkesvux Örnsköldsvik
            <br>
            2009-06 - 2010-08
            <br>
            <br>
            <h5><Strong>Samhällsprogrammet med inrikting människa it kommunikation</Strong></h3>
            <br>
            Nolaskolans gymnasium Örnsköldsvik
            <br>
            2004-08 - 2007-06
            <br>
            <br>
            <a class="returnLink display-4" href="#mainHeader"><i class="fas fa-reply"></i> Back</a>
        </div>
        
                 `;

    document.getElementById('myContent').innerHTML = education;
};

function showSkills(){
    
    let skills = '<h2>Education</h2>'; 
    skills += ` 
        <div id="skills">
        <br>
        <h4><Strong>Språkkunskaper</Strong></h4>
        <br>
            <p>
            Svenska: Modersmål
            <br>
            Engelska: Goda kunskaper i skrift och tal
            <p>
        </ul>
        <br>
        <h4><Strong>Datakunskaper</Strong></h4>
        <br>
            <p>
            Goda kunskaper i MS Office
            <br>
            Goda kunskaper i SAP
            <br>
            Goda kunskaper i Maximo
            <br>
            Grundläggande kunskaper i GitHub
            </p>
        <br>
        <h4><Strong>Övrigt</Strong></h4>
        <br>
            <p>
            Körkort B
            <br>
            Tillgång till egen bil
            </p>
            <a class="returnLink display-4" href="#mainHeader"><i class="fas fa-reply"></i> Back</a>
        </div>
        
                 `;

    document.getElementById('myContent').innerHTML = skills;
};

function loadPage(pageNumber) {
    // Note: This always targets the first 'image-results-area' [cite: 12, 42]
    const displayArea = document.getElementById('image-results-area');



    if (!displayArea) {
        console.error("Target area not found!");
        return;
    }

    const projectTemplate = (title,proj_title, objective, tech, contributions) => `
    <h6 class="text-secondary text-uppercase mb-4" style="font-size: 0.75rem; letter-spacing: 1px;">
        Detailed Overview
    </h6>
    <h5 class="text-dark mb-0 fw-normal">
        ${title}
    </h5>
    

  <h6 class="text-secondary text-uppercase mt-2 mb-1" style="font-size: 0.75rem; letter-spacing: 1px;">
    ${proj_title}
  </h6>

    <div class="mt-0 p-4 border-0 rounded-3 bg-light shadow-sm" >    

    <div  class="mb-3">
        <label class="fw-bold text-primary small mb-1">Objective / Problem Statement</label>
        <p class="small text-dark lh-base">${objective}</p>
    </div>

    <div class="mb-3">
        <label class="fw-bold text-primary small mb-1">Tech Stack & Tools</label>
        <div class="d-flex flex-wrap gap-2">
            <p class="small text-dark mb-0">${tech}</p>
        </div>
    </div>

    <div class="mb-4">
        <label class="fw-bold text-primary small mb-1">Key Contributions & Actions</label>
        <div class="small text-secondary border-start ps-3 py-1">
            ${contributions}
        </div>
    </div>

    <div class="text-end">
        <button class="btn btn-sm btn-link text-decoration-none text-muted" onclick="closeProject()">
            <i class="bi bi-x-circle"></i> Close Details
        </button>
    </div>
</div>`;

    if (pageNumber == 11) {


    toggle_on(11)
    bg_off(12)
    
        displayArea.innerHTML = projectTemplate(
            "University Exam Automation | Software Developer"," ",
            "To modernize the University Exam Section's manual workflows into a synchronized, enterprise-grade web application.",
            "Python, Django, PostgreSQL, NAD Digilocker API",
            `<ul>
                <li>Designed custom Python-based NAD formatting tool for Digilocker synchronization.</li>
                <li>Implemented Cumulative Credit tracking for B.Tech promotion logic.</li>
                <li>Re-engineered Degree Certificate modules with strict validation protocols.</li>
                <li>Developed automated CML reporting.</li>
            </ul>`
        );
    } 
    else if (pageNumber == 12) {

    bg_off(11)
    bg_off(13)
    bg_off(21)
    bg_off(22)
    bg_off(23)
    toggle_on(12)
        displayArea.innerHTML = projectTemplate(
            "SAP Hybris Customization | Software Developer"," ",
            "Customizing e-commerce frameworks to drive European sales performance.",
            "J2EE, Spring MVC, SAP Hybris, Oracle ATG",
            `<ul>
                <li>Provided DevOps support on the Oracle ATG platform.</li>
                <li>Customized enterprise e-commerce modules using J2EE Spring MVC.</li>
            </ul>`
        );
    }
    else if (pageNumber == 13) {
    bg_off(11)
    bg_off(12)
    bg_off(21)
    bg_off(22)
    bg_off(23)
    toggle_on(13)
        displayArea.innerHTML = projectTemplate(
            "Banking Backend Automation | Sr. Software Engineer","project title ",
            "Automating backend processes and maintaining high-integrity SQL interactions.",
            "J2EE, Spring MVC, SQL",
            `<ul>
                <li>Developed web pages enabling backend automation.</li>
                <li>Managed meticulous SQL interactions to maintain database integrity.</li>
            </ul>`
        );
    }
    else if (pageNumber == 21) {
    bg_off(11);bg_off(13);bg_off(12);bg_off(22);bg_off(23)
    toggle_on(21)

            // To change the button color to a solid filled color
            //document.getElementById('btn21').classList.remove('btn-outline-primary');
            //document.getElementById('btn21').classList.add('btn-primary'); // Change to green
            //btn23.style.color = btn22.style.color = btn13.style.color = btn12.style.color = "black";
        displayArea.innerHTML = projectTemplate(
            "Software Developer | Aris Lab, CUSAT ","CBCS Project, Cochin University Exam Section",
            "Automating workflows for diverse schemes with timely academic mandates, facilitating 13-tier granular role-based access control for administrative officers, fostering interdisciplinary and holistic education for user groups such as UG, PG, Diploma, and Ph.D. students.",
            "Python 3.5,django 1.11.6, Pycharm,Postgresql PgAdmin4,git & BitBucket, HTML,CSS,BootStrap,JQuery ",
            `<ul>
                <li>Designed custom Python-based NAD formatting tool for Digilocker synchronization.</li>
                <li>Implemented Cumulative Credit tracking for B.Tech promotion logic.</li>
                <li>Developed automated Consolidated MArk List reporting.</li>
                <li>Re-engineered the Degree Certificate and Mark Card modules with protocols that prevented certificate generation for students with pending results</li>
                <li>...</li>
                
            </ul>`
        );
    }
    else if (pageNumber == 22) {
    bg_off(11);bg_off(13);bg_off(12);bg_off(21);bg_off(23)
    toggle_on(22)

            //btn22.style.color = "blue";
            //btn23.style.color = btn21.style.color = btn13.style.color = btn12.style.color = "black";
        displayArea.innerHTML = projectTemplate(
            "Software Developer | Mindcurv (Accenture Song)","Nikon ,Deli XL e-commerce project","Major enterprise-level e-commerce initiatives. Operates relying on robust, scalable backends like SAP Hybris (SAP Commerce Cloud) to manage complex product catalogs, B2B/B2C workflows, and global supply chain integrations.",
            "J2EE Spring MVC, SAP Hybris, Oracle ATG",
            `<ul>
                <li>Managed J2EE and Spring MVC customizations for Nikon’s pan-European Online Sales platform</li>
                <li>Deployed business logic within the SAP Hybris framework to meet regional regulatory requirements.</li>
                <li>Enhanced platform stability for Oracle ATG-based site resolving critical production bugs in collaboration with DeliXL DevOps team.</li>
                <li>...</li>
            </ul>`
        );
    }
    else if (pageNumber == 23) {
    bg_off(11);bg_off(13);bg_off(12);bg_off(22);bg_off(21)
    toggle_on(23)

        //btn23.style.color = "blue";
        //btn22.style.color = btn21.style.color = btn13.style.color = btn12.style.color = "black";
        displayArea.innerHTML = projectTemplate(
            "Sr Software Engineer | Tech Mahindra","Online SBI Banking Project - Retail,Corporate,DEMAT accounts ",
            " Develop high-throughput logic for retail and bulk financial transactions using J2EE Spring MVC with SQL at backend, to serve Retail,Corporate and Demat account holders of the bank.",
            "J2EE, jsp pages , Spring MVC, SQL",
            `<ul>
                <li>Backend automation via Spring Model View Controller architecture rendered on Java Server Pages.</li>
                <li>Orchestrating precise SQL execution to uphold ledger consistency and data integrity across critical banking infrastructures</li>
                <li>Automation: Engineered  General Dealer Finance (GDF) lifecycle and EzInstructions for Demat account holders.</li>
                <li>Supported  Online Tax Accounting module(OLTAS) ensuring precise real-time data capture and tracking  with Challan Identification Number</li>
                <li>Enhanced Electronic Clearing System and Bulk Transaction modules</li>
                <li>...</li>

            </ul>`
        );
    }
}
function toggle_on(id)
{   

const button = document.getElementById("btn" + id);
const element = document.getElementById("proj" + id); 

    // This hides the button and collapses the space it took
    button.style.display = "none";
    element.style.backgroundColor = "#e7f3ff"; // Soft blue highlight
    element.style.padding = "10px";           // Optional: makes the color look better
    }
function bg_off(id)
{   

const button = document.getElementById("btn" + id);
const element = document.getElementById("proj" + id);   
    
    button.style.display = "inline-block";
    element.style.backgroundColor = ""; 
    //element.style.padding = "10px";           // Optional: makes the color look better
    }
    
function closeProject() {
    document.getElementById('image-results-area').innerHTML = '<h6 class="text-secondary text-uppercase mb-4" style="font-size: 0.75rem; letter-spacing: 1px;">Detailed Overview</h6><p>Loading initial batch...</p>';
}

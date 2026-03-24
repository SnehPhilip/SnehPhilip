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


    toggle_on(11);    bg_off(12);    bg_off(13);    bg_off(21);    bg_off(22);    bg_off(23)
    
        displayArea.innerHTML = projectTemplate(
            " Data Analyst | Freelance | NDVI Calculation and Time Series Analysis for Petroleum infrastructure "," ",
            "Normalized Vegetation Index Calculation and Time series Analysis using Google Earth Engine (GEE)- a massive, cloud-based platform designed for geospatial analysis",
            "javascript , global elevation dataset ,LANDSAT/LC08/C02/T1_L2 dataset",
            `<ul>
                <li>Analyse the cloud-based platform designed for geospatial planetary scale analysis.A unique spectral signature - raw reflectance values in two specific bands is fundamental for calculation- Red Light  ,Near-Infrared Light (NIR) </li><li> Calculate NDVI for specific time period and geographical location. </li>
                <li>Java script code development for normalized Calculation and Time Series Analysis</li>
               
            </ul>`
        );
    } 
    else if (pageNumber == 12) {

    bg_off(11);    bg_off(13);    bg_off(21);    bg_off(22);    bg_off(23);    toggle_on(12)
        displayArea.innerHTML = projectTemplate(
            "Aggressive Sports Actions Detection  | HAR Research Project"," ",
            `<li>Detection of Aggressive Sports Actions (Violence and Basketball-slam dunks) using 3dCNN.</li>`,
            " Datasets explored (NBA Basketball, SpaceJam, and UCF101 dunk subset),Hockey Fight Dataset (used for violence detection benchmarks)",
            `<ul>
                <li>Background : Evolution analysis of computer vision in sports science and analysis of different data modalities</li>
                <li>3D Convolutional Neural Networks, demonstrate their capability of extracting spatio-temporal features from videos, being effective in violence detection.</li>
                <li>The implementation : based on 3dCNN feature extractor and artificial neural network classifier.Frame Extraction ,Downsampling ,Resizing ,Spatial Augmentation ,Temporal Augmentation,3D Kernels that slide across height, width, and time to identify spatio-temporal features , Global Average Pooling layer and Fully Connected Dense layer to transition from feature maps to final class predictions.
                </li>
                
                <li><h3>Project Documentation</h3>
    <p>Click the link below to view the full document:</p>
    <a href="https://docs.google.com/document/d/1KDSfZoLGET6aEip0MfiQfD730wlajQlUBPaFwQgPZ-E/edit?usp=sharing" target="_blank">
        Open Google Doc
    </a>
                </li>
            </ul>`
        );
    }
    else if (pageNumber == 13) {
    bg_off(11);   bg_off(12);    bg_off(21);    bg_off(22);    bg_off(23);    toggle_on(13)
        displayArea.innerHTML = projectTemplate(
            "Image Classification Models | IEEE, RWEP Workbench ","Neural Networks",
            "Deep Learning models to classify images - Evaluating Classifier Efficacy",
            "ANN(Flattened),CNN,Deep CNN ,Transfer Learning",
            `<ul>
                <li>Advanced Image Classification via Transfer Learning using ResNet50 and VGG16 with pre-trained weights </li>

                <li>Comparative Analysis of Model Performance on Fashion Image Datasets with ANN ,CNN  </li>
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
            "To automate choice based credit system , designed to move away from a rigid, one-size-fits-all curriculum toward a more flexible student-centric model.Support Interdisciplinary choice , Cumulative Grade Point Average , portable credits etc to maintain the modern academic framework.",
            "Python 3.5,django 1.11.6, Pycharm,Postgresql PgAdmin4,git & BitBucket, HTML,CSS,BootStrap,JQuery ",
            `<ul>
            <li>Automate workflows for diverse schemes facilitating 13-tier granular role-based access control for administrative officers.</li>
            <li>Engineer and deploy new modules for the high-traffic statewide enterprise application, maintaining functionality of the end-to-end academic lifecycle based on complex university norms and national compliance standards.
</li><li>Update timely academic mandates, fostering interdisciplinary and holistic education for user groups such as UG, PG, Diploma, and Ph.D. students</li><li>...</li>
            </ul>`
        );
    }
    else if (pageNumber == 22) {
    bg_off(11);bg_off(13);bg_off(12);bg_off(21);bg_off(23)
    toggle_on(22)

            //btn22.style.color = "blue";
            //btn23.style.color = btn21.style.color = btn13.style.color = btn12.style.color = "black";
        displayArea.innerHTML = projectTemplate(
            "Software Developer | Mindcurv (Accenture Song)","Nikon , Deli XL e-commerce projects","Web app development for major enterprise-level E-COMMERCE initiatives. Customize robust, scalable backends like SAP Hybris (SAP Commerce Cloud) to manage complex product catalogs, B2B/B2C workflows,Promotion Rules built on Drools Engine and Impex Scripts.",
            "J2EE Spring MVC, SAP Hybris, Oracle ATG",
            `<ul>
                <li>Managed J2EE and Spring MVC customizations for Nikon’s pan-European Online Sales platform</li>
                <li>Deployed business logic within the SAP Hybris framework to meet regional regulatory requirements.</li>
                <li>Enhanced platform stability in collaboration with DeliXL DevOps team for Oracle ATG-based site, resolving critical production bugs </li>
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
            `To develop high-throughput response for nation-wide banking operations for high-volume Retail and Corporate bulk financial transactions.
            Management of Demat accounts for seamless integration with depository participants (CDSL/NSDL).  
            Scalable Backend Design: Engineered modules in the application layer using J2EE Spring MVC with SQL at backend and jsp pages at frontend .`,
            "J2EE, jsp pages , Spring MVC, SQL",
            `<ul>
                <li>Backend automation via Spring Model View Controller architecture rendered on Java Server Pages.</li>
                <li>Orchestrated precise SQL execution to uphold ledger consistency and data integrity across critical banking infrastructures</li>
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
    element.className = "bg-info bg-opacity-10 p-4 border rounded-3 shadow-sm";
    }
function bg_off(id)
{   
const button = document.getElementById("btn" + id);
const element = document.getElementById("proj" + id);   
    
    button.style.display = "inline-block";
    element.style.backgroundColor = ""; 
    element.className = "";
    //element.style.padding = "10px";           // Optional: makes the color look better
    }
    
function closeProject() {
    document.getElementById('image-results-area').innerHTML = '<h6 class="text-secondary text-uppercase mb-4" style="font-size: 0.75rem; letter-spacing: 1px;">Detailed Overview</h6><p>Click Read More>> button to view each Project Detail. </p>';
}

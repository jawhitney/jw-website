// JAW Namespace
var jawJs = jawJs || {};

// Constants
jawJs.sections = [
    'Resume',
    'Portfolio'
];

jawJs.paddingTop = 73;

function updateElement(element) {
    element.classList.add('loaded');
}

function updateRating(rating, i) {
    rating.classList.add('loaded');

    [].slice.call(rating.querySelectorAll('.progress span:nth-child(2)')).forEach(function(progress) {
        progress.style.transitionDelay = (i * 0.05) + 's';
        progress.style.width = rating.dataset.rating + '%';
    });
}

(function() {
    document.addEventListener('DOMContentLoaded', function(e) {
        var today = new Date();
        document.getElementById('copyrightYear').innerHTML = today.getFullYear();

        ['resume', 'portfolio'].forEach(function(id) {
            var data = jawJs.data[id],
                section = document.getElementById(id);

            if (data && section) {
                var template = Handlebars.compile(document.getElementById('template' + id).innerHTML);
                section.innerHTML = template(data);
            }
        });

        var config = {
                threshold: [0.5]
            },
            ratings = [].slice.call(document.querySelectorAll('.rating')),
            elements = [].slice.call(document.querySelectorAll('.headline, article, .left, .right'));

        if ('IntersectionObserver' in window) {
            var ratingObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry, i) {
                    if (entry.isIntersecting) {
                        ratingObserver.unobserve(entry.target);
                        updateRating(entry.target, i);
                    }
                });
            }, config);

            ratings.forEach(function(rating) {
                ratingObserver.observe(rating);
            });

            var elementObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        elementObserver.unobserve(entry.target);
                        updateElement(entry.target);
                    }
                });
            }, config);

            elements.forEach(function(element) {
                elementObserver.observe(element);
            });
        } else {
            ratings.forEach(function(rating, i) {
                updateRating(rating, i);
            });

            elements.forEach(function(rating) {
                updateElement(rating);
            });
        }
    });
})();

// Data
jawJs.data = {
    "resume": {
        "entries": [
            {
                "heading": "Skills",
                "id": "technical-skills",
                "multiColumn": true,
                "content": [
                    {
                        "heading": "Languages",
                        "ratings": [
                            {
                                "item": "CSS",
                                "rating": 100
                            },
                            {
                                "item": "HTML",
                                "rating": 100
                            },
                            {
                                "item": "JavaScript",
                                "rating": 100
                            },
                            {
                                "item": "PHP",
                                "rating": 100
                            },
                            {
                                "item": "Python",
                                "rating": 60
                            },
                            {
                                "item": "SQL/MySQL",
                                "rating": 100
                            },
                        ]
                    },
                    {
                        "heading": "Tools",
                        "ratings": [
                            {
                                "item": "AEM",
                                "rating": 60
                            },
                            {
                                "item": "Angular",
                                "rating": 60
                            },
                            {
                                "item": "Git",
                                "rating": 100
                            },
                            {
                                "item": "Gulp",
                                "rating": 100
                            },
                            {
                                "item": "Less",
                                "rating": 80
                            },
                            {
                                "item": "Node",
                                "rating": 80
                            },
                            {
                                "item": "Sass",
                                "rating": 100
                            },
                            {
                                "item": "WordPress",
                                "rating": 100
                            }
                        ]
                    },
                    {
                        "heading": "Products",
                        "ratings": [
                            {
                                "item": "Bootstrap",
                                "rating": 100
                            },
                            {
                                "item": "Google Analytics",
                                "rating": 80
                            },
                            {
                                "item": "Heroku",
                                "rating": 60
                            },
                            {
                                "item": "Illustrator",
                                "rating": 60
                            },
                            {
                                "item": "Marketo",
                                "rating": 100
                            },
                            {
                                "item": "Photoshop",
                                "rating": 80
                            },
                            {
                                "item": "Salesforce",
                                "rating": 60
                            },
                        ]
                    }
                ]
            },
            {
                "heading": "Experience",
                "id": "experience",
                "content": [
                    {
                        "heading": "Return Path (Indianapolis, IN)",
                        "subheading": "Senior Digital Developer (June 2015 to present)",
                        "text": [
                            "As part of the Marketing team, I support the development of Return Path’s public-facing digital properties. This includes device optimization, demand-gen optimization, lead form optimization, digital analytics, CMS optimization, and implementation of new features and functionality. I also create digital experiences that demonstrate the use of the Return Path product."
                        ],
                        "cards": [
                            {
                                "url": "https://returnpath.com",
                                "description": "Return Path corporate site",
                                "skills": "WordPress",
                                "image": "return-path.jpg",
                            },
                            {
                                "url": "https://returnpath.com/solutions/",
                                "description": "Return Path solutions",
                                "skills": "WordPress",
                                "image": "return-path-solutions.jpg",
                            },
                            {
                                "url": "https://returnpath.com/request-a-demo/",
                                "description": "Return Path Request a Demo",
                                "skills": "WordPress, Marketo",
                                "image": "return-path-rad.jpg",
                            },
                            {
                                "url": "https://blog.returnpath.com",
                                "description": "Return Path blog",
                                "skills": "WordPress",
                                "image": "return-path-blog.jpg",
                            },
                            {
                                "url": "https://emaildna.com",
                                "description": "EmailDNA",
                                "skills": "WordPress",
                                "image": "emaildna.jpg",
                            },
                            {
                                "url": "https://senderscore.org",
                                "description": "Sender Score application",
                                "skills": "PHP",
                                "image": "senderscore.jpg",
                            },
                            {
                                "url": "https://returnpath.com/games/path-to-the-inbox/?playnow=true",
                                "description": "Path to the Inbox game",
                                "skills": "JavaScript, PhaserJS",
                                "image": "path-to-the-inbox.jpg",
                            },
                            {
                                "url": "https://returnpath.com/games/email-heroes/?playnow=true",
                                "description": "Email Heroes game",
                                "skills": "JavaScript, PhaserJS",
                                "image": "email-heroes.jpg",
                            },
                            {
                                "url": "https://returnpath.com/games/the-great-email-escape/?playnow=true",
                                "description": "The Great Email Escape game",
                                "skills": "JavaScript, PhaserJS",
                                "image": "great-email-escape.jpg",
                            },
                        ]
                    },
                    {
                        "heading": "Salesforce Marketing Cloud/ExactTarget (Indianapolis, IN)",
                        "subheading": "Digital Developer (October 2013 to June 2015)",
                        "text": [
                            "As part of the WWW Front-End and the Marketing teams I supported the development of Salesforce’s and Salesforce Marketing Cloud’s public-facing digital properties. This included demand-gen optimization, lead form optimization, digital analytics, refresh of website designs, and implementation of new website functionality."
                        ],
                    },
                    {
                        "heading": "Blue Horseshoe Solutions (Carmel, IN)",
                        "subheading": "Developer (February 2013 to October 2013)",
                        "text": [
                            "Designed and implemented warehouse management and supply chain solutions for external clients. This included the design and development of new web applications, debugging of existing web applications, and implementation of new features for existing applications."
                        ]
                    },
                    {
                        "heading": "Keynote, a Cru ministry (Westfield, IN)",
                        "subheading": "Web/App Developer/Designer (January 2009 to December 2012)",
                        "text": [
                            "Served by designing, developing, and maintaining organizational and evangelistic websites as well as web applications for Keynote, a Christian non-profit missionary organization."
                        ],
                    },
                    {
                        "heading": "United Launch Alliance / Lockheed Martin (Littleton, CO)",
                        "subheading": "Software Engineering Associate (June 2005 to December 2008)",
                        "text": [
                            "Responsibilities as a member of the Atlas V Rocket Avionics Instrumentation team included providing on-site and remote launch support, designing and implementing new hardware, hardware testing, analyzing pre-flight and post-flight data, and supporting booster and upper stage vehicle production. Supported six launches on-site from Cape Canaveral Air Force Station and Vandenberg Air Force Base."
                        ]
                    },
                    {
                        "heading": "Lockheed Martin (Littleton, CO)",
                        "subheading": "Intern (May 2004 to July 2004)",
                        "text": [
                            "Supported Atlas V rocket ground systems electrical group by redlining and updating engineering drawings associated with Space Launch Complex 41 at Cape Canaveral Air Force Station, Space Launch Complex 3E at Vandenberg Air Force Base, and the Systems Integration Laboratory in Littleton, Colorado."
                        ]
                    },
                    {
                        "heading": "NASA-Kennedy Space Center Undergraduate Research Program (Cape Canaveral, FL)",
                        "subheading": "Intern (May 2003 to July 2003)",
                        "text": [
                            "Supported the mission analysis group by developing SimMechanics, Simulink, and MATLAB models. Developed a linear and nonlinear electromechanical actuator (EMA) model for use in Delta IV rocket simulation and a separation dynamics model to simulate vehicle separation."
                        ]
                    }
                ]
            },
            {
                "heading": "Awards/Publications",
                "id": "awardsPublications",
                "content": [
                    {
                        "links": [
                            {
                                "url": "https://enter.hermesawards.com/winners/#/platinum/2019",
                                "description": "2019 Platinum award in the \"Outstanding Microsite\" category for Email DNA (Hermes Creative Awards)"
                            },
                            {
                                "url": "https://enter.hermesawards.com/winners/#/gold/2019",
                                "description": "2019 Gold award in the \"Outstanding Microsite\" category for The Great Email Escape (Hermes Creative Awards)",
                            },
                            {
                                "url": "https://enter.dotcommawards.com/winners/#/platinum/2018",
                                "description": "2018 Platinum award in the \"Online Online Game\" category for Guardians of the Email Universe (dotCOMM Awards)",
                            },
                            {
                                "url": "http://enter.marcomawards.com/winners/#/platinum/2018",
                                "description": "2018 Platinum award in \"Outstanding Web Animation\" category for Path to the Inbox game (MarCom Awards)",
                            },
                            {
                                "url": "http://enter.marcomawards.com/winners/#/gold/2018",
                                "description": "2018 Gold award in \"Outstanding Web Animation\" category for Guardians of the Email Universe game (MarCom Awards)",
                            },
                            {
                                "url": "https://enter.dotcommawards.com/winners/#/gold/2018",
                                "description": "2018 Gold award in the \"Outstanding Microsite\" category for Guardians of the Email Universe (dotCOMM Awards)",
                            },
                            {
                                "url": "https://enter.hermesawards.com/winners/",
                                "description": "2018 Gold award in the \"Outstanding B2B Website\" category for Return Path website (Hermes Creative Awards)",
                            },
                            {
                                "url": "https://enter.dotcommawards.com/winners/",
                                "description": "2017 Platinum award in the \"Outstanding Microsite\" category for Email for President (dotCOMM Awards)",
                            },
                            {
                                "url": "https://enter.hermesawards.com/winners/",
                                "description": "2017 Platinum award in the \"Outstanding Microsite\" category for Email for President (Hermes Creative Awards)",
                            },
                            {
                                "url": "https://enter.dotcommawards.com/winners/",
                                "description": "2017 Gold award in the \"Outstanding Microsite\" category for Guardians of the Email Universe (dotCOMM Awards)",
                            },
                            {
                                "url": "https://enter.hermesawards.com/winners/",
                                "description": "2017 Gold award in the \"Outstanding Microsite\" category for Guardians of the Email Universe (Hermes Creative Awards)",
                            },
                            {
                                "url": "https://www.salesforce.com/blog/2014/10/journey-builder-and-the-connections-2014-mobile-app.html?mc=marketingcloud.com/blog/journey-builder-and-the-connections-2014-mobile-app",
                                "description": "Journey Builder and the Connections 2014 Mobile App"
                            },
                        ]
                    },
                ]
            },
            {
                "heading": "Education",
                "id": "education",
                "content": [
                    {
                        "heading": "University of Colorado (Boulder, CO)",
                        "subheading": "Bachelor of Science Aerospace Engineering Sciences, GPA: 3.65 (August 2001 to May 2005)",
                        "text": [
                            "Honors: College of Engineering and Applied Science Dean's List (Fall 2001, Fall 2002, Spring 2003, Fall 2004)",
                            "Activities: Alpha Gamma Omega Fraternity, Sigma Gamma Tau (Aerospace Honor Fraternity), University Christian Fellowship, American Indian Science and Engineering Society, Multicultural Engineering Program"
                        ]
                    }
                ]
            }
        ]
    }
};

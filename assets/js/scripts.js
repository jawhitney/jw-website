// JAW Namespace
var jawJs = jawJs || {};

// Constants
jawJs.sections = [
    'Resume',
    'Portfolio'
];

jawJs.paddingTop = 73;

function updateArticle(article) {
    article.classList.add('loaded');
}

function updateRating(rating) {
    rating.classList.add('loaded');

    [].slice.call(rating.querySelectorAll('.progress span:nth-child(2)')).forEach(function(progress) {
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

        var ratings = [].slice.call(document.querySelectorAll('.rating')),
            articles = [].slice.call(document.querySelectorAll('article'));

        if ('IntersectionObserver' in window) {
            var ratingObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        ratingObserver.unobserve(entry.target);
                        updateRating(entry.target);
                    }
                });
            });

            ratings.forEach(function(rating) {
                ratingObserver.observe(rating);
            });

            var articleObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        articleObserver.unobserve(entry.target);
                        updateArticle(entry.target);
                    }
                });
            });

            articles.forEach(function(rating) {
                articleObserver.observe(rating);
            });
        } else {
            ratings.forEach(function(rating) {
                updateRating(rating);
            });

            articles.forEach(function(rating) {
                updateArticle(rating);
            });
        }
    });
})();

// Handlebars custom helpers
Handlebars.registerHelper('link', function(url, description) {
    url = Handlebars.Utils.escapeExpression(url);
    description  = Handlebars.Utils.escapeExpression(description);

    return new Handlebars.SafeString('<a href="' + url + '">' + description + '</a>');
});

// Data
jawJs.data = {
    "resume": {
        "entries": [
            {
                "heading": "Skills",
                "id": "technical-skills",
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
                                "rating": 60
                            },
                            {
                                "item": "Python",
                                "rating": 60
                            },
                            {
                                "item": "SQL/MySQL",
                                "rating": 80
                            },
                        ]
                    },
                    {
                        "heading": "Tools",
                        "ratings": [
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
                                "rating": 60
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
                            "As part of the Marketing Brand/Digital team I have supported the development of Return Path's public facing digital properties. This has included device optimization, demand-gen optimization, lead form optimization, digital analytics, CMS optimization, and implementation of new features and functionality. I have also created digital experiences that demonstrate the use of the Return Path product."
                        ],
                        "links": [
                            {
                                "url": "https://returnpath.com",
                                "description": "Return Path corporate site"
                            },
                            {
                                "url": "https://blog.returnpath.com",
                                "description": "Return Path blog"
                            },
                            {
                                "url": "https://senderscore.org",
                                "description": "Sender Score application"
                            },
                            {
                                "url": "https://returnpath.com/games/path-to-the-inbox/?playnow=true",
                                "description": "Path to the Inbox game"
                            },
                            {
                                "url": "https://returnpath.com/games/email-heroes/?playnow=true",
                                "description": "Email Heroes game"
                            },
                            {
                                "url": "https://returnpath.com/games/the-great-email-escape/?playnow=true",
                                "description": "The Great Email Escape game"
                            },
                        ]
                    },
                    {
                        "heading": "Salesforce Marketing Cloud/ExactTarget (Indianapolis, IN)",
                        "subheading": "Digital Developer (October 2013 to June 2015)",
                        "text": [
                            "As part of the Marketing team I supported the development of Salesforce Marketing Cloud’s public facing digital properties including salesforce.com and exacttarget.com. This included demand-gen optimization, lead form optimization, digital analytics, and refresh of website designs. I also provided digital experiences for public events including Connections 2014 and South by Southwest 2014 that demonstrated the Salesforce Marketing Cloud product. Internally, I provided a way for our digital property analytics to be easily accessed via Salesforce and Salesforce1."
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
                            "Served by designing, developing, and maintaining organizational and evangelistic websites as well as web applications for Keynote, a Christian, non-profit missionary organization."
                        ],
                    },
                    {
                        "heading": "United Launch Alliance / Lockheed Martin (Littleton, CO)",
                        "subheading": "Software Engineering Associate (June 2005 to December 2008)",
                        "text": [
                            "As a member of the Atlas V rocket Avionics Instrumentation team my responsibilities included providing on-site and remote launch support, designing and implementing new hardware, hardware testing, analyzing pre-flight and post-flight data, and supporting booster and upper stage vehicle production. Supported six launches on-site from Cape Canaveral Air Force Station and Vandenberg Air Force Base. Worked on the design, testing, and implementation of the Atlas V forward-facing video system."
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
                "heading": "Awards and Publications",
                "id": "awardsPublications",
                "content": [
                    {
                        "heading": "Awards",
                        "links": [
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
                        ]
                    },
                    {
                        "heading": "Publications",
                        "links": [
                            {
                                "url": "https://www.salesforce.com/blog/2014/10/journey-builder-and-the-connections-2014-mobile-app.html?mc=marketingcloud.com/blog/journey-builder-and-the-connections-2014-mobile-app",
                                "description": "Journey Builder and the Connections 2014 Mobile App"
                            },
                        ]
                    }
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
    },
}

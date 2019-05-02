// JAW Namespace
var jawJs = jawJs || {};

// Constants
jawJs.sections = [
    'Resume',
    'Portfolio'
];

jawJs.paddingTop = 73;

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
    });
})();

// Handlebars custom helpers
Handlebars.registerHelper('link', function(url, description) {
    url = Handlebars.Utils.escapeExpression(url);
    description  = Handlebars.Utils.escapeExpression(description);

    return new Handlebars.SafeString('<a href="' + url + '">' + description + '</a>');
});

Handlebars.registerHelper('stars', function(rating) {
  	var result = '';
    rating = Handlebars.Utils.escapeExpression(rating);

    for (var i = 1; i <= rating; i++) {
		result += '<i class="fas fa-star"></i>';
	}

	for (var j = 1; j <= 5 - rating; j++) {
		result += '<i class="far fa-star"></i>';
	}

    return new Handlebars.SafeString(result);
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
                                "rating": 5
                            },
                            {
                                "item": "HTML",
                                "rating": 5
                            },
                            {
                                "item": "JavaScript",
                                "rating": 5
                            },
                            {
                                "item": "PHP",
                                "rating": 3
                            },
                            {
                                "item": "Python",
                                "rating": 3
                            },
                            {
                                "item": "SQL/MySQL",
                                "rating": 4
                            },
                        ]
                    },
                    {
                        "heading": "Tools",
                        "ratings": [
                            {
                                "item": "Angular",
                                "rating": 3
                            },
                            {
                                "item": "Git",
                                "rating": 5
                            },
                            {
                                "item": "Gulp",
                                "rating": 5
                            },
                            {
                                "item": "Less",
                                "rating": 4
                            },
                            {
                                "item": "Node",
                                "rating": 3
                            },
                            {
                                "item": "Sass",
                                "rating": 5
                            },
                            {
                                "item": "WordPress",
                                "rating": 5
                            }
                        ]
                    },
                    {
                        "heading": "Products",
                        "ratings": [
                            {
                                "item": "Adobe Creative Suite",
                                "rating": 3
                            },
                            {
                                "item": "Google Analytics",
                                "rating": 4
                            },
                            {
                                "item": "Heroku",
                                "rating": 3
                            },
                            {
                                "item": "Marketo",
                                "rating": 5
                            },
                            {
                                "item": "Salesforce",
                                "rating": 3
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
                        "subheading": "Senior Digital Developer (June 2015 - Present)",
                        "text": [
                            "As part of the Marketing Digital team I have supported the development of Return Path's public facing digital properties. This has included device optimization, demand-gen optimization, lead form optimization, digital analytics, CMS optimization, and implementation of new features and functionality. I have also created digital experiences that demonstrate the use of the Return Path product."
                        ],
                        "links": [
                            {
                                "url": "https://returnpath.com",
                                // "text": "ReturnPath.com",
                                "description": "Return Path corporate site"
                            },
                            {
                                "url": "https://blog.returnpath.com",
                                // "text": "Blog",
                                "description": "Return Path blog"
                            },
                            {
                                "url": "https://returnpath.com/emailforpresident",
                                // "text": "Email for President",
                                "description": "Email for President digital experience"
                            },
                            {
                                "url": "https://returnpath.com/superpowers/",
                                "description": "Guardians of the Email Universe digital experience"
                            },
                            {
                                "url": "https://returnpath.com/path-to-the-inbox/",
                                "description": "Path to the Inbox game"
                            },
                        ]
                    },
                    {
                        "heading": "Salesforce Marketing Cloud/ExactTarget (Indianapolis, IN)",
                        "subheading": "Digital Developer (October 2013 - Present)",
                        "text": [
                            "As part of the Marketing team I supported the development of Salesforce Marketing Cloud’s public facing digital properties including salesforce.com and exacttarget.com. This has included demand-gen optimization, lead form optimization, digital analytics and refresh of website designs. I have also provided digital experiences for public events including Connections 2014 and South by Southwest 2014 that demonstrated the Salesforce Marketing Cloud product. Internally, I provided a way for our digital property analytics to be easily accessed via Salesforce and Salesforce1."
                        ],
                        // "links": [
                        //     {
                        //         "url": "http://exacttarget.com",
                        //         "text": "ExactTarget.com",
                        //         "description": "Homepage of the Salesforce Marketing Cloud"
                        //     },
                        //     {
                        //         "url": "http://exacttarget.com/connections",
                        //         "text": "Connections",
                        //         "description": "Homepage for the Connections event"
                        //     },
                        //     {
                        //         "url": "http://www.exacttarget.com/blog/journey-builder-and-the-connections-2014-mobile-app/",
                        //         "text": "Blog Post",
                        //         "description": "Journey Builder and the Connections 2014 Mobile App"
                        //     }
                        // ]
                    },
                    {
                        "heading": "Blue Horseshoe Solutions (Carmel, IN)",
                        "subheading": "Developer (February 2013 to October 2013)",
                        "text": [
                            "Designed and implemented warehouse management and supply chain solutions for external clients. This has included the design and development of new web applications, debugging of existing web applications, and implementation of new features for existing applications.",
                            "As the lead technical developer, I designed and developed a web portal for a 3rd Party Logistics Company. This portal allowed this company and the company’s clients to create and edit shipments, reports, items, customers, and accounts. My role included creating wireframes, writing a functional requirements document, performing UI design, and front end/back end design and development. This is application was being built using ASP.NET MVC3, SQL, JavaScript, jQuery, Twitter Bootstrap."
                        ]
                    },
                    {
                        "heading": "Keynote, a Cru ministry (Westfield, IN)",
                        "subheading": "Web/App Developer/Designer (January 2009 to December 2012)",
                        "text": [
                            "Served by designing, developing, and maintaining organizational and evangelistic websites and web applications for Keynote, a Christian, non-profit missionary organization."
                        ],
                        "links": [
                            {
                                "url": "https://github.com/jawhitney/GodToolsWebApp",
                                "description": "God Tools Web Application (GitHub repo)"
                                // "description": "Evangelistic HTML5 web application optimized for mobile devices (JQuery Mobile, JavaScript, AJAX)"
                            },
                            // {
                            //     "url": "http://godtoolsapp.com",
                            //     "text": "God Tools marketing website",
                            //     "description": "God Tools web, iOS, and Android application marketing page (Twitter Bootstrap, responsive design)"
                            // },
                            {
                                "url": "http://github.com/jawhitney/CruChat",
                                "description": "CruChat (GitHub repo)",
                                // "description": "Evangelistic HTML5 Twitter web application (JQuery, PHP, responsive design)"
                            }
                            // {
                            //     "url": "http://missionhub.com",
                            //     "text": "MissionHub",
                            //     "description": "Contact management system (performed front-end development in Ruby on Rails)"
                            // },
                            // {
                            //     "url": "http://keynote.org",
                            //     "text": "Keynote corporate website",
                            //     "description": "Keynote corporate website (WordPress)"
                            // }
                        ]
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
                                "url": "http://www.dotcommawards.com/",
                                "description": "2017 DotCOMM Platinum award in the \"Outstanding Microsite\" category for Email for President"
                            },
                            {
                                "url": "http://www.dotcommawards.com/",
                                "description": "2017 DotCOMM Gold award in the \"Outstanding Microsite\" category for Guardians of the Email Universe"
                            },
                            {
                                "url": "https://enter.hermesawards.com/",
                                "description": "2017 Hermes Creative Platinum award in the \"Interactive Microsite\" category for Email for President"
                            },
                            {
                                "url": "https://enter.hermesawards.com/",
                                "description": "2017 Hermes Creative Gold award in the \"Interactive Microsite\" category for Guardians of the Email Universe"
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
    // "portfolio": {
    //     "entries": [
    //         {
    //             "title": "ExactTarget/Salesforce Marketing Cloud Corporate Website",
    //             "url": "http://exacttarget.com",
    //             "screenshot": "sfmc.jpg",
    //             "roles": [
    //                 "HTML",
    //                 "CSS",
    //                 "JavaScript",
    //                 "jQuery",
    //                 "PHP",
    //                 "Drupal",
    //                 "Lead Generation"
    //             ]
    //         },
    //         {
    //             "title": "Connections 2014 Website",
    //             "url": "http://exacttarget.com/connections",
    //             "screenshot": "cnx14.jpg",
    //             "roles": [
    //                 "HTML",
    //                 "CSS",
    //                 "JavaScript",
    //                 "jQuery",
    //                 "PHP",
    //                 "Drupal",
    //                 "Ember.js"
    //             ]
    //         },
    //         {
    //             "title": "God Tools Web Application",
    //             "url": "https://github.com/jawhitney/GodToolsWebApp",
    //             "screenshot": "godtools-webapp.jpg",
    //             "roles": [
    //                 "HTML",
    //                 "CSS",
    //                 "JavaScript",
    //                 "jQuery",
    //                 "jQuery Mobile"
    //             ]
    //         },
    //         {
    //             "title": "God Tools Marketing Website",
    //             "url": "http://godtoolsapp.com/",
    //             "screenshot": "godtools-marketing.jpg",
    //             "roles": [
    //                 "HTML",
    //                 "CSS",
    //                 "JavaScript",
    //                 "jQuery",
    //                 "Twitter Bootstrap",
    //                 "Responsive Design"
    //             ]
    //         },
    //         {
    //             "title": "CruChat Twitter Application",
    //             "url": "http://github.com/jawhitney/CruChat",
    //             "screenshot": "cruchat.jpg",
    //             "roles": [
    //                 "HTML",
    //                 "CSS",
    //                 "JavaScript",
    //                 "JQuery",
    //                 "PHP",
    //                 "MySQL",
    //                 "Twitter Bootstrap",
    //                 "Responsive Design"
    //             ]
    //         },
    //         {
    //             "title": "Keynote Corporate Website",
    //             "url": "http://keynote.org/",
    //             "screenshot": "keynote.jpg",
    //             "roles": [
    //                 "HTML",
    //                 "CSS",
    //                 "JQuery",
    //                 "PHP",
    //                 "WordPress"
    //             ]
    //         }
    //     ]
    // }
}
